import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { AccountCircle, ExitToApp, Lock } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleClose();
    dispatch(removeUser());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <div>
          <IconButton
            id="header-menu-button"
            aria-controls="header-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="header-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Lock sx={{ marginRight: 1 }} />
              Reset Password
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
              <ExitToApp sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
