import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import getSingleBlog from "../../services/blog/getSingleblog";
import updateBlog from "../../services/blog/updateBlog";
import BlogNavBar from "../../components/BlogNavbar";
import { useSelector } from "react-redux";

const Blog = () => {
  const allBlogs = useSelector((state) => state.blog.value);
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [createdAt, setCreatedAt] = useState("");

  const getBlogDetail = async (tempId) => {
    try {
      const data = await getSingleBlog({ id: tempId });
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getBlogDetail(id);
    }
  }, [id]);

  useEffect(() => {
    if (blog && blog?.createdAt) {
      const date = new Date(blog?.createdAt);
      setCreatedAt(date.toLocaleString());
    }
  }, [blog]);

  return (
    <>
      <BlogNavBar />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <img src={inputs.image} height={150} />
      </Box>
      <Typography textAlign="center" marginY="30px" color="gray">
        {createdAt}
      </Typography>
      <Box display="flex" justifyContent="center" marginY="40px">
        <Typography
          variant="h4"
          maxWidth="700px"
          textAlign="center"
          fontWeight="bold"
        >
          {inputs.title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginY="40px">
        <div
          style={{ maxWidth: "700px" }}
          dangerouslySetInnerHTML={{ __html: inputs.description }}
        ></div>
      </Box>
      <div id="applylink" style={{ paddingBottom: "40px" }}></div>
      <Typography variant="h3" marginLeft="100px" fontWeight="bold">
        Recent Openings
      </Typography>
      <div id="recentopenings"></div>
      <Grid container spacing={4} marginY={2} marginX={2}>
        {allBlogs?.blogs.map((item, index) => (
          <Grid
            item
            xs={12}
            key={index}
            onClick={() => {
              toast.success("Scroll To Top");
              navigate(`/blog/${item._id}`);
            }}
          >
            <div style={{ cursor: "pointer" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img height="150" src={item.image} alt="green iguana" />
                </Grid>
                <Grid item xs={8}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    Posted On -{" "}
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : ""}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Blog;