import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './dashboard.css';
import { FiLogOut } from 'react-icons/fi';
import anim1 from '../layout/components/animation/slides/1.gif';

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className="dashboardmain">
          <div className="dashboardgrid">
            <div>
              <div
                className="dashboardlogo"
                style={{
                  color: 'white',
                  fontWeight: 'normal',
                  fontFamily: 'MuseoModerno',
                }}
              >
                KaviRam
              </div>
            </div>
            <div>
              <div
                className="dashboardwelcome"
                style={{
                  color: 'white',
                  fontWeight: '700',
                  letterSpacing: '1px',
                }}
              >
                Welcome {user.name.split(' ')[0]}
              </div>
              <div
                className="dashboardwelcomebrief"
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                You're now logged in and ready to use our Solutions!
              </div>
            </div>
            <div className="dashboardlogoutbutton">
              <div style={{ marginLeft: '320px' }}>
                <button
                  style={{}}
                  onClick={this.onLogoutClick}
                  className="btn btn-large logoutbutton"
                >
                  Logout
                  <FiLogOut style={{ marginLeft: '10px' }} />
                </button>
              </div>
            </div>
          </div>
          <div
            className="dashboardbar"
            style={{
              height: '20px',
              backgroundColor: '#f58a63 ',
              borderRadius: '30px',
            }}
          ></div>
          <div class="dashboard-cards-list">
            <div class="dashcard 1">
              <div class="card-image">
                {' '}
                <img src={anim1} alt="dashboardimg1" />{' '}
              </div>
              <div class="card-title title-dark">
                <p>Medicine Predictor</p>
              </div>
              <button
                className="btn btn-dark"
                style={{ width: '80px', margin: '280px 0px 10px 115px' }}
              >
                Dive In
              </button>
            </div>

            <div class="dashcard 2">
              <div class="card-image">
                <img src={anim1} alt="dashboardimg2" />
              </div>
              <div class="card-title title-dark">
                <p>Artificial Intelligence</p>
              </div>
              <button
                className="btn btn-dark"
                style={{ width: '80px', margin: '280px 0px 10px 115px' }}
              >
                Dive In
              </button>
            </div>

            <div class="dashcard 3">
              <div class="card-image">
                <img
                  src={anim1}
                  alt="dashboardimg3"
                  width="200px"
                  height="50px"
                />
              </div>
              <div class="card-title title-dark">
                <p>React</p>
              </div>
              <button
                className="btn btn-dark"
                style={{ width: '80px', margin: '280px 0px 10px 115px' }}
              >
                Dive In
              </button>
            </div>

            <div class="dashcard 4">
              <div class="card-image">
                <img src={anim1} alt="dashboardimg4" />
              </div>
              <div class="card-title title-dark">
                <p>Nodejs</p>
              </div>
              <button
                className="btn btn-dark"
                style={{ width: '80px', margin: '280px 0px 10px 115px' }}
              >
                Dive In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
