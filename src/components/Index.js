import React, { useState } from "react";
import Box from "@mui/material/Box";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";

import {
  Button,
  Typography
} from "@mui/material";

import { HeaderBox, SliderBox } from "../Styles/StyleHomepage";
import image from "../Images/brainstorm-meeting.jpg";

function Homepage() {
  const [toggle, setToggle] = useState(false);
  return (
    <Box>

      <Box sx={SliderBox}>
        <Box className="sliderbox-text-container">
          <Box className="sliderbox-text-inner-container">
            <Typography className="sliderbox-text-heading">
              Welcome to CHIRAK
            </Typography>
            <Typography className="sliderbox-text-subheading">
              The online E-institute dedicated to disseminating knowledge, empowering individuals and transforming minds with creativity and innovation.
            </Typography>
            <Box className="sliderbox-button-container">
              <Button className="sliderbox-btn-getstarted">Get Started</Button>
              <Button className="sliderbox-btn-how">
                <PlayCircleOutlineIcon />
                How it works?
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="sliderbox-image-container">
          <img alt="sliderimage" src={image} />
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
