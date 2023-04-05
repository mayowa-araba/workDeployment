export const WidgetsBox = (theme) => ({
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    "& .widgets-container": {
      width: "1200px",
      margin: "40px 0px",
      "& .widgets-grid-container": {
        "& .widget": {
          height: "100px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "25px",
          padding: "25px",
          boxShadow: `5px 5px 10px #d5d5d5,
          -5px -5px 10px #ebebeb`,
  
          "& .MuiSvgIcon-root": {
            marginRight: "15px",
            backgroundColor: "#05668d",
            color: "white",
  
            padding: "15px",
            borderRadius: "5px",
            fontSize: "4rem"
          },
  
          "& .widget-text-container": {
            textAlign: "left",
            "& .text-heading": {
              fontSize: "1.2rem",
              fontFamily: "poppins, sans-serif",
              fontWeight: "bold"
            },
            "& .text-subheading": {
              fontSize: "0.7rem"
            }
          }
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      "& .widgets-container": {
        width: "100%",
        padding: "15px"
      }
    }
  });
  
  export const FlexThis = (theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });
  