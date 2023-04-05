export const HeaderBox = (theme) => ({
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
    backgroundColor: "#fafaff",
    zIndex: "999",
    position: "relative",
  
    "& .header-content-box": {
      width: "1200px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden"
    },
  
    "& .header-logo": {
      "& .MuiTypography-root": {
        fontFamily: "'Orbitron', sans-serif",
        color: "#05668d",
        fontSize: "2.5rem"
      }
    },
  
    "& .header-nav-middle": {
      "& .MuiList-root": {
        display: "flex"
      }
    },
  
    "& .header-nav-end": {
      "& .MuiListItemButton-root": {
        backgroundColor: "#05668d",
        color: "white",
        borderRadius: "30px",
        padding: "5px 15px",
        cursor: "pointer"
      }
    },
  
    "& .header-mobile-nav": {
      "& .MuiSvgIcon-root": {
        color: "#05668d",
        cursor: "pointer",
        fontSize: "2rem"
      }
    },
    "& .link1":{
        listStyle: "none",
        textDecoration: "none",
        color: "black"
    },
    "& .link2":{
      listStyle: "none",
      textDecoration: "none",
      color: "#ffff"
    },
  
    "& .header-mobile-nav-submenu-container": {
      position: "absolute",
      height: "100vh",
      width: "100%",
      top: "63px",
      left: "0",
      backgroundColor: "#05668d",
      zIndex: "1",
      transform: "translateY(0)",
      transition: "0.9s all ease",
      "& .MuiListItemButton-root": {
        color: "white"
      },
      overflow: "hidden"
    },
    "& .hide": {
      position: "absolute",
      height: "100vh",
      width: "100%",
      top: "63px",
      left: "0",
      backgroundColor: "#05668d",
      zIndex: "1",
      transform: "translateY(-120%)",
      transition: "0.9s all ease",
      "& .MuiListItemButton-root": {
        color: "white"
      }
    },
    "& .avaterImg":{
        width: "25px",
        height: "25px"
    },
    //Mobile Responsiveness
    [theme.breakpoints.down("md")]: {
      "& .header-nav-end, & .header-nav-middle": {
        display: "none"
      },
      "& .header-mobile-nav": {
        display: "block"
      },
      "& .header-content-box": {
        width: "100%",
        margin: "0 15px"
      }
    },
    [theme.breakpoints.up("md")]: {
      "& .header-nav-end, & .header-nav-middle": {
        display: "block"
      },
      "& .header-mobile-nav": {
        display: "none"
      }
    }
  });