import React, { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { Link } from "react-router-dom";
import { MenuItem, Menu, Button } from "@material-ui/core";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useContext(UserContext);

  return (
    <React.Fragment>
      <Button color="inherit" onClick={e => setAnchorEl(e.currentTarget)}>
        {user.displayName || "Teste"}
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={e => setAnchorEl(null)}
      >
        <Link to="/profile">
          <MenuItem onClick={e => setAnchorEl(null)}>Perfil</MenuItem>
        </Link>
        <MenuItem
          onClick={e => {
            setAnchorEl(null);
            logout();
          }}
        >
          Sair
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileMenu;
