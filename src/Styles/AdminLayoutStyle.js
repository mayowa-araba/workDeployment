export const AdminLayoutBox = (theme) => ({
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .admin-container": {
      width: "1200px",
      "& .desktop-display-left": {
        marginTop: "1rem",
        "& .desktop-nav-left": {
          marginBottom: "20px"
        },
        "& .MuiSvgIcon-root": {
          cursor: "pointer",
          fontSize: "1.7rem",
          marginRight: "15px"
        }
      },
      "& .desktop-display-right": {
        padding: "2rem",
        "& .desktop-display-area": {}
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        "& .desktop-display-left": {
          display: "none"
        },
        "& .desktop-display-right": {
          padding: "1rem"
        }
      }
    }
  });
  