import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from "@mui/material";
import { AccountCircle, ExitToApp, Lock } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { removeBlogs } from "../redux/slice/blogSlice";

const NavBar = () => {
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
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
            to="/"
          >
            <img src="/logo.jpeg" height={50} />
            <Typography
              variant="h6"
              color="black"
              fontWeight="900"
              marginTop="2px"
              marginLeft="1rem"
            >
              Mentoring In New Dimensions
            </Typography>
          </Link>
        </Typography>
        <Box sx={{ display: "flex", textDecoration: "none" }}>
          <Link style={{ marginLeft: "20px", color: "black" }} to="/">
            HOME
          </Link>
          <a style={{ marginLeft: "20px", color: "black" }} href="#aboutus">
            ABOUT US
          </a>
          <a style={{ marginLeft: "20px", color: "black" }} href="#contactus">
            CONTACT US
          </a>
          <Link style={{ marginLeft: "20px", color: "black" }} to="/allblogs">
            JOBS | INTERNSHIPS
          </Link>
          <Link style={{ marginLeft: "20px", color: "black" }} to="/admin">
            ADMIN
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
