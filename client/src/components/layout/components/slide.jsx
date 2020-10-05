import React from 'react';
import { Slide } from 'react-slideshow-image';
import robot from './animation/robot.gif';
import anim2 from './animation/slides/1.gif';
import anim3 from './animation/slides/3.gif';
import { GrWorkshop } from 'react-icons/gr';
import Fade from 'react-reveal';
import { Link } from 'react-scroll';

import './slide.css';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slidemain" id="slide">
      <div className="slidegradient"></div>
      <Fade bottom>
        <div className="productshead" id="productslide">
          <div className="top">
            Solutions{' '}
            <GrWorkshop style={{ marginLeft: '20px' }} color="#f58a63" />
          </div>
        </div>
        <div className="container">
          <Slide {...properties}>
            <div className="each-slide">
              <div className="row">
                <div className="col-sm-4 animations">
                  <img src={anim2} alt="robot" className="robot" />
                </div>

                <div className="col-sm-8 content">
                  <div className="header">Product</div>
                  <div className="briefs">
                    No opinions answered oh felicity is resolved hastened.
                    Produced it friendly my if opinions humoured. Enjoy is wrong
                    folly no taken. It sufficient instrument insipidity
                    simplicity at interested. Law pleasure attended differed mrs
                    fat and formerly.
                  </div>
                  <Link
                    activeClass="active"
                    to="productno1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    <button className="read">Read More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="each-slide">
              <div className="row">
                <div className="col-sm-4 animations">
                  <img src={robot} alt="robot" className="robot" />
                </div>

                <div className="col-sm-8 content">
                  <div className="header">Header</div>
                  <div className="briefs">
                    Am terminated it excellence invitation projection as. She
                    graceful shy believed distance use nay. Lively is people so
                    basket ladies window expect. Supply as so period it enough
                    income he genius. Themselves acceptance bed sympathize get
                    dissimilar way admiration son.
                  </div>
                  <Link
                    activeClass="active"
                    to="productno2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    <button className="read">Read More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="each-slide">
              <div className="row">
                <div className="col-sm-4 animations">
                  <img src={anim3} alt="robot" className="robot" />
                </div>

                <div className="col-sm-8 content">
                  <div className="header">Header</div>
                  <div className="briefs">
                    Am terminated it excellence invitation projection as. She
                    graceful shy believed distance use nay. Lively is people so
                    basket ladies window expect. Supply as so period it enough
                    income he genius. Themselves acceptance bed sympathize get
                    dissimilar way admiration son. This are calm case roof and.
                  </div>
                  <Link
                    activeClass="active"
                    to="productno3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    <button className="read">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
