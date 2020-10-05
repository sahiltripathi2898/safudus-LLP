import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import Linkr from 'react-router-dom/Link';
import { BsJustify } from 'react-icons/bs';

export class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#0e1023',
    };
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 700) {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: '#0e1023' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <nav
          className="navbar sticky-top navbar-expand-lg"
          style={{
            backgroundColor: this.state.color,
            height: '80px',
          }}
        >
          <Linkr to="/">
            <span
              className="navbar-brand logo "
              style={{
                color: 'white',
                fontSize: '46px',
                fontWeight: 'normal',
                fontFamily: 'MuseoModerno',
                width: '190px',
              }}
            >
              KaviRam
            </span>
          </Linkr>
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: 'white' }}
          >
            <BsJustify size="24px" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginRight: '150px' }}
          >
            <ul className="nav navbar-nav ml-auto margin">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '18px' }}
                  href="/"
                >
                  Home{' '}
                </a>
              </li>

              <div className="nav-item active">
                <div className="dropdown" style={{ cursor: 'pointer' }}>
                  <li
                    className=""
                    href=""
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontSize: '18px' }}
                      href="#!"
                    >
                      Products
                    </a>
                  </li>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="dropdown-item text-white" href="#!">
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
                    <div className="dropdown-item text-white" href="#!">
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
                    <div className="dropdown-item text-white" href="#!">
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
                </div>
              </div>
              <li className="nav-item">
                <a
                  className="nav-link "
                  style={{ color: 'white', fontSize: '18px' }}
                  href="team"
                >
                  Our Team{' '}
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '18px' }}
                  href="contactus"
                >
                  {' '}
                  Request Demo{' '}
                </a>
              </li>

              <li className="nav-item">
                <Linkr to="/login">
                  <button type="button" className="btn btn-light loginbtn">
                    Login-Register
                  </button>
                </Linkr>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
