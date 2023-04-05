export const AdminHeaderBox = (theme) => ({
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
      height: "65px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center"
    },
  
    "& .hl": {
      textAlign: "center",
      "& .MuiTypography-root": {
        fontFamily: "'Orbitron', sans-serif",
        color: "#05668d",
        fontSize: "2.5rem",
        curssor: "pointer"
      }
    },
  
    "& .header-nav-end": {
      height: "65px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .login-button": {
        backgroundColor: "#05668d",
        color: "white",
        borderRadius: "30px",
        padding: "5px 25px",
        cursor: "pointer"
      }
    },
    "& .header-nav-right": {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      "& .MuiSvgIcon-root": {
        marginRight: "15px"
      }
    },
    "& .header-mobile-nav": {
      "& .MuiSvgIcon-root": {
        color: "#05668d",
        cursor: "pointer",
        fontSize: "1.7rem",
        marginRight: "15px",
        marginTop: "5px"
      }
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
      "& .MuiTypography-root, .MuiSvgIcon-root": {
        color: "white"
      },
      "& .MuiSvgIcon-root": {
        marginRight: "15px"
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
      "& .MuiTypography-root, .MuiSvgIcon-root": {
        color: "white"
      },
      "& .MuiSvgIcon-root": {
        marginRight: "15px"
      }
    },
    //Mobile Responsiveness
    [theme.breakpoints.down("md")]: {
      "& .header-content-box": {
        width: "100%",
        padding: "0 15px",
        "& .hl": {
          "& .MuiTypography-root": {
            fontSize: "2rem",
            curssor: "pointer"
          }
        },
        "& .header-nav-end, & .header-nav-middle": {
          display: "none"
        },
        "& .header-mobile-nav": {
          display: "block"
        }
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
  