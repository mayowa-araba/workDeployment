export const CreateFormBox = (theme) => ({
    backgroundColor: "white",
    marginTop: "15px",
    "& .cform-container": {
      "& .cform-box": {
        "& .MuiTypography-root": {
          fontWeight: "bold",
          marginBottom: "0.5rem"
        },
        "& input": {
          width: "100%",
          border: "1px solid grey",
          marginBottom: "0.5rem",
          padding: "10px",
          outline: "none"
        },
        "& .form-box-email-error-text, .form-box-password-error-text": {
          color: "red"
        }
      },
  
      "& .form-forgot-password-box": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
  
      "& .form-button-box": {
        width: "100%",
        backgroundColor: "#05668d",
        borderRadius: "10px",
        padding: "5px 15px",
        cursor: "pointer",
        textAlign: "center",
        marginTop: "1.5rem",
        marginBottom: "2.5rem",
  
        "& .MuiButton-root": {
          color: "white",
          cursor: "pointer",
          textAlign: "center"
        }
      },
  
      "& .form-signup-box": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
  
        "& .signup-text": {
          color: "#05668d",
          cursor: "pointer"
        }
      }
    }
  });
  