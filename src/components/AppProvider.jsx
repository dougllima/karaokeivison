import React, { Component } from "react";
import AppContext from "../lib/appContext";

class AppProvider extends Component {
  state = {
    user: null,
    setUser: user => {
      this.setState({ user });
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
