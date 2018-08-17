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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      menuNav: false,
      menuProfile: false,
      menuLogin: false
    };
  }

  handleClickMenu = (event, name) => {
    var state = this.state;
    state[name] = event.currentTarget;
    this.setState(state);
  };

  handleCloseMenu = (event, name) => {
    var state = this.state;
    state[name] = null;
    this.setState(state);
  };

  loginFacebook = callback => {
    LoginFunc(e => callback(e), e => console.log(e));
  };

  render() {
    const { classes } = this.props;
    return (
      <AppContext.Consumer>
        {value => {
          const { user, setUser } = value;
          return (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  {this.getMainMenu(classes)}
                  <Typography
                    color="inherit"
                    variant="title"
                    className={classes.flex}
                  >
                    {this.props.title}
                  </Typography>
                  {user
                    ? this.getProfileMenu(user, setUser)
                    : this.getLoginMenu(user, setUser)}
                </Toolbar>
              </AppBar>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }

  getMainMenu = classes => {
    const { menuNav } = this.state;
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          aria-owns={menuNav ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={e => this.handleClickMenu(e, "menuNav")}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          open={Boolean(menuNav)}
          onClose={e => this.handleCloseMenu(e, "menuNav")}
        >
          <Link to="/">
            <MenuItem onClick={e => this.handleCloseMenu(e, "menuNav")}>
              Página Inicial
            </MenuItem>
          </Link>
        </Menu>
      </div>
    );
  };

  getProfileMenu = (user, setUser) => {
    const { menuProfile } = this.state;
    return (
      <div>
        <Button
          color="inherit"
          onClick={e => this.handleClickMenu(e, "menuProfile")}
        >
          {user.displayName}
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={menuProfile}
          open={Boolean(menuProfile)}
          onClose={e => this.handleCloseMenu(e, "menuProfile")}
        >
          <Link to="/profile">
            <MenuItem onClick={e => this.handleCloseMenu(e, "menuProfile")}>
              Perfil
            </MenuItem>
          </Link>
          <MenuItem
            onClick={e => {
              this.handleCloseMenu(e, "menuProfile");
              setUser(null);
            }}
          >
            Sair
          </MenuItem>
        </Menu>
      </div>
    );
  };

  getLoginMenu = (user, setUser) => {
    const { menuLogin } = this.state;
    return (
      <div>
        <Button
          color="inherit"
          onClick={e => this.handleClickMenu(e, "menuLogin")}
        >
          Login
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={menuLogin}
          open={Boolean(menuLogin)}
          onClose={e => this.handleCloseMenu(e, "menuLogin")}
        >
          <MenuItem
            onClick={() =>
              this.loginFacebook(e => {
                this.handleCloseMenu(null, "menuLogin");
                setUser(e);
              })
            }
          >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            &nbsp; Login com Facebook
          </MenuItem>
        </Menu>
      </div>
    );
  };
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
