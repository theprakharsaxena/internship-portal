import React, { useEffect } from "react";
import Routes from "./routes/routes";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addAllblogs } from "./redux/slice/blogSlice";
import { useQueryGetAllBlogs } from "./query/getAllBlogs";
import CircularProgressIndicator from "./common/Loadable/CircularProgressIndicator";

const App = () => {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.blog.value);

  const getAllBlog = useQueryGetAllBlogs();

  useEffect(() => {
    if (!getAllBlog.isLoading) {
      dispatch(addAllblogs(getAllBlog?.data));
    }
  }, [getAllBlog]);

  return (
    <>
      <CircularProgressIndicator loading={getAllBlog.isLoading} />
      <Toaster />
      <Routes />
    </>
  );
};

export default App;
