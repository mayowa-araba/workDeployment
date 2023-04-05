import React, { useState } from "react";
import image from "../Images/labclass.jpg";
import browngirl from "../Images/browngirl.jpeg"
import bguy from "../Images/bguy.jpeg"
import dguy from "../Images/dguy.jpg"
import { Box } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { AboutBox } from "../Styles/StyleAbout";
import Card from '@mui/material/Card';

export default function AboutIn() {
    return(
        <Box>
        <Box sx={AboutBox}>
            <Box
                sx={{backgroundImage:`url(${image})`, 
                    height:"700px",
                    width: "100%", backgroundSize: 'cover'
                }}
            >
                <Typography className="imgTxt-text">
                OUR MISSION
                </Typography>
                <Typography className="imgTxt2-text">
                    Providing a direct,<br/> low-risk path to<br/> higher income
                </Typography>
            </Box>

            <Box sx={{width:"100%"}}>
            <Box className="text-box-page">
            <Typography sx={{fontSize:"45px", marginLeft:"20px"}}>
                    About Us
                </Typography><br/>

                <Typography className="mid-txt" sx={{fontSize:"20px", marginLeft:"20px"}}>
                Traditional higher education is broken. Too many people are left out and left behind, leaving them<br/> without the opportunities that come from a well paying job.
                </Typography><br/>

                <Typography className="mid-txt" sx={{fontSize:"20px", marginLeft:"20px"}}>
                Other folks try to stick to the path they’ve been told leads to success—only to end up burdened by<br/> debt with no job in sight. 
                </Typography><br/>

                <Typography className="mid-txt" sx={{fontSize:"20px", marginLeft:"20px"}}>
                We believe there’s a better way. We believe you deserve better.<br/>

                That’s why we started Bloom Institute of Technology. 
                </Typography><br/>

                <Typography className="mid-txt" sx={{fontSize:"20px", marginLeft:"20px"}}>
                We designed everything at BloomTech with one goal: to help you get a well paying job, faster, and<br/> with less risk. We teach the skills employers want plus support you in the job search, every step of<br/> the way.

                We bet on our learners. We’re ready to bet on you.
                </Typography><br/>
                </Box>
            </Box>

            <Box className="main-people">
              <Box className="mini-main">
                <Box className="people-box" >
                <div className="backg-img" style={{backgroundImage:`url(${browngirl})`, 
                    height:"300px",
                    width: "33%", backgroundSize: 'cover', objectFit:"cover"
                    }}>
                    <Box className="box-style">
                        <Typography sx={{ fontSize: 14, color:"white" }} gutterBottom>
                            Alisa Hester
                        </Typography>
                        <Typography variant="h5" component="div" sx={{minWidth:"100px", fontSize:"20px", color:"white" }}>
                        Chief Operating Officer
                        </Typography>
                        <Typography variant="body2" sx={{ color:"white",fontSize:"12px" }}>
                        Access to education and opportunity is incredibly powerful for the individual, their families, their communities, and society.
                        </Typography>
                    </Box>
                </div>

                <div className="backg-img mark"  style={{backgroundImage:`url(${bguy})`, 
                    height:"300px",
                    width: "30%", backgroundSize: 'cover', objectFit:"cover"
                    }}>
                    <Box className="box-style">
                        <Typography sx={{ fontSize: 14, color:"white" }} gutterBottom>
                            Mark Thomas
                        </Typography>
                        <Typography variant="h5" component="div" sx={{minWidth:"100px", fontSize:"20px", color:"white" }}>
                        Chief Operating Officer
                        </Typography>
                        <Typography variant="body2" sx={{ color:"white",fontSize:"12px" }}>
                        Access to education and opportunity is incredibly powerful for the individual, their families, their communities, and society.
                        </Typography>
                    </Box>
                </div>

                <div className="backg-img"  style={{backgroundImage:`url(${dguy})`, 
                    height:"300px",
                    width: "32%", backgroundSize: 'cover', objectFit:"cover"
                    }}>
                    <Box className="box-style">
                        <Typography sx={{ fontSize: 14, color:"white" }} gutterBottom>
                            John Hester
                        </Typography>
                        <Typography variant="h5" component="div" sx={{minWidth:"100px", fontSize:"20px", color:"white" }}>
                        Chief Operating Officer
                        </Typography>
                        <Typography variant="body2" sx={{ color:"white",fontSize:"12px" }}>
                        Access to education and opportunity is incredibly powerful for the individual, their families, their communities, and society.
                        </Typography>
                    </Box>
                </div>
                </Box>
              </Box>
            </Box>

            <Box className="last-text-page">
            {/* <Typography>
                We designed everything at BloomTech with one goal: to help you get a well paying job, faster, and with less risk.<br/> We teach the skills employers want plus support you in the job search, every step of the way.<br/>

                We bet on our learners. We’re ready to bet on you.
                </Typography><br/> */}
            </Box>

        </Box>
        </Box>
    )
}