import React, { Component } from 'react';
import Fade from 'react-reveal';
import anim2 from './animation/product/2.gif';
import { GiBrain } from 'react-icons/gi';
import './products.css';

export class products extends Component {
  render() {
    return (
      <div>
        <div
          className="productmain"
          style={{ backgroundColor: 'whitesmoke', height: '1800px' }}
        >
          <div className="producthead">
            <div className="productop">Products & Services</div>
            <div className="productbottom">
              Check out some of our latest work.
            </div>
          </div>
          <div className="productwrapper1" id="productno1">
            <div className="a1">
              <Fade left>
                <div className="videoproduct1">
                  <h3
                    style={{
                      marginTop: '10px',
                      textAlign: 'center',
                      fontSize: '32px',
                    }}
                  >
                    Machine Learning{' '}
                    <GiBrain
                      size="40px"
                      style={{ margin: '10px 0px 0px 25px' }}
                      color="cadetblue"
                    />
                  </h3>

                  <div className="iframe-container">
                    <iframe
                      src="https://www.youtube.com/embed/tlTKTTt47WE"
                      frameBorder="0"
                      title="productframe"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Fade>
            </div>

            <Fade right>
              <div className="b1">
                <h2
                  style={{
                    textAlign: 'justify',
                    marginTop: '100px',
                    fontSize: '40px',
                  }}
                >
                  How it <span style={{ color: 'cadetblue' }}>works !</span>
                </h2>
                <div
                  className="productdetail"
                  style={{ marginTop: '15px', fontSize: '19px' }}
                >
                  Now indulgence dissimilar for his thoroughly has terminated.
                  Agreement offending commanded my an. Change wholly say why
                  eldest period. Are projection put celebrated particular
                  unreserved joy unsatiable its. In then dare good am rose bred
                  or. On am in nearer square wanted.
                </div>
                <img
                  src={anim2}
                  alt="anim2"
                  width="300px"
                  height="150px"
                  style={{ margin: '5px 0px 0px 80px' }}
                />
              </div>
            </Fade>
          </div>

          <div className="productwrapper2" id="productno2">
            <Fade left>
              <div className="a2">
                <h2
                  style={{
                    textAlign: 'justify',
                    marginTop: '100px',
                    fontSize: '40px',
                    marginLeft: '140px',
                  }}
                >
                  How it <span style={{ color: 'cadetblue' }}>works !</span>
                </h2>
                <div
                  className="productdetail2"
                  style={{
                    marginTop: '15px',
                    fontSize: '19px',
                    marginLeft: '140px',
                  }}
                >
                  Now indulgence dissimilar for his thoroughly has terminated.
                  Agreement offending commanded my an. Change wholly say why
                  eldest period. Are projection put celebrated particular
                  unreserved joy unsatiable its. In then dare good am rose bred
                  or. On am in nearer square wanted.
                </div>
                <img
                  src={anim2}
                  alt="anim2"
                  width="300px"
                  height="150px"
                  style={{ margin: '5px 0px 0px 190px' }}
                />
              </div>
            </Fade>
            <Fade right>
              <div className="b2">
                <div className="videoproduct2">
                  <h3
                    style={{
                      marginTop: '30px',
                      textAlign: 'center',
                      fontSize: '32px',
                    }}
                  >
                    Artificial Intelligence
                    <GiBrain
                      size="40px"
                      style={{ margin: '10px 0px 0px 25px' }}
                      color="cadetblue"
                    />
                  </h3>
                  <div className="iframe-container">
                    <iframe
                      width="560"
                      height="315"
                      title="productframe"
                      src="https://www.youtube.com/embed/3d9i_0Ty7Cg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className="productwrapper1" id="productno3">
            <div className="a1">
              <Fade left>
                <div className="videoproduct1">
                  <h3
                    style={{
                      marginTop: '30px',
                      textAlign: 'center',
                      fontSize: '32px',
                    }}
                  >
                    Machine Learning{' '}
                    <GiBrain
                      size="40px"
                      style={{ margin: '10px 0px 0px 25px' }}
                      color="cadetblue"
                    />
                  </h3>

                  <div className="iframe-container">
                    <iframe
                      width="560"
                      height="315"
                      title="productframe"
                      src="https://www.youtube.com/embed/e-P5IFTqB98"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Fade>
            </div>

            <Fade right>
              <div className="b1">
                <h2
                  style={{
                    textAlign: 'justify',
                    marginTop: '100px',
                    fontSize: '40px',
                  }}
                >
                  How it <span style={{ color: 'cadetblue' }}>works !</span>
                </h2>
                <div
                  className="productdetail"
                  style={{ marginTop: '15px', fontSize: '19px' }}
                >
                  Now indulgence dissimilar for his thoroughly has terminated.
                  Agreement offending commanded my an. Change wholly say why
                  eldest period. Are projection put celebrated particular
                  unreserved joy unsatiable its. In then dare good am rose bred
                  or. On am in nearer square wanted.
                </div>
                <img
                  src={anim2}
                  alt="anim2"
                  width="300px"
                  height="150px"
                  style={{ margin: '5px 0px 0px 80px' }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default products;
