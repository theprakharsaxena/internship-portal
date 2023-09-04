import React, { useEffect, useMemo } from "react";
import Header from "../../components/Header";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addAllblogs } from "../../redux/slice/blogSlice";
import BlogsTable from "./BlogsTable";

const Dashboard = () => {

  return (
    <>
      <Header />
      <BlogsTable />
    </>
  );
};

export default Dashboard;
