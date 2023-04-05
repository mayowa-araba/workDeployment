import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FlexThis, WidgetsBox } from "../Styles/StyleWidgets";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

function Widgets() {
  return (
    <Box>
      <Box sx={WidgetsBox}>
        <Box className="widgets-container">
          <Grid container spacing={4} className="widgets-grid-container">
            <Grid item lg={4} xs={12}>
              <Box sx={FlexThis} className="widget">
                <HowToRegOutlinedIcon />
                <Box className="widget-text-container">
                  <Typography className="text-heading">
                    Best Instructors
                  </Typography>
                  <Typography className="text-subheading" variant="p">
                    We have highly skilled and highly experience instructors
                    around the globe
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} xs={12}>
              <Box sx={FlexThis} className="widget">
                <Diversity3OutlinedIcon />
                <Box className="widget-text-container">
                  <Typography className="text-heading">Live Classes</Typography>
                  <Typography className="text-subheading" variant="p">
                    We take live classes to give our Students the best education
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} xs={12}>
              <Box sx={FlexThis} className="widget">
                <SupportAgentOutlinedIcon />
                <Box className="widget-text-container">
                  <Typography className="text-heading">
                    1 on 1 Support
                  </Typography>
                  <Typography className="text-subheading" variant="p">
                    We provide our students with the best support needed 24/7
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Widgets;
