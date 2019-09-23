import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Menu, IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}));

const MainMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        aria-owns={anchorEl ? "simple-menu" : null}
        aria-haspopup="true"
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <Link to="/">
          <MenuItem onClick={() => setAnchorEl(null)}>Página Inicial</MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default MainMenu;
