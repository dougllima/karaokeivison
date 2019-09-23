import React, { Component } from "react";
import PropTypes from "prop-types";

import { Typography, Toolbar, AppBar } from "@material-ui/core";

import { UserContext } from "./contexts/UserContext";
import { withStyles } from "@material-ui/core/styles";

import MainMenu from "./MainMenu";
import LoginMenu from "./LoginMenu";
import ProfileMenu from "./ProfileMenu";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
});

class Header extends Component {
  static contextType = UserContext;

  render() {
    const { classes } = this.props;
    const { user } = this.context;
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MainMenu />
            <Typography color="inherit" variant="h6" className={classes.flex}>
              {this.props.title}
            </Typography>
            {user ? <ProfileMenu /> : <LoginMenu />}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
