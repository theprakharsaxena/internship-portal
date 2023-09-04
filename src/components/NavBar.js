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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,display:"flex",alignItems:"center" }}>
          <img src="/logo.webp" height={50}/>
          INTERNFREAK
        </Typography>
        <Box sx={{display:"flex",textDecoration:"none"}}>
          <Link style={{marginLeft:"20px"}} to="/">HOME</Link>
          <a style={{marginLeft:"20px"}} href="#aboutus">ABOUT US</a>
          <a style={{marginLeft:"20px"}} href="#contactus">CONTACT US</a>
          <Link style={{marginLeft:"20px"}} to="/allblogs">JOBS | INTERNSHIPS</Link>
          <Link style={{marginLeft:"20px"}} to="/admin">ADMIN</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
