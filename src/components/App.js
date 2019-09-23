import React, { Component } from "react";

import { withTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import * as colors from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

import { StyleProvider, StyleContext } from "./contexts/StyleContext";
import { UserProvider } from "./contexts/UserContext";

import Root from "./Root";

import "typeface-roboto";

library.add(fab);

class App extends Component {
  render() {
    return (
      <UserProvider>
        <StyleProvider>
          <StyleContext.Consumer>
            {value => {
              var { theme } = value;
              return (
                <MuiThemeProvider theme={createMuiTheme(theme)}>
                  <CssBaseline />
                  <Root />
                </MuiThemeProvider>
              );
            }}
          </StyleContext.Consumer>
        </StyleProvider>
      </UserProvider>
    );
  }
}
export default withTheme(App);
