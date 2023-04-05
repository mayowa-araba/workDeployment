export const AboutBox = (theme) => ({
    "& .imgTxt-text":{
        color:"#05668d",
        fontWeight:600,
        fontSize: "27px",
        position: "relative",
        top: "47%",
        width: "70%",
        paddingLeft: "38px"
    },
    "& .imgTxt2-text":{
        color:"#ffff",
        fontWeight:700,
        fontSize: "37px",
        position: "relative",
        top: "55%",
        width: "70%",
        paddingLeft: "38px"
    },
    "& .main-people":{
        width:"100%",
    },
    "& .main-people":{
        width:"100%",
    },
    "& .people-box":{
        width:"100%",
        display: "flex",
        justifyContent:"space-around"
    },
    "& .last-text-page":{
        width:"100%",
        marginTop:"10px"
    },
    "& .box-style":{
        opacity:0.7, 
        backgroundColor:"#3e3c3c",
        position:"relative",
        top:"60%",
        left:"4%",
        width:"245px",
        height:"110px",
        borderRadius:"8px",
        textAlign:"center"
    },
    [theme.breakpoints.down("md")]: {
        "& .imgTxt2-text": {
            fontSize: "30px"
          },
            "& .main-people":{
            width:"100%",
            },
            "& .people-box":{
                width:"100%",
                display: "block",
                alignItem:"center"
            },
            "& .backg-img":{
                marginTop:"15px",
                width:"70%!important",
                marginLeft:"25px"
            },
            "& .box-style":{
                fontSize:"30px",
                width:"90%!important"
            },
            "& .mid-txt":{
                fontSize:"15px",
                width:"90%!important"
            },
    }
})