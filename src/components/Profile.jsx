import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { GithubPicker } from "react-color";
import AppContext from "../lib/appContext";
import colors from "../lib/themes";
import User from "./User";

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

    this.state = { loged: false };
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { user, userTheme, setTheme } = value;
          return (
            <div>
              <GithubPicker colors={colors} />
              <User user={user} />
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withStyles(styles)(Profile);
