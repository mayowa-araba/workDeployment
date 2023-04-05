import {
    Box,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Typography
  } from "@mui/material";
  import React, { useState } from "react";
  import { AdminLayoutBox } from "../../Styles/AdminLayoutStyle";  
  import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
  import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
  import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
  import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
  import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
  import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
  import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
  import Dashboard from "./Dashboard";
  import StudentPortal from "./StudentPortal";
  import InstructorPortal from "./InstructorPortal";
  import CoursePortal from "./CoursePortal";
  import RolePortal from "./RolePortal";
  import AdminPortal from "./AdminPortal";
  
  const AdminLayout = ({ values, returnID, }) => {
    const digit  = values;
    return (
      <Box>
        <Box sx={AdminLayoutBox}>
          <Box className="admin-container">
            <Grid container>
              <Grid item lg={2} className="desktop-display-left">
                <Box>
                  <List>
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <GridViewOutlinedIcon />
                        <Typography id="0" onClick={(name) => returnID(name)}>
                          {" "}
                          Dashboard
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <ManageAccountsOutlinedIcon />
                        <Typography id="1" onClick={(name) => returnID(name)}>
                          {" "}
                          Students
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
  
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <AccountCircleOutlinedIcon />
                        <Typography id="2" onClick={(name) => returnID(name)}>
                          {" "}
                          Instructors{" "}
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <StyleOutlinedIcon />
                        <Typography id="3" onClick={(name) => returnID(name)}>
                          {" "}
                          Courses{" "}
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <ToggleOnOutlinedIcon />
                        <Typography id="4" onClick={(name) => returnID(name)}>
                          {" "}
                          Roles{" "}
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <NotificationImportantOutlinedIcon />
                        <Typography id="5" onClick={(name) => returnID(name)}>
                          {" "}
                          Feedbacks{" "}
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
                    <ListItemText>
                      <ListItemButton className="desktop-nav-left">
                        <SettingsSuggestOutlinedIcon />
                        <Typography id="6" onClick={(name) => returnID(name)}>
                          {" "}
                          Admin{" "}
                        </Typography>
                      </ListItemButton>
                    </ListItemText>
                  </List>
                </Box>
              </Grid>
              <Grid item lg={10} xs={12} className="desktop-display-right">
                <Box className="desktop-display-area">
                  {digit === "0" && <Dashboard />}
                  {digit === "1" && <StudentPortal />}
                  {digit === "2" && <InstructorPortal />}
                  {digit === "3" && <CoursePortal />}
                  {digit === "4" && <RolePortal />}
                  {digit === "6" && <AdminPortal />}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default AdminLayout;
  