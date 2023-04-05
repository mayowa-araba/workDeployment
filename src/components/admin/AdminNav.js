import React, { useState } from "react";
import { Box } from "@mui/material";

import {
  Avatar,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { AdminHeaderBox } from "../../Styles/AdminNavStyle";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
function AdminNav({ setName, returnID, values, setValues }) {
  const tg  = values;
  document.body.style.overflow = tg ? "hidden" : null;

  return (
    <Box>
      <Box sx={AdminHeaderBox}>
        <Box className="header-content-box">
          <Box className="hl">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography>Relearn</Typography>
            </Link>
          </Box>
          <Box className="header-nav-end">
            <Box className="header-nav-right">
              <NotificationsOutlinedIcon />
              <QuestionAnswerOutlinedIcon />
              <Avatar>H</Avatar>
            </Box>
          </Box>
          <Box className="header-mobile-nav">
            <Box>
              {tg ? (
                <CloseIcon onClick={() => setValues({ ...values, tg: !tg })} />
              ) : (
                <MenuIcon onClick={() => setValues({ ...values, tg: !tg })} />
              )}
              <NotificationsOutlinedIcon />
              <QuestionAnswerOutlinedIcon />
            </Box>
            <Box
              className={tg ? "header-mobile-nav-submenu-container" : "hide"}
            >
              <nav aria-label="mobilepage-navigation">
                <List>
                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <GridViewOutlinedIcon />
                      <Typography id="0" onClick={(name) => returnID(name)}>
                        {" "}
                        Dashboard
                      </Typography>
                    </ListItemButton>
                  </ListItemText>
                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <ManageAccountsOutlinedIcon />
                      <Typography id="1" onClick={(name) => returnID(name)}>
                        {" "}
                        Students
                      </Typography>
                    </ListItemButton>
                  </ListItemText>

                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <AccountCircleOutlinedIcon />
                      <Typography id="2" onClick={(name) => returnID(name)}>
                        {" "}
                        Instructors{" "}
                      </Typography>
                    </ListItemButton>
                  </ListItemText>
                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <StyleOutlinedIcon />
                      <Typography id="3" onClick={(name) => returnID(name)}>
                        {" "}
                        Courses{" "}
                      </Typography>
                    </ListItemButton>
                  </ListItemText>
                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <ToggleOnOutlinedIcon />
                      <Typography id="4" onClick={(name) => returnID(name)}>
                        {" "}
                        Roles{" "}
                      </Typography>
                    </ListItemButton>
                  </ListItemText>
                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <NotificationImportantOutlinedIcon />
                      <Typography id="5" onClick={(name) => returnID(name)}>
                        {" "}
                        Feedbacks{" "}
                      </Typography>
                    </ListItemButton>
                  </ListItemText>
                  <ListItemText>
                    <ListItemButton className="desktop-nav">
                      <SettingsSuggestOutlinedIcon />
                      <Typography id="6" onClick={(name) => returnID(name)}>
                        {" "}
                        Admin{" "}
                      </Typography>
                    </ListItemButton>
                  </ListItemText>
                </List>
              </nav>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminNav;
