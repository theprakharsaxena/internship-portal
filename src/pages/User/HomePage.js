import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const HomePage = () => {
  const allBlogs = useSelector((state) => state.blog.value);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Grid container spacing={5} marginY={2} marginX={1}>
        {allBlogs?.blogs.map((item, index) => (
          <Grid
            item
            xs={4}
            key={index}
            onClick={() => navigate(`/blog/${item._id}`)}
          >
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
                  <Typography color="text.secondary">
                    Posted On -{" "}
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : ""}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div id="aboutus">
        <Box display="flex" justifyContent="center" marginY="40px">
          <Box width="700px" textAlign="center">
            <Typography variant="h4" fontWeight="bold">
              About US
            </Typography>
            <Typography>
              At Intern Freak We Post Daily updates on internships and job
              postings! Our vision is to empower the youth of our nation and
              make them Atmanirbhar (Self-dependent). By providing them with all
              kinds of opportunities from various sectors, sharing knowledge and
              make them competent enough so that they could excel in any field.
              If you have any query regrading Site, Advertisement and any other
              issue, please feel free to contact at support@internfreak.co
            </Typography>
          </Box>
        </Box>
      </div>
      <div id="contactus">
        <Box display="flex" justifyContent="center" marginY="40px">
          <Box width="700px" textAlign="center">
            <Typography variant="h4" fontWeight="bold">
              Get in touch
            </Typography>
            <Typography color="gray">Email : support@internfreak.co</Typography>
            <Typography>
              <Button>Send Message</Button>
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default HomePage;
