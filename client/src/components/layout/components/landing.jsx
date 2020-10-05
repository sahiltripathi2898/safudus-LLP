// The landing page of home page

import React, { Component } from 'react';
import './landing.css';
import Typical from 'react-typical'; // Animated "AI generated prescriptions"
import { Link } from 'react-scroll';
import dd from './animation/dropdown.gif';
import web from './animation/landing.gif';
import Fade from 'react-reveal/Fade';

export class landing extends Component {
  render() {
    return (
      <div className="landingmain">
        <div className="landingwrapper">
          <div className="landinghead">
            <div className="heading">
              <Typical
                steps={['', 0, 'AI   Generated Prescriptions !', 1000]}
                wrapper="p"
              />
            </div>
            <Fade left delay={2400}>
              <div
                className="orangebar"
                style={{
                  width: '35vw',
                  height: '10px',
                  borderRadius: '15px',
                  backgroundColor: '#c5765a',
                  margin: '10px',
                  marginLeft: '28px',
                  marginTop: '30px',
                }}
              ></div>
              <div className="brief">
                The Data platform company to provide lorem gipsum held company
                for AI Generated Prescriptions.Rooms oh fully taken by worse do.
                Points afraid
              </div>
              <div className="buttongrid">
                <div className="demo">
                  <button
                    className="btn btn-scondary button buttondemo "
                    style={{ width: '160px', height: '50px' }}
                  >
                    <a
                      href="/contactus"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      Request Demo
                    </a>
                  </button>
                </div>
                <div className="talk">
                  <Link
                    activeClass="active"
                    to="slide"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    <button
                      className="btn btn-scondary button buttontalk "
                      style={{ width: '160px', height: '50px' }}
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
          <div className="landinganim">
            <div className="animwrap shadow">
              <Fade right delay={1600}>
                <img
                  src={web}
                  alt="web"
                  width="710px"
                  height="440px"
                  style={{ marginTop: '35px' }}
                />
              </Fade>
            </div>
            <div id="scrolldowntoproduct">
              <Link
                activeClass="active"
                to="cards"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <img src={dd} alt="dd" width="90px" height="90px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
