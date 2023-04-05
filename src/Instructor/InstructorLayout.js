import {
    Box,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Typography
  } from "@mui/material";
  import React, { useState } from "react";
  import { AdminLayoutBox } from "../Styles/StyleAdminLayout";
  import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
  import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
  import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
  import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
  import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
  import Dashboard from "./Dashboard";
  import StudentPortal from "./StudentPortal";
  import CoursePortal from "./CoursePortal";
  
  const AdminLayout = ({ values, returnID,  open, setOpen }) => {
    const { digit } = values;
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
                        <StyleOutlinedIcon />
                        <Typography id="3" onClick={(name) => returnID(name)}>
                          {" "}
                          Courses{" "}
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
                          Instructor{" "}
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
                  {digit === "3" && <CoursePortal />}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default AdminLayout;
  