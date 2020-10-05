import React, { Component } from 'react';
import './contactus.css';
import loginimg from '../auth/login.jpg';
import axios from 'axios';

class contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      msg: '',
    };
  }
  handleInput = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    const left = e.target.name;
    const value = e.target.value;
    this.setState({
      [left]: value,
    });
  };

  handleForm = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      window.alert('Please Enter Name and Email ID');
      return;
    }
    window.alert('Message Send ! Thank You.');
    axios
      .post('/api/users/contactus', this.state)
      .then(() => {
        window.alert('Message Send ! Thank You.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: '100%',
            height: '850px',
            backgroundColor: '#e6e0e0',
          }}
        >
          <div className="contactusgrid">
            <div className="contactusimg">
              <img
                src={loginimg}
                alt="contactusimg"
                width="100%"
                height="620px"
                style={{ borderRadius: '20px', marginTop: '100px' }}
              ></img>
            </div>

            <div className="maincontactus">
              <div
                id="contactusheader"
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  marginTop: '20px',
                  color: 'cadetblue',
                  fontWeight: '600',
                }}
              >
                Contact Us
              </div>
              <div
                style={{
                  width: '50%',
                  height: '10px',
                  margin: 'auto',
                  backgroundColor: 'cadetblue',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                id="contactusbrief"
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                }}
              >
                We'll get back to you as soon as possible.
              </div>
              <form
                method="post"
                data-form-title="CONTACT US"
                style={{ margin: '40px 0px 0px 10px' }}
              >
                <input type="hidden" data-form-email="true" />
                <div className="form-group contactusformbar">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                    required=""
                    placeholder="Name*"
                    data-form-field="Name"
                  />
                </div>
                <div className="form-group contactusformbar">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    required=""
                    placeholder="Email*"
                    data-form-field="Email"
                  />
                </div>
                <div className="form-group contactusformbar">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInput}
                    placeholder="Phone"
                    data-form-field="Phone"
                  />
                </div>
                <div className="form-group contactusformbar">
                  <textarea
                    className="form-control"
                    name="msg"
                    value={this.state.msg}
                    onChange={this.handleInput}
                    placeholder="Message"
                    rows="7"
                    data-form-field="Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    value="Reset"
                    onClick={this.handleForm}
                    className="btn btn-lg contactbutton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contactus;
