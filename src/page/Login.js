import React, { useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { Formbox } from "../Styles/StyleLoginForm";
import { Link } from "react-router-dom";
import { Users } from "../Data/Users";

function LoginForm() {
  const [data, setData] = useState({
    fields: {
      email: "",
      password: ""
    },
    errors: {
      email: "",
      password: ""
    }
  });
  const { fields, errors } = data;

  //Operation SECHsquare

  const handleUserInput = (e) => {
    setData({
      errors: {
        ...data.errors,
        [e.target.name]: clientValidation(e.target.name, e.target.value)
      },
      fields: {
        ...data.fields,
        [e.target.name]: e.target.value
      }
    });
  };
  const clientValidation = (name, value) => {
    switch (name) {
      case "email":
        if (!value || value === "") {
          return "Email is required";
        } else {
          return "";
        }
      case "password":
        if (!value || value === "") {
          return "Password is required";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };
  const errorExtraction = () => {
    const { fields } = data;
    let extractedErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = clientValidation(name, fields[name]);
      if (error && error.length > 0) {
        extractedErrors[name] = error;
        console.log(extractedErrors);
      }
    });
    if (Object.keys(extractedErrors).length > 0) {
      setData({ ...data, errors: extractedErrors });
      console.log(data);
    }
  };

  const serverValidation = () => {
    const { fields } = data;
    const registeredUser = Users.find((user) => user.email === fields.email);
    if (fields.email !== "" && fields.password !== "") {
      if (registeredUser && fields.password === registeredUser.password) {
        const data = {
          email: fields.email,
          password: fields.password
        };
        window.alert("Login success", JSON.stringify(data));
      } else if (
        registeredUser &&
        fields.password !== registeredUser.password
      ) {
        const newErrors = {
          email: "",
          password: "Incorrect password"
        };
        setData({ ...data, errors: newErrors });
      } else {
        const newErrors = {
          email: "Email or password incorrect",
          password: ""
        };
        setData({ ...data, errors: newErrors });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    errorExtraction();
    serverValidation();
  };

  return (
    <Box>
      <Box sx={Formbox}>
        <Box className="form-container">
          <Box className="form-heading">
            <Typography>Welcome Back</Typography>
          </Box>
          <Box className="form-box">
            <form>
              <Box>
                <Typography>Email Address</Typography>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={(e) => handleUserInput(e)}
                  placeholder="Enter your email address"
                />
                <Typography className="form-box-email-error-text">
                  {errors.email}
                </Typography>
              </Box>
              <Box>
                <Typography>Password</Typography>
                <input
                  placeholder="Enter your password"
                  type="text"
                  name="password"
                  value={fields.password}
                  onChange={(e) => handleUserInput(e)}
                />
                <Typography className="form-box-password-error-text">
                  {errors.password}
                </Typography>
              </Box>
            </form>
          </Box>
          <Box className="form-forgot-password-box">
            <span style={{ display: "flex", alignItems: "center" }}>
              <Checkbox label="keepSignedIn" />
              <Typography>Keep me signed in</Typography>
            </span>
            <Typography>Forgot Password?</Typography>
          </Box>
          <Box className="form-button-box">
            <Button onClick={handleSubmit}>Login</Button>
          </Box>
          <Box className="form-signup-box">
            <Typography>Don't have an account? </Typography>
            <Link to="/SignupPage">
              <span className="signup-text">Sign up here</span>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
