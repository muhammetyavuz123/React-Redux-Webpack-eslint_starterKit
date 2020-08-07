/* eslint-disable no-empty-pattern */
import React from 'react';
// import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
import LandingPage from './views/LandingPage/LandingPage.js';
import ProfilePage from './views/ProfilePage/ProfilePage.js';

const App = ({}) => (
  // <Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </Router>
  // </Provider>
);

// App.propTypes = {
//   store: PropTypes.object.isRequired
// };

export default App;
