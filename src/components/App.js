import React, { Component } from "react";

import { withTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import * as colors from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

import AppProvider from "./AppProvider";
import AppContext from "./../lib/appContext";

import Root from "./Root";

import "typeface-roboto";

library.add(fab);

var theme = {};
var defaultTheme = {
  palette: {
    primary: colors.lightBlue,
    secondary: colors.amber,
    type: "dark",
    background: {
      default: "#333"
    }
  }
};
class App extends Component {
  constructor(prop) {
    super(prop);

    if (!localStorage.getItem("userTheme"))
      localStorage.setItem("userTheme", JSON.stringify(defaultTheme));
  }
  render() {
    return (
      <AppProvider>
        <AppContext.Consumer>
          {value => {
            var { userTheme } = value;
            theme = createMuiTheme(userTheme ? userTheme : defaultTheme);
            return (
              <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Root />
              </MuiThemeProvider>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}
export default withTheme(App);
