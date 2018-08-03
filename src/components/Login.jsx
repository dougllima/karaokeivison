import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import authService from "../service/authService";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { loged: false };
  }

  login = () => {
    authService.Login(e => console.log(e), e => console.log(e));
  };

  render() {
    const { classes } = this.props;
    return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={this.login}
      >
        Primary
      </Button>
    );
  }
}

export default withStyles(styles)(Login);
