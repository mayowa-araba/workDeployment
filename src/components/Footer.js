import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import React from "react";
import { FooterBox } from "../Styles/StyleFooter";

function Footer() {
  return (
    <Box>
      <Box sx={FooterBox}>
        <Box className="footer-container">
          <Grid container spacing={3} sx={{ marginBottom: "30px" }}>
            <Grid className="footer-text-container" item xs={12} lg={6}>
              <Typography className="footer-logo-text">CBS</Typography>
              <Typography className="footer-logo-subtext">
              Join us on this journey of learning and growth, as we bring together scholars and learners from diverse backgrounds to unlock new ideas, skills, and abilities. Let CHIRAK be your guide as you embark on a path of personal and professional development, towards a brighter and more prosperous future.
              </Typography>
            </Grid>
            <Grid className="footer-list-container" item xs={12} lg={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                  <nav aria-label="footer-nav">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <Link
                            to="/"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <ListItemText primary="Home" />
                          </Link>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <Link
                            to="/AboutPage"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <ListItemText primary="About" />
                          </Link>
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Sign Up" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <nav aria-label="footer-nav">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Privacy Policy" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Terms of use" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Data Policy" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Accessibility" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <nav aria-label="footer-nav">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="Got a Question?" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="info@relearn.com" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="footer-copyright-container" container>
            <Grid item xs={12} lg={12}>
              <Typography>
                 Copyright © 2023 Chirak Projects Unlimited.
                  All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
