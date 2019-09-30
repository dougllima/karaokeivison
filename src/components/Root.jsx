import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Profile from './profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header title="Teste" />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </React.Fragment>
      </Router>
    );
  }
}
