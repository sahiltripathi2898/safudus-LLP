import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store'; // Redux store

import Home from './components/layout/Home.jsx'; // Gets the home page component
import Footer from './components/layout/footer.jsx'; // Gets the footer component
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar.jsx';
import Contact from './components/layout/contactus';
import Forgotpassword from './components/passwordreset/forgetpassword.jsx';
import Resetpassword from './components/passwordreset/resetpassword.jsx';
import Team from './components/layout/team.jsx';
import Chat from './components/chatbot/chatform.jsx'; // Gets the chatbot component

import './App.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Footer} />
            <Route exact path="/" component={Chat} />
            <Route exact path="/register" component={Navbar} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register" component={Chat} />
            <Route exact path="/login" component={Navbar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login" component={Chat} />
            <Route exact path="/team" component={Navbar} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/team" component={Footer} />
            <Route exact path="/team" component={Chat} />
            <Route exact path="/contactus" component={Navbar} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/contactus" component={Footer} />
            <Route exact path="/contactus" component={Chat} />
            <Route exact path="/forgotpassword" component={Navbar} />
            <Route exact path="/forgotpassword" component={Forgotpassword} />
            <Route exact path="/change-password/:slug" component={Navbar} />
            <Route
              exact
              path="/change-password/:slug"
              component={Resetpassword}
            />

            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
