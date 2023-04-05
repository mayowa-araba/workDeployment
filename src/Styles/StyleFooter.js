export const FooterBox = (theme) => ({
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: "45px, 0px",
  
    "& .MuiTypography-root": {
      color: "white"
    },
  
    "& .footer-container": {
      width: "1200px",
      padding: "60px 0px",
  
      "& .footer-text-container": {
        textAlign: "left",
        "& .footer-logo-text": {
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "1.5rem",
          marginBottom: "15px"
        },
        "& .footer-logo-subtext": {
          fontSize: "1rem"
        }
      },
      "& .footer-list-container": {
        "& .MuiTypography-root": {
          fontSize: "0.8rem"
        }
      },
  
      "& .footer-copyright-container": {
        textAlign: "left",
        "& .MuiTypography-root": {
          fontSize: "0.8rem"
        }
      }
    },
  
    [theme.breakpoints.down("md")]: {
      "& .footer-container": {
        width: "100%",
        padding: "45px 15px"
      },
      "& .footer-list-container": {
        "& .MuiGrid-root": {
          padding: "5px"
        }
      }
    }
  });
  