import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { AccountCircle, ExitToApp, Lock } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { removeBlogs } from "../redux/slice/blogSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userValue = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleClose();
    // dispatch(removeBlogs());
    dispatch(removeUser());
    navigate("/admin");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hi, {userValue?.username}
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
