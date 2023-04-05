import React from "react";
import Homepage from "../components/Index"
import Widgets from "../components/Widgets";
import Coursecard from "../components/CourseCard";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Box from '@mui/material/Box';

// import Footer2 from '../components/Footer2';

const Home=()=>{
    return(
    <div>
        <Box sx={{ overflow: "hidden" }}> 
            <Nav/>
            <Homepage />
            <Widgets /> 
            <Coursecard />
            <Footer /> 
        </Box>
        {/* <div><Footer2 /> </div> */}
        

    </div>
    )

}
export default Home;