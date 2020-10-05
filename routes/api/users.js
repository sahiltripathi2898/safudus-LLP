const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const nodemailer = require('nodemailer');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

// @route POST api/users/reset
// @desc Send Mail using nodemailer
// @access Public

router.post('/reset', function (req, res) {
  User.findOne({ email: req.body.email }, function (err, userData) {
    console.log(userData.email);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sahil.tripathi2898@gmail.com',
        pass: 'Sahil_ankur@t2898',
      },
      connectionTimeout: 5 * 60 * 1000,
    });
    var currentDateTime = new Date();
    var mailOptions = {
      from: 'sahil.tripathi2898@gmail.com',
      to: req.body.email,
      subject: 'Reset Password of Safidus LLP account',
      html:
        '<h1>Welcome To Safidus LLP! </h1><p>\
      <h3>Hello ' +
        userData.name +
        "</h3>\
      If you requested to reset your password then click on the below link<br/>\
      <a href='http://localhost:3000/change-password/" +
        currentDateTime +
        '+++' +
        userData.email +
        "'>Click On This Link</a>\
      </p>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
});

// @route POST api/users/updatePassword
// @desc Reset Password
// @access Public

router.post('/updatePassword', function (req, res) {
  User.findOne({ email: req.body.email }, function (errorFind, userData) {
    if (req.body.password == req.body.confirm_password) {
      bcrypt.genSalt(10, (errB, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          let newPassword = hash;
          let condition = { _id: userData._id };
          let dataForUpdate = {
            password: newPassword,
            updatedDate: new Date(),
          };
          User.findOneAndUpdate(
            condition,
            dataForUpdate,
            { new: true },
            function (error, updatedUser) {
              if (error) {
                if (err.name === 'MongoError' && error.code === 11000) {
                  return res
                    .status(500)
                    .json({ msg: 'Mongo Db Error', error: error.message });
                } else {
                  return res.status(500).json({
                    msg: 'Unknown Server Error',
                    error: 'Unknow server error when updating User',
                  });
                }
              } else {
                if (!updatedUser) {
                  return res.status(404).json({
                    msg: 'User Not Found.',
                    success: false,
                  });
                } else {
                  return res.status(200).json({
                    success: true,
                    msg: 'Your password are Successfully Updated',
                    updatedData: updatedUser,
                  });
                }
              }
            }
          );
        });
      });
    }
    if (errorFind) {
      return res.status(401).json({
        msg: 'Something Went Wrong',
        success: false,
      });
    }
  });
});

// @route POST api/users/contactus
// @desc Send mail of contact form
// @access Public

router.post('/contactus', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const msg = req.body.msg;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sahil.tripathi2898@gmail.com',
      pass: 'Sahil_ankur@t2898',
    },
    connectionTimeout: 5 * 60 * 1000,
  });

  var mailOptions = {
    from: 'sahil.tripathi2898@gmail.com',
    to: 'sahil.tripathi21@gmail.com',
    subject: 'Person contacting Safidus LLP',
    html:
      '<h2>A person with following details wants to contact Safidus LLP</h2>' +
      '<h3>' +
      name +
      '</h3>' +
      '<h3>' +
      email +
      '</h3>' +
      '<h3>' +
      phone +
      '</h3>' +
      '<h3>' +
      msg +
      '</h3>',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

// @route POST api/users/chatbot
// @desc Send mail of chat bot
// @access Public

router.post('/chatbot', function (req, res) {
  console.log(req);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sahil.tripathi2898@gmail.com',
      pass: 'Sahil_ankur@t2898',
    },
    connectionTimeout: 5 * 60 * 1000,
  });

  var mailOptions = {
    from: 'sahil.tripathi2898@gmail.com',
    to: 'sahil.tripathi21@gmail.com',
    subject: 'Person with following email is contacting via chatbot',
    html: '<h4>Email id - </h4>' + req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

router.post('/chatbot2', function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sahil.tripathi2898@gmail.com',
      pass: 'Sahil_ankur@t2898',
    },
    connectionTimeout: 5 * 60 * 1000,
  });

  var mailOptions = {
    from: 'sahil.tripathi2898@gmail.com',
    to: 'sahil.tripathi21@gmail.com',
    subject: 'Person with following email is contacting via chatbot',
    html:
      '<h4>Email id - </h4>' +
      req.body.emaildetail +
      '<h4>Phone No. </h4>' +
      req.body.phdetail,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
