import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Front from './components/landing.jsx'; // Gets the first home page of the landing page
import Slide from './components/slide.jsx'; // Gets the slides of the landing page
import Cards from './components/cards.jsx'; // Gets the cards of expertise of the landing page
import Products from './components/products.jsx'; // Gets the products with working of the landing page

class Landing extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Front />
          <Cards />
          <Slide />
          <Products />
        </Fragment>
      </Router>
    );
  }
}

export default Landing;
