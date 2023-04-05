export const coursecardbox = (theme) => ({
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    "& .course-container": {
      width: "1200px",
      margin: "60px 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      "& .course-heading-container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiList-root": {
          width: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px"
        },
        "& .MuiTypography-root": {
          textAlign: "center"
        },
        "& .course-heading": {
          fontSize: "2rem",
          fontFamily: "'poppins', sans-serif",
          fontWeight: "bold",
          marginBottom: "2rem"
        }
      },
      "& .course-showcase-area": {
        "& .MuiGrid-root": {
          display: "flex",
          justifyContent: "center"
        }
      },
      "& .course-learnmore": {
        margin: "50px 0",
        "& .MuiButton-root": {
          backgroundColor: "black",
          color: "white",
          borderRadius: "25px",
          padding: "10px 25px"
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      "& .course-container": {
        width: "100%",
        "& .course-heading-container": {
          "& .MuiList-root": {
            display: "none"
          }
        },
        "& .course-showcase-area": {
          "& .MuiGrid-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }
        }
      }
    }
  });
  