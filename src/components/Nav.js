import React, { useState } from "react";
import { Box} from "@mui/material";
import { HeaderBox } from "../Styles/StyleNav";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <Box>
      <Box sx={HeaderBox}>
        <Box className="header-content-box">
          <Box className="header-logo">
            <Typography>CBS</Typography>
          </Box>
          <Box className="header-nav-middle">
            <nav aria-label="homepage navigation">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to="/" className="link1">
                      <ListItemText primary="Home" />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to="/About" className="link1">
                    <ListItemText primary="About" />
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box className="header-nav-end">
            <nav aria-label="homepage nav end">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link to="/SignIn" className="link2">
                      <ListItemText primary="Sign in" />
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box className="header-mobile-nav">
            <Box>
              {toggle ? (
                <CloseIcon onClick={() => setToggle((prev) => !prev)} />
              ) : (
                <MenuIcon onClick={() => setToggle((prev) => !prev)} />
              )}
            </Box>

            <Box
              className={
                toggle ? "header-mobile-nav-submenu-container" : "hide"
              }
            >
              <nav aria-label="mobilepage-navigation">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                    <Link to="/" className="link1">
                      <ListItemText primary="Home" />
                    </Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Link to="/About" className="link1">
                        <ListItemText primary="AboutPage" />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  

                  <ListItem disablePadding>
                    <ListItemButton>
                    <Link to="/SignIn" className="link2">
                      <ListItemText primary="Sign in" />
                    </Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
