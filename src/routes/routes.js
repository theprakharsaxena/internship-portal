import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useSelector } from "react-redux";
import PublicRoutes from "./protectedRoutes/publicRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainRoutesProtected from "./protectedRoutes/mainRoutesProtected";
import HomePage from "../pages/user/HomePage";
import ALLBlogs from "../pages/user/ALLBlogs";

const Routes = () => {
  const userValue = useSelector((state) => state.user.value);
  const uid = userValue?._id;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/allblogs" element={<ALLBlogs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
