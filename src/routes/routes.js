import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useSelector } from "react-redux";
import PublicRoutes from "./protectedRoutes/publicRoutes";
import Dashboard from "../pages/Dashboard/dashboard";
import MainRoutesProtected from "./protectedRoutes/mainRoutesProtected";

const Routes = () => {
  const [url, setUrl] = useState("/");
  const userValue = useSelector((state) => state.user.value);
  const uid = userValue?.uid;
  useEffect(() => {
    if (uid) {
      setUrl("/dashboard");
    }
  }, [uid]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<PublicRoutes uid={uid} url={url} />}>
          <Route path="/" element={<SignIn />} />
        </Route>
        <Route path="/admin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<MainRoutesProtected uid={uid} url={url} />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
