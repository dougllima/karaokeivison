import React, { Component } from "react";
import AppContext from "../lib/appContext";
import * as colors from "@material-ui/core/colors";

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.checkProps("user"),
      userTheme: this.checkProps("userTheme", {
        palette: {
          primary: colors.lightBlue,
          secondary: colors.amber,
          type: "dark",
          background: {
            color: "#fff"
          }
        }
      }),
      setUser: user => this.saveProp("user", user),
      setTheme: theme => this.saveProp("userTheme", theme),
      saveTheme: userTheme => this.saveProp("userTheme", userTheme)
    };
  }

  checkProps = (name, defaultValue) => {
    return localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : defaultValue;
  };

  saveProp = (name, prop) => {
    var state = this.state;
    state[name] = prop;
    this.setState(state, () => {
      if (prop != null) localStorage.setItem(name, JSON.stringify(prop));
      else localStorage.removeItem(name);
    });
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
