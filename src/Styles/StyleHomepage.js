import { color } from "@mui/system";

  
  export const SliderBox = (theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    position: "relative",
    "& .sliderbox-image-container": {
      position: "absolute",
      right: "0",
      top: "0",
      height: "550px",
      width: "50%",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    },
    "& .sliderbox-text-container": {
      width: "1200px",
      height: "550px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
  
      "& .sliderbox-text-inner-container": {
        width: "550px",
        textAlign: "left",
        "& .sliderbox-text-heading": {
          fontFamily: "poppins",
          fontSize: "3.5rem",
          fontWeight: "bold",
          lineHeight: "4rem",
          marginBottom: "1.5rem"
        },
        "& .sliderbox-text-subheading": {
          marginBottom: "1.5rem"
        },
        "& .sliderbox-button-container": {
          display: "flex",
          "& .MuiButton-root": {
            borderRadius: "25px"
          },
          "& .sliderbox-btn-getstarted": {
            backgroundColor: "black",
            color: "white",
            padding: "5px 20px",
            marginRight: "15px",
            textTransform: "titlecase"
          },
          "& .sliderbox-btn-how": {
            color: "black",
            "& .MuiSvgIcon-root": {
              marginRight: "10px",
              color: "black",
              fontSize: "2rem"
            }
          }
        }
      }
    },
  
    //Mobile responsiverness
    [theme.breakpoints.down("md")]: {
      "& .sliderbox-image-container": {
        height: "550px",
        width: "100%",
        zIndex: "2",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      },
      "& .sliderbox-image-container::after": {
        content: `"/"`,
        width: "100%",
        height: "550px",
        zIndex: "4",
        backgroundColor: "black",
        position: "absolute",
        top: "0",
        left: "0",
        opacity: "0.8"
      },
      "& .sliderbox-text-container": {
        position: "absolute",
        top: "50%",
        zIndex: "9",
        justifyContent: "center",
        alignItems: "center",
        "& .sliderbox-text-inner-container": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: `calc(100vw - 20px)`,
          padding: "0px 45px",
  
          "& .sliderbox-text-heading": {
            fontSize: "3rem",
            lineHeight: "3rem",
            color: "white"
          },
          "& .sliderbox-text-subheading": {
            color: "white"
          },
          "& .sliderbox-button-container": {
            "& .sliderbox-btn-how": {
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white"
              }
            }
          }
        }
      }
    }
  });
  