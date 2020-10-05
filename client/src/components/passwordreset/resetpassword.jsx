import React, { Component } from 'react';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

export default class resetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkDate: '',
      email: '',
      password: '',
      confirm_password: '',
      errors: {},
    };
  }
  componentDidMount() {
    let slugParam = this.props.match.params.slug;
    let splitSlug = slugParam.split('+++');
    let reqDate = splitSlug[0];
    let email = splitSlug[1];
    console.log(reqDate);
    console.log(email);
    this.setState({ email: email, linkDate: reqDate });
    let date1 = new Date(reqDate);
    let currentDate = new Date();
    let differenceinMS = currentDate - date1;
    if (differenceinMS > 3600000) {
      NotificationManager.error(
        'Link Not Valid ... Link will be valid for 15 min.Please sent the reset link Again'
      );
      this.props.history.push('/login');
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleForm = (e) => {
    e.preventDefault();
    if (this.state.email === '') {
      NotificationManager.warning('Email is Required');
      return false;
    }

    axios
      .post('/api/users/updatePassword', this.state)
      .then((result) => {
        window.alert('Password Reseted');
        this.props.history.push('/login');
      })
      .catch((err) => {
        if (err.response && err.response.status === 404)
          NotificationManager.error(err.response.data.msg);
        else NotificationManager.error('Something Went Wrong');
        this.setState({ errors: err.response });
      });
  };
  render() {
    return (
      <div
        className="content"
        style={{
          width: '100%',
          height: '800px',
          backgroundColor: 'whitesmoke',
        }}
      >
        <NotificationContainer />
        <form onSubmit={this.handleForm}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-6" style={{ margin: '120px 0px 0px 410px' }}>
              <div className="card">
                <div
                  className="card-header text-center"
                  style={{ fontSize: '35px' }}
                >
                  Reset Password
                </div>
                <div className="card-body">
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInput}
                      className="form-control"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <input
                      type="password"
                      name="confirm_password"
                      value={this.state.confirm_password}
                      onChange={this.handleInput}
                      className="form-control"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>

                <input
                  type="button"
                  value="Reset"
                  onClick={this.handleForm}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
