import React, { Component } from 'react';
import './footer.css';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialLinkedin,
} from 'react-icons/ti';
import Fade from 'react-reveal';
import { Link } from 'react-scroll';
import { FaPhoneAlt, FaHome } from 'react-icons/fa';
import { IoMdMailUnread } from 'react-icons/all';

export class footer extends Component {
  render() {
    return (
      <div id="footer">
        <hr></hr>
        <Fade bottom>
          <footer className="page-footer font-small unique-color-dark footer ">
            <div className="footercontainer text-center text-md-left mt-5">
              <div className="row mt-3 contentfooter">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h3 className="font-weight-bold text-white">KaviRam</h3>
                  <hr
                    className="deep-purple accent-2 mb-4 mt-3 hrfooter d-inline-block mx-auto text-white"
                    style={{ width: '125px', height: '3px' }}
                  />
                  <p className="text-white">
                    AI helps in generating prescriptions.
                  </p>
                  <div className="socialmediafooter">
                    <TiSocialFacebook
                      className="text-white"
                      size="30"
                      style={{ marginRight: '10px' }}
                    />

                    <TiSocialGooglePlus
                      className="text-white"
                      size="30"
                      style={{ marginRight: '10px' }}
                    />
                    <TiSocialLinkedin
                      className="text-white"
                      size="30"
                      style={{ marginRight: '10px' }}
                    />
                    <TiSocialTwitter
                      className="text-white"
                      size="30"
                      style={{ marginRight: '10px' }}
                    />
                  </div>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h4 className="text-uppercase font-weight-bold text-white">
                    Products
                  </h4>
                  <hr
                    className="deep-purple accent-2 mb-4 mt-3 hrfooter d-inline-block mx-auto"
                    style={{ width: '125px', height: '3px' }}
                  />
                  <div>
                    <div
                      className="text-white"
                      href="#!"
                      style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        marginBottom: '16px',
                      }}
                    >
                      <Link
                        activeClass="active"
                        to="productno1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        Product 1{' '}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-white"
                      href="#!"
                      style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        marginBottom: '16px',
                      }}
                    >
                      <Link
                        activeClass="active"
                        to="productno2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        Product 2{' '}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-white"
                      href="#!"
                      style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        marginBottom: '16px',
                      }}
                    >
                      <Link
                        activeClass="active"
                        to="productno3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        Product 3{' '}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-white"
                      href="#!"
                      style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        marginBottom: '16px',
                      }}
                    >
                      <Link
                        activeClass="active"
                        to="productno1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                      >
                        Product 4{' '}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h4 className="text-uppercase font-weight-bold text-white">
                    Site Map
                  </h4>
                  <hr
                    className="deep-purple accent-2 mb-4 mt-3 hrfooter d-inline-block mx-auto"
                    style={{ width: '125px', height: '3px' }}
                  />
                  <p>
                    <a
                      href="/"
                      className="text-white"
                      style={{ textDecoration: 'none' }}
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a
                      href="team"
                      className="text-white"
                      style={{ textDecoration: 'none' }}
                    >
                      Our Team
                    </a>
                  </p>
                  <p>
                    <a
                      href="contactus"
                      className="text-white"
                      style={{ textDecoration: 'none' }}
                    >
                      Request Demo
                    </a>
                  </p>
                  <p>
                    <a
                      href="login"
                      className="text-white"
                      style={{ textDecoration: 'none' }}
                    >
                      Login-Register
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h4 className="text-uppercase font-weight-bold text-white">
                    Contact
                  </h4>
                  <hr
                    className="deep-purple accent-2 mb-4 mt-3 hrfooter d-inline-block mx-auto"
                    style={{ width: '125px', height: '3px' }}
                  />
                  <p className="text-white">
                    <FaHome size="20" style={{ marginRight: '10px' }} /> York,
                    NY 10012, US
                  </p>
                  <p className="text-white">
                    <IoMdMailUnread size="20" style={{ marginRight: '10px' }} />{' '}
                    info@example.com
                  </p>
                  <p className="text-white">
                    <FaPhoneAlt size="20" style={{ marginRight: '10px' }} /> +
                    01 234 567 88
                  </p>
                  <p className="text-white">
                    <FaPhoneAlt size="20" style={{ marginRight: '10px' }} /> +
                    01 234 567 89
                  </p>
                </div>
              </div>
            </div>

            <div className="footer-copyright text-center py-3 text-white">
              <h4>
                {' '}
                © 2020 Copyright:{' '}
                <a href="https://mdbootstrap.com/" style={{ color: '#f58a63' }}>
                  {' '}
                  KaviRam.com
                </a>
              </h4>
            </div>
          </footer>
        </Fade>
      </div>
    );
  }
}

export default footer;
