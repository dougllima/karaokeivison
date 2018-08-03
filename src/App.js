import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/core/styles";

import Root from "./components/Root";

import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>
    );
  }
}
export default withTheme(theme)(App);
