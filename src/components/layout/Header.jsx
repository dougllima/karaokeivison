import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import AppContext from "./../../lib/appContext";
import { LoginFunc } from "../../service/authService";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none"
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleClick = event => {
    this.setState({ menuOpen: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ menuOpen: null });
  };

  login = callback => {
    LoginFunc(e => callback(e), e => console.log(e));
  };

  render() {
    const { classes } = this.props;
    const { menuOpen } = this.state;
    return (
      <AppContext.Consumer>
        {value => {
          const { user, setUser } = value;
          return (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    aria-owns={menuOpen ? "simple-menu" : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    open={Boolean(menuOpen)}
                    onClose={this.handleClose}
                  >
                    <Link to="/">
                      <MenuItem onClick={this.handleClose}>
                        Página Inicial
                      </MenuItem>
                    </Link>
                  </Menu>
                  <Typography
                    variant="title"
                    color="inherit"
                    className={classes.flex}
                  >
                    {this.props.title}
                  </Typography>
                  {user ? (
                    user.displayName
                  ) : (
                    <Button onClick={() => this.login(setUser)}>Login</Button>
                  )}
                </Toolbar>
              </AppBar>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
