import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import VideoPage from './Video/VideoPage';
import ProfilePage from './Profile/ProfilePage';

const Routes = () => {
  return (
    <Router>
      <React.Fragment>
        <Header title="Teste" />
        <Route exact path="/" component={Home} />
        <Route path="/video" component={VideoPage} />
        <Route path="/profile" component={ProfilePage} />
      </React.Fragment>
    </Router>
  );
};
export default Routes;
