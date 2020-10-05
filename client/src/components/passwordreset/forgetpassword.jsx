import React, { Component } from 'react';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import './fp.css';

export default class forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', errors: {} };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput = (e) => {
    // e.preventDefault();
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleForm = (e) => {
    e.preventDefault();
    if (this.state.email === '') {
      window.alert('Email is required !');
      return false;
    }
    const data = { email: this.state.email };
    window.alert('Mail Send on your Email ID');
    axios
      .post('/api/users/reset', data)
      .then(() => {
        window.alert('Mail Send on your Email ID');
      })
      .catch((err) => {
        if (err.response && err.response.status === 404)
          NotificationManager.error(err.response.data.msg);
        else NotificationManager.error('Error message', 'Something Went Wrong');
        this.setState({ errors: err.response });
      });
  };
  render() {
    return (
      <div
        className="contents"
        style={{
          width: '100%',
          height: '800px',
          backgroundColor: 'whitesmoke',
        }}
      >
        <NotificationContainer />
        <form onSubmit={this.handleForm}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-6 forgotpasswordmain">
              <div className="cardfp">
                <div
                  className="card-header text-center"
                  style={{ fontSize: '35px' }}
                >
                  Forgot Password ?
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    marginTop: '40px',
                  }}
                >
                  A link will be sent to your mail !
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInput}
                      className="form-control"
                      placeholder="Your Email Here"
                    />
                  </div>
                </div>
                <input
                  type="button"
                  value="Send Mail"
                  onClick={this.handleForm}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
