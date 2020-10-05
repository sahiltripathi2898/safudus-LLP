import React, { Component } from 'react';
import './team.css';
import {
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialLinkedin,
} from 'react-icons/ti';
import charan from './components/animation/team/charan.jpg';
import sahil from './components/animation/team/sahil.jpg';
import harshmeet from './components/animation/team/harshmeet1.jpg';
import shweta from './components/animation/team/shweta.png';

export class team extends Component {
  render() {
    return (
      <div>
        <div
          className="teamwrapper"
          id="team"
          style={{
            backgroundColor: 'whitesmoke',
          }}
        >
          <div
            style={{
              margin: '0px 0px 0px 0px',
              height: '100px',
            }}
          ></div>
          <div
            style={{
              margin: '30px 0px 28px 0px',
              textAlign: 'center',
              fontSize: '42px',
              color: 'black',
              letterSpacing: '1px',
            }}
          >
            Meet the{' '}
            <span style={{ color: 'cadetblue', fontWeight: '600' }}>TEAM</span>
          </div>
          <div
            className="teambar"
            style={{
              margin: 'auto',
              borderRadius: '20px',
              backgroundColor: 'cadetblue',
            }}
          ></div>
          <div
            className="aboutusheader"
            style={{
              color: 'black',
            }}
          >
            About Us.
          </div>
          <div
            className="teamoto"
            style={{
              textAlign: 'justify',
            }}
          >
            From here, unlike many of the others on this list, Wanelo completely
            focused on showcasing the unique personalities and hobbies housed
            within its walls. The team members' headshots and bios are cheeky
            and candid just like their brand. <br></br>
            Sportsman do offending supported extremity breakfast by listening.
            Decisively advantages nor expression unpleasing she led met. Estate
            was tended ten boy nearer seemed. As so seeing latter he should
            thirty whence. Steepest speaking up attended it as. Made neat an on
            be gave show snug tore.
          </div>
          <div
            className="teamoto"
            style={{
              textAlign: 'justify',
            }}
          >
            Sportsman do offending supported extremity breakfast by listening.
            Decisively advantages nor expression unpleasing she led met. Estate
            was tended ten boy nearer seemed. As so seeing latter he should
            thirty whence. Steepest speaking up attended it as. Made neat an on
            be gave show snug tore.
          </div>
          <div
            className="teamemberheader"
            style={{
              color: 'black',
            }}
          >
            Members.
          </div>
          <div className="membermain">
            <div
              className="membergrid"
              style={{
                backgroundColor: 'white',
              }}
            >
              <div className="memberimage">
                <img
                  src={charan}
                  alt="team-img"
                  style={{
                    width: '70%',
                    height: '280px',
                    borderRadius: '15%',
                    margin: '10px 0px 10px 40px',
                  }}
                ></img>
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '22px',
                    letterSpacing: '1px',
                    fontWeight: '500',
                  }}
                >
                  Sai Charan Reddy
                </div>
              </div>
              <div>
                <div
                  className="membertitle"
                  style={{
                    color: 'grey',
                    fontSize: '24px',
                    margin: '10px 0px 10px 0px',
                  }}
                >
                  Founder and CEO
                </div>
                <div
                  className="memberdetails"
                  style={{ margin: '0px 0px 10px 0px' }}
                >
                  Sai worked on multiple Data Science projects in healthcare,
                  with 4 years of Data Science work experience with strong
                  Research work that includes as A “Health Outcomes Lead
                  Researcher at USF Health, FL, USA”, “NLP Lead Researcher” at
                  Saint Peter’s University and won a National Level Best Paper
                  Award by The Academy of Business Research (ABR) New Orleans,
                  LA, the USA for his insights using NLP and Machine Learning,
                  Project Lead for the Data Science team of 7 as a “Lead Data
                  Scientist” NYC, USA.
                </div>
                <a
                  href="https://www.linkedin.com/in/sai-charan-reddy-obiliachigari-658447175/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialLinkedin
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="#!">
                  <TiSocialTwitter
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="mailto : sahil.tripathi2898@gmail.com">
                  <TiSocialGooglePlus
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>

                <div
                  style={{
                    color: 'grey',
                    fontSize: '18px',
                    margin: '5px 0px 10px 0px',
                  }}
                >
                  (551)358-3389
                </div>
              </div>
            </div>
          </div>
          <div className="membermain">
            <div
              className="membergrid"
              style={{
                backgroundColor: 'white',
              }}
            >
              <div className="memberimage">
                <img
                  src={charan}
                  alt="team-img"
                  style={{
                    width: '70%',
                    height: '280px',
                    borderRadius: '15%',
                    margin: '10px 0px 10px 40px',
                  }}
                ></img>
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '22px',
                    letterSpacing: '1px',
                    fontWeight: '500',
                  }}
                >
                  Sai Bhargava Reddy
                </div>
              </div>
              <div>
                <div
                  className="membertitle"
                  style={{
                    color: 'grey',
                    fontSize: '24px',
                    margin: '10px 0px 10px 0px',
                  }}
                >
                  Co-Founder
                </div>
                <div
                  className="memberdetails"
                  style={{ margin: '0px 0px 10px 0px' }}
                >
                  Sai worked on multiple Data Science projects in healthcare,
                  with 4 years of Data Science work experience with strong
                  Research work that includes as A “Health Outcomes Lead
                  Researcher at USF Health, FL, USA”, “NLP Lead Researcher” at
                  Saint Peter’s University and won a National Level Best Paper
                  Award by The Academy of Business Research (ABR) New Orleans,
                  LA, the USA for his insights using NLP and Machine Learning,
                  Project Lead for the Data Science team of 7 as a “Lead Data
                  Scientist” NYC, USA.
                </div>
                <a href="#!">
                  <TiSocialLinkedin
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="#!">
                  <TiSocialTwitter
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="mailto : sahil.tripathi2898@gmail.com">
                  <TiSocialGooglePlus
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>

                <div
                  style={{
                    color: 'grey',
                    fontSize: '18px',
                    margin: '5px 0px 10px 0px',
                  }}
                >
                  (551)358-3389
                </div>
              </div>
            </div>
          </div>
          <div className="restmemgrid">
            <div className="mem">
              <div className="memcard" style={{ borderRadius: '20px' }}>
                <img
                  src={sahil}
                  alt="team-img"
                  width="80%"
                  height="220px"
                  style={{ margin: '15px 0px 0px 26px', borderRadius: '20px' }}
                ></img>
                <div
                  style={{
                    margin: '5px 10px 4px 10px',
                    textAlign: 'center',
                    letterSpacing: '1.1px',
                    fontSize: '26px',
                  }}
                >
                  Sahil Tripathi
                </div>
                <span
                  style={{
                    margin: '10px 0px 10px 50px',
                    marginTop: '80px',
                    color: 'grey',
                    fontSize: '18px',
                  }}
                >
                  Full Stack Developer
                </span>
                <br></br>
                <a href="#!">
                  <TiSocialLinkedin
                    size="30px"
                    style={{ marginRight: '10px', marginLeft: '70px' }}
                  />
                </a>
                <a href="#!">
                  <TiSocialTwitter
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="mailto : sahil.tripathi2898@gmail.com">
                  <TiSocialGooglePlus
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
              </div>
            </div>
            <div className="mem">
              <div className="memcard" style={{ borderRadius: '20px' }}>
                <img
                  src={harshmeet}
                  alt="team-img"
                  width="80%"
                  height="220px"
                  style={{ margin: '15px 0px 0px 26px', borderRadius: '20px' }}
                ></img>
                <div
                  style={{
                    margin: '5px 0px 6px 0px',
                    textAlign: 'center',
                    letterSpacing: '0.8px',
                    fontSize: '24px',
                  }}
                >
                  Harshmeet Chandhok
                </div>
                <span
                  style={{
                    margin: '10px 0px 10px 55px',
                    marginTop: '84px',
                    textAlign: 'center',
                    color: 'grey',
                    fontSize: '18px',
                  }}
                >
                  NLP Data Scientist
                </span>
                <br></br>
                <a href="#!">
                  <TiSocialLinkedin
                    size="30px"
                    style={{ marginRight: '10px', marginLeft: '70px' }}
                  />
                </a>
                <a href="#!">
                  <TiSocialTwitter
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="mailto : sahil.tripathi2898@gmail.com">
                  <TiSocialGooglePlus
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
              </div>
            </div>
            <div className="mem">
              <div className="memcard" style={{ borderRadius: '20px' }}>
                <img
                  src={shweta}
                  alt="team-img"
                  width="80%"
                  height="220px"
                  style={{ margin: '15px 0px 0px 26px', borderRadius: '20px' }}
                ></img>
                <div
                  style={{
                    margin: '5px 10px 4px 10px',
                    textAlign: 'center',
                    letterSpacing: '1.1px',
                    fontSize: '26px',
                  }}
                >
                  Shweta Kamble
                </div>
                <span
                  style={{
                    margin: '10px 0px 10px 54px',
                    marginTop: '80px',
                    color: 'grey',
                    fontSize: '18px',
                  }}
                >
                  NLP Data Scientist
                </span>
                <br></br>
                <a href="#!">
                  <TiSocialLinkedin
                    size="30px"
                    style={{ marginRight: '10px', marginLeft: '70px' }}
                  />
                </a>
                <a href="#!">
                  <TiSocialTwitter
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="mailto : sahil.tripathi2898@gmail.com">
                  <TiSocialGooglePlus
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
              </div>
            </div>
            <div className="mem">
              <div className="memcard" style={{ borderRadius: '20px' }}>
                <img
                  src={sahil}
                  alt="team-img"
                  width="80%"
                  height="220px"
                  style={{ margin: '15px 0px 0px 26px', borderRadius: '20px' }}
                ></img>
                <div
                  style={{
                    margin: '5px 0px 4px 0px',
                    textAlign: 'center',
                    letterSpacing: '0.8px',
                    fontSize: '24px',
                  }}
                >
                  Soham Chakroborty
                </div>
                <span
                  style={{
                    margin: '10px 0px 10px 50px',
                    marginTop: '80px',

                    color: 'grey',
                    fontSize: '18px',
                  }}
                >
                  Machine Learning
                </span>
                <br></br>
                <a href="#!">
                  <TiSocialLinkedin
                    size="30px"
                    style={{ marginRight: '10px', marginLeft: '70px' }}
                  />
                </a>
                <a href="#!">
                  <TiSocialTwitter
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
                <a href="mailto : sahil.tripathi2898@gmail.com">
                  <TiSocialGooglePlus
                    size="30px"
                    style={{ marginRight: '10px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default team;
