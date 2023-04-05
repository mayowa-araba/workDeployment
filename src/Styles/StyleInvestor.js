export const InvestorBox = (theme) => ({
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
  
    "& .investor-content-box": {
      width: "1200px",
      textAlign: "left",
      margin: "80px 0px",
  
      "& .investor-text-container": {
        position: "relative",
        marginBottom: "15px",
        "& .MuiTypography-root": {
          fontSize: "1.5rem",
          fontFamily: "'poppins', sans-serif",
          fontWeight: "bold"
        }
      },
  
      "& .investor-text-container::before": {
        content: `""`,
        position: "absolute",
        width: "65px",
        height: "5px",
        top: "-15px",
        left: "0",
        backgroundColor: "#05668d"
      },
  
      "& .investor-images-container": {
        display: "flex",
        "& .investor-images": {
          marginRight: "1rem",
          "& img": {
            width: "120px",
            height: "64px"
          }
        }
      }
    },
  
    [theme.breakpoints.down("md")]: {
      "& .investor-content-box": {
        width: "100%",
        margin: "80px 15px 30px 15px",
        padding: "15px",
        "& .MuiGrid-root": {
          padding: "15px"
        },
        "& .investor-text-container::before": {
          left: "15px"
        },
        "& .investor-images-container": {
          width: "100%",
          "& .investor-images": {
            marginRight: "0.5rem",
            "& img": {
              width: "80px",
              height: "24px"
            }
          }
        }
      }
    }
  });
  