import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import AppProvider from "./AppProvider";
import AppContext from "./..//lib/appContext";
import * as colors from "@material-ui/core/colors";

import Root from "./Root";

import "typeface-roboto";

library.add(fab);
var theme = {};
var defaultTheme = {
  palette: {
    primary: colors.lightBlue,
    secondary: colors.amber,
    type: "dark"
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
                <Root />
              </MuiThemeProvider>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}
export default withTheme(theme)(App);
