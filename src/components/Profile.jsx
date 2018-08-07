import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { LoginFunc } from "../service/authService";
import AppContext from "../lib/appContext";
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

  login = callback => {
    LoginFunc(e => callback(e), e => console.log(e));
  };

  render() {
    const { classes } = this.props;
    return (
      <AppContext.Consumer>
        {value => {
          const { setUser, user } = value;
          return user != null ? (
            <User user={user} />
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.login(setUser)}
            >
              Primary
            </Button>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withStyles(styles)(Profile);
