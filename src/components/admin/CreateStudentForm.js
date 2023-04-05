import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CreateFormBox } from "../../Styles/StyleCreateStudentForm";

function CreateStudentForm() {
  const [data, setData] = useState({
    fields: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      gender: ""
    },
    errors: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      gender: ""
    }
  });
  const cleanSlate = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    gender: ""
  };
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
      case "firstname":
        if (!value || value === "") {
          return "Firstname is required";
        } else {
          return "";
        }
      case "lastname":
        if (!value || value === "") {
          return "lastname is required";
        } else {
          return "";
        }
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
      case "address":
        if (!value || value === "") {
          return "Address is required";
        } else {
          return "";
        }
      case "gender":
        if (!value || value === "select") {
          return "Gender is required";
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
      }
    });
    if (Object.keys(extractedErrors).length > 0) {
      setData({ ...data, errors: extractedErrors });
    }
  };

  const serverValidation = () => {
    const { fields } = data;
    if (
      fields.firstname !== "" &&
      fields.lastname !== "" &&
      fields.email !== "" &&
      fields.gender !== "select" &&
      fields.address !== "" &&
      fields.password !== ""
    ) {
      window.alert("Student created successfully");
      console.log(fields);
      setData({
        fields: cleanSlate,
        errors: cleanSlate
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    errorExtraction();
    serverValidation();
  };

  return (
    <Box>
      <Box sx={CreateFormBox}>
        <Box className="cform-container">
          <Box className="cform-box">
            <form>
              <Box>
                <Typography>First Name</Typography>
                <input
                  type="text"
                  name="firstname"
                  value={fields.firstname}
                  onChange={(e) => handleUserInput(e)}
                  placeholder="Enter your firstname"
                />
                <Typography className="form-box-email-error-text">
                  {errors.firstname}
                </Typography>
              </Box>
              <Box>
                <Typography>Last Name</Typography>
                <input
                  type="text"
                  name="lastname"
                  value={fields.lastname}
                  onChange={(e) => handleUserInput(e)}
                  placeholder="Enter your lastname"
                />
                <Typography className="form-box-email-error-text">
                  {errors.lastname}
                </Typography>
              </Box>
              <Box>
                <Typography>First Name</Typography>
                <input
                  type="text"
                  name="address"
                  value={fields.address}
                  onChange={(e) => handleUserInput(e)}
                  placeholder="Enter your address"
                />
                <Typography className="form-box-email-error-text">
                  {errors.address}
                </Typography>
              </Box>
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
                <Typography>Gender</Typography>
                <select
                  id="gender"
                  name="gender"
                  onChange={(e) => handleUserInput(e)}
                >
                  <option value="select" defaultValue>
                    Select
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <Typography className="form-box-email-error-text">
                  {errors.gender}
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

          <Box className="form-button-box">
            <Button onClick={handleSubmit}>Create</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateStudentForm;
