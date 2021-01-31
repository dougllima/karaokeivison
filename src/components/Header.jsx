import React, { useContext } from 'react';

import MainMenu from './MainMenu';
import LoginMenu from './LoginMenu';
import ProfileMenu from './ProfileMenu';

import { UserContext } from './Contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Toolbar, AppBar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MainMenu />
          <Typography color="inherit" variant="h6" className={classes.flex}>
            {props.title}
          </Typography>
          {user ? <ProfileMenu /> : <LoginMenu />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
