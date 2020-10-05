import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import './Login.css';

import loginimg from './login.jpg';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div
          style={{
            width: '100%',
            height: '750px',
            backgroundColor: '#e6e0e0',
          }}
        >
          <div className="loginwrapper">
            <div className="loginanimation">
              <img
                src={loginimg}
                alt="loginimg"
                width="100%"
                height="620px"
                style={{ borderRadius: '20px' }}
              ></img>
            </div>
            <div className="loginform">
              <h3
                style={{
                  margin: ' 20px 0px 0px 84px',
                  color: 'cadetblue',
                  fontWeight: '500',
                  fontSize: '40px',
                }}
              >
                KaviRam
              </h3>
              <div style={{ margin: '35px 100px 0px 84px', fontSize: '35px' }}>
                Sign into your Account
              </div>
              <div style={{ margin: '30px 0px 0px 84px' }}>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ color: 'cadetblue', fontSize: '22px' }}>
                      Email
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      style={{
                        marginLeft: '0px',
                        borderRadius: '4px',
                        width: '300px',
                        height: '40px',
                      }}
                      placeholder="johndoe@gmail.com"
                      id="email"
                      type="email"
                      className={classnames('form-control', {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <span className="text-danger">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>
                  <div className="form-group">
                    <label style={{ color: 'cadetblue', fontSize: '22px' }}>
                      Password
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      style={{
                        marginLeft: '0px',
                        borderRadius: '4px',
                        width: '300px',
                        height: '40px',
                      }}
                      placeholder="12345678"
                      id="password"
                      type="password"
                      className={classnames('form-control', {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />

                    <span className="text-danger">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div>
                    <button
                      style={{
                        width: '300px',
                        borderRadius: '3px',
                        letterSpacing: '1px',
                        backgroundColor: 'black',
                        color: 'white',
                        marginLeft: '0px',
                      }}
                      type="submit"
                      className="btn btn-large "
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div style={{ margin: '10px 0px 5px 84px' }}>
                <a href="/forgotpassword">Forgot Password ?</a>
              </div>
              <div style={{ margin: '25px 0px 0px 84px', fontSize: '15px' }}>
                Don't have an account ?
              </div>

              <Link to="/register">
                <button
                  className="btn btn-large"
                  style={{
                    margin: '10px 0px 50px 84px',
                    width: '150px',
                    backgroundColor: 'cadetblue',
                    color: 'white',
                  }}
                >
                  Register Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
