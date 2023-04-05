import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { InvestorBox } from "../Styles/StyleInvestor";
import emory from "../Images/emory.png";
import macquaire from "../Images/macquaire.png";
import sydney from "../Images/sydney.svg";
import northwestern from "../Images/northwestern.svg";

function Investor() {
  return (
    <Box>
      <Box sx={InvestorBox}>
        <Grid container className="investor-content-box">
          <Grid item xs={12} lg={6} className="investor-text-container">
            <Typography>
              Our Trusted partners and our past investors around the globe.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className="investor-images-container">
            <Box className="investor-images">
              <img alt="emory" src={emory} />
            </Box>
            <Box className="investor-images">
              <img alt="macquaire" src={macquaire} />
            </Box>
            <Box className="investor-images">
              <img alt="northwestern" src={northwestern} />
            </Box>
            <Box className="investor-images">
              <img alt="sydney" src={sydney} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Investor;
