import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";
import { Link, useNavigate } from "react-router-dom";

const AllBlogsNavbar = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{flexGrow:1 }}
        >
          <Link style={{ display: "flex", alignItems: "center",textDecoration:"none"}} to="/">
            <img src="/logo.webp" height={50} />
            <Typography variant="h6" color="white">
              INTERNFREAK
            </Typography>
          </Link>
        </Typography>
        <Box sx={{ display: "flex", textDecoration: "none" }}>
          <Link style={{ marginLeft: "20px" }} to="/">
            HOME
          </Link>
          <a style={{ marginLeft: "20px" }} href="#applylink">
            FollowUs
          </a>
          <Link style={{ marginLeft: "20px" }} to="/allblogs">
            JOBS | INTERNSHIPS
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AllBlogsNavbar;
