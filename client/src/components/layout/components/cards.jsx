// Expertise cards component of the landing page

import React, { Component } from 'react';
import './cards.css';
import card1 from './animation/slides/1.gif';

export class cards extends Component {
  render() {
    return (
      <div>
        <div className="cardtop" id="cards">
          Our Expertise{' '}
        </div>
        <div className="cards-list">
          <div className="card 1">
            <div className="card_image">
              {' '}
              <img src={card1} alt="cardimg" />{' '}
            </div>
            <div className="card_title title-dark">
              <p>Medicine Predictor</p>
            </div>
          </div>

          <div className="card 2">
            <div className="card_image">
              <img src={card1} alt="cardimg" />
            </div>
            <div className="card_title title-dark">
              <p>JavaScript</p>
            </div>
          </div>

          <div className="card 3">
            <div className="card_image">
              <img src={card1} alt="cardimg" />
            </div>
            <div className="card_title title-dark">
              <p>React</p>
            </div>
          </div>

          <div className="card 4">
            <div className="card_image">
              <img src={card1} alt="cardimg" />
            </div>
            <div className="card_title title-dark">
              <p>Nodejs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
