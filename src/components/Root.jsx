import React, { Component } from "react";
import Header from "./layout/Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="Página Inicial" />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
