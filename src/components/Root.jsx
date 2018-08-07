import React, { Component } from "react";
import Header from "./layout/Header";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppProvider from "./AppProvider";

export default class Root extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div>
            <Header title="Página Inicial" />
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      </AppProvider>
    );
  }
}
