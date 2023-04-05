import React from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import { coursecardbox } from "../Styles/StyleCourseCard";
import image1 from "../Images/tech1.jpg";
import image2 from "../Images/intel1.jpg";
import image3 from "../Images/manage1.jpg";

import Cards from "./Cards";

function Coursecard() {
  return (
    <Box>
      <Box sx={coursecardbox}>
        <Box className="course-container">
          <Box className="course-heading-container">
            <Typography className="course-heading">
              Our Popular Courses
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="All Categories" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Web Design" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Copywriting" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="UI/UX Design" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Marketing" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Coding" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Business" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Grid container className="course-showcase-area">
            <Grid item xs={12} lg={4} md={6} sx={{ mb: "30px" }}>
              <Cards
                sx={{ mb: "15px" }}
                image={image1}
                title="Business in Technology"
                text="This course will cover the principles and practices of digital marketing. Topics will include search engine optimization, social media marketing, email marketing, content marketing, and analytics."
              />
            </Grid>
            <Grid item xs={12} lg={4} md={6} sx={{ mb: "30px" }}>
              <Cards
                image={image2}
                title="Financial Intelligence"
                text="This course will provide students with an understanding of financial management principles and practices. Topics covered will include financial analysis, budgeting, financial reporting, and investment management."
              />
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <Cards 
                image={image3} 
                title="Business Developmant & Management" 
                text="This course will cover the basics of starting and running a successful business. Topics will include business planning, market research, financing, marketing, and managing operations."
              />
            </Grid>
          </Grid>
          <Box className="course-learnmore">
            <Button>Learn more</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Coursecard;
