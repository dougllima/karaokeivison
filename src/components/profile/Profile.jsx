import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppContext from "../../lib/appContext";
import User from "../User";
import ThemePicker from "./ThemePicker";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { logged: false };
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { user, userTheme, setTheme } = value;
          return (
            <div style={{ padding: "10px" }}>
              <ThemePicker />
              <User user={user} />
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withStyles(styles)(Profile);
