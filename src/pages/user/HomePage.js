import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const HomePage = () => {
  const allBlogs = useSelector((state) => state.blog.value);
  return (
    <>
      <NavBar />
      <Grid container spacing={4} marginY={2} marginX={2}>
        {allBlogs?.blogs.map((item) => (
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div id="aboutus">
        
      </div>
      <div id="contactus"></div>
    </>
  );
};

export default HomePage;
