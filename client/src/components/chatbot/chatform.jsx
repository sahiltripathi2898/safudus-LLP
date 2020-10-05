import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import botimg from './human.png';
import bot from './4.gif';
import './chatform.css';
import Fade from 'react-reveal/Fade';

class ReviewE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { email } = steps;
    console.log(steps);
    this.setState({ email });
    {
      if (!!email) {
        console.log(email);
        axios
          .post('/api/users/chatbot', email)
          .then(() => {
            window.alert('Send chat email');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  render() {
    const { email } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h5>Your Email is</h5>
        <table>
          <tbody>
            <tr>
              <td>{email.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReviewE.propTypes = {
  steps: PropTypes.object,
};

ReviewE.defaultProps = {
  steps: undefined,
};

//
class ReviewP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ph: '',
      ph: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { ph } = steps;
    this.setState({ ph });

    if (!!ph) {
      console.log(ph);
      axios
        .post('/api/users/chatbot', ph)
        .then(() => {
          window.alert('Send chat ph');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { ph } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h5>Your Phone No. is</h5>
        <table>
          <tbody>
            <tr>
              <td>{ph.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReviewP.propTypes = {
  steps: PropTypes.object,
};

ReviewP.defaultProps = {
  steps: undefined,
};

//
class ReviewBoth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailboth: '',
      phboth: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { emailboth, phboth } = steps;
    this.setState({ emailboth, phboth });
    {
      const data = {
        emaildetail: emailboth.message,
        phdetail: phboth.message,
      };
      console.log(data);

      if (!!data) {
        console.log(data);
        axios
          .post('/api/users/chatbot2', data)
          .then(() => {
            window.alert('Send chat emailboth');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  render() {
    const { emailboth, phboth } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h5>Your details are</h5>
        <table>
          <tbody>
            <tr>
              <td>{emailboth.value}</td>
            </tr>
            <tr>
              <td>{phboth.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReviewBoth.propTypes = {
  steps: PropTypes.object,
};

ReviewBoth.defaultProps = {
  steps: undefined,
};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#187c80',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#187c80',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#5a828f',
};

const steps = [
  {
    id: '1',
    message: 'Hi There !',
    trigger: 'comp',
  },
  {
    id: 'comp',
    component: (
      <h1>
        <img src={bot} width="200px" height="210px" alt="chatbotimg"></img>
      </h1>
    ),
    trigger: 'option1',
  },
  {
    id: 'option1',
    options: [
      { value: 1, label: 'Hello', trigger: '2' },
      { value: 2, label: 'Hey!', trigger: '2' },
      { value: 3, label: 'Hiii', trigger: '2' },
    ],
    placeholder: 'Choose an option... ',
  },
  {
    id: '2',
    message: 'Looking for something ? ',
    trigger: '3',
    placeholder: 'Choose an option... ',
  },
  {
    id: '3',
    message: 'I can help you :)',
    trigger: '4',
    placeholder: 'Choose an option... ',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Yes', trigger: '5' },
      { value: 2, label: 'No', trigger: 'no' },
    ],
    placeholder: 'Choose an option... ',
  },
  {
    id: '5',
    message: 'What would you like to share?',
    trigger: '6',
    placeholder: 'Choose an option... ',
  },
  {
    id: '6',
    options: [
      { value: 1, label: 'Email ID', trigger: '7' },
      { value: 2, label: 'Phone No.', trigger: '20' },
      { value: 3, label: 'Both', trigger: '40' },
    ],
    placeholder: 'Choose an option... ',
  },
  {
    id: '7',
    message: 'Please share your Email !',
    trigger: 'email',
    placeholder: 'example@gmail.com',
  },
  {
    id: 'email',
    user: true,
    validator: (value) => {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(value)) {
        return 'Please enter a valid Email ID';
      }
      return true;
    },
    trigger: '8',
    placeholder: 'example@gmail.com',
  },
  {
    id: '8',
    component: <ReviewE />,
    asMessage: true,
    trigger: '9',
  },
  {
    id: '9',
    message: `Do you want to update ?`,
    trigger: '10',
  },
  {
    id: '10',
    options: [
      { value: 1, label: 'Yes', trigger: 'update-email' },
      { value: 2, label: 'No', trigger: 'thank' },
    ],
  },
  {
    id: 'update-email',
    update: 'email',
    trigger: '8',
  },
  {
    id: 'thank',
    message: 'Thank You, We will get back to you soon !',
    end: true,
  },

  {
    id: '20',
    message: 'Please share your Phone No. !',
    trigger: 'ph',
    placeholder: '123456789',
  },
  {
    id: 'ph',
    user: true,
    trigger: '21',
  },
  {
    id: '21',
    component: <ReviewP />,
    asMessage: true,
    trigger: '22',
  },
  {
    id: '22',
    message: `Do you want to update?`,
    trigger: '23',
  },
  {
    id: '23',
    options: [
      { value: 1, label: 'Yes', trigger: 'update-ph' },
      { value: 2, label: 'No', trigger: 'thank' },
    ],
  },
  {
    id: 'update-ph',
    update: 'ph',
    trigger: '21',
  },

  {
    id: '40',
    message: 'Please share your Phone No. !',
    trigger: 'phboth',
    placeholder: '123456789',
  },
  {
    id: 'phboth',
    user: true,
    trigger: '41',
  },
  {
    id: '41',
    message: 'Please share your Email ID. !',
    trigger: 'emailboth',
    placeholder: 'example@gmail.com',
  },
  {
    id: 'emailboth',
    user: true,
    trigger: '42',
  },
  {
    id: '42',
    component: <ReviewBoth />,
    asMessage: true,
    trigger: '43',
  },
  {
    id: '43',
    message: `Do you want to update ?`,
    trigger: '44',
  },
  {
    id: '44',
    options: [
      { value: 1, label: 'Yes', trigger: 'updateboth' },
      { value: 2, label: 'No', trigger: 'thank' },
    ],
  },
  {
    id: 'updateboth',
    options: [
      { value: 1, label: 'Update Email?', trigger: 'updatebothemail' },
      { value: 2, label: 'Update Phone No.?', trigger: 'updatebothph' },
    ],
  },
  {
    id: 'updatebothph',
    update: 'phboth',
    trigger: '42',
  },
  {
    id: 'updatebothemail',
    update: 'emailboth',
    trigger: '42',
  },
  {
    id: 'no',
    message: 'Okay ! Let me know if you need something.',
    end: true,
  },
];

class SimpleForm extends Component {
  render() {
    return (
      <div style={{ right: '0', position: 'fixed', bottom: '0' }}>
        <Fade right delay={2700}>
          <div
            className="speech-bubble"
            style={{
              marginRight: '115px',
              marginBottom: '45px',
              color: 'white',
              textAlign: 'center',
              fontSize: '20px',
            }}
          >
            <div>Hey There !</div>
          </div>

          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              floating={true}
              headerTitle={'Welcome to KaviRam'}
              floatingStyle={{
                backgroundColor: 'black',
                height: '60px',
                width: '60px',
              }}
              bubbleStyle={{ fontSize: '15px' }}
              userAvatar={botimg}
              style={{ height: '520px', width: '360px' }}
              className="chatbotmobilever"
            />
          </ThemeProvider>
        </Fade>
      </div>
    );
  }
}

export default SimpleForm;
