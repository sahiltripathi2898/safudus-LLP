import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import './Register.css';
import loginimg from './login.jpg';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div
          style={{
            width: '100%',
            height: '850px',
            backgroundColor: '#e6e0e0',
          }}
        >
          <div className="loginwrapper">
            <div className="loginanimation">
              <img
                src={loginimg}
                width="100%"
                alt="registerimg"
                height="620px"
                style={{ borderRadius: '20px' }}
              ></img>
            </div>
            <div className="loginform">
              <h3
                style={{
                  margin: ' 20px 100px 0px 84px',
                  color: 'cadetblue',
                  fontWeight: '500',
                  fontSize: '40px',
                }}
              >
                Safidus LLP
              </h3>
              <div style={{ margin: '15px 100px 0px 84px', fontSize: '25px' }}>
                Register your Account
              </div>
              <div style={{ margin: '20px 0px 0px 84px' }}>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label style={{ color: 'cadetblue', fontSize: '16px' }}>
                      Name
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '4px',
                        width: '300px',
                        height: '35px',
                      }}
                      className={classnames('form-control', {
                        invalid: errors.name,
                      })}
                    />

                    <span className="text-danger">{errors.name}</span>
                  </div>
                  <div className="form-group">
                    <label style={{ color: 'cadetblue', fontSize: '16px' }}>
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
                        height: '35px',
                      }}
                      placeholder="johndoe@gmail.com"
                      id="email"
                      type="email"
                      className={classnames('form-control', {
                        invalid: errors.email,
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div className="form-group">
                    <label style={{ color: 'cadetblue', fontSize: '16px' }}>
                      Password
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '4px',
                        width: '300px',
                        height: '35px',
                      }}
                      placeholder="12345678"
                      className={classnames('form-control', {
                        invalid: errors.password,
                      })}
                    />

                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="form-group">
                    <label style={{ color: 'cadetblue', fontSize: '16px' }}>
                      Confirm Password
                    </label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '4px',
                        width: '300px',
                        height: '35px',
                      }}
                      placeholder="12345678"
                      className={classnames('form-control', {
                        invalid: errors.password2,
                      })}
                    />

                    <span className="red-text">{errors.password2}</span>
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
                      Register
                    </button>
                  </div>
                </form>
              </div>

              <div style={{ margin: '25px 0px 0px 84px', fontSize: '15px' }}>
                Already have an account ?
              </div>

              <Link to="/login">
                <button
                  className="btn btn-large"
                  style={{
                    margin: '10px 0px 30px 84px',
                    width: '150px',
                    backgroundColor: 'cadetblue',
                    color: 'white',
                  }}
                >
                  Login Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
