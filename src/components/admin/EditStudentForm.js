import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CreateFormBox } from "../Styles/StyleCreateStudentForm";

function EditStudentForm({ student, setOpenV }) {
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
  const [edit, setEdit] = useState(false);
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
      window.alert("Student edited successfully");
      setData({
        fields: cleanSlate,
        errors: cleanSlate
      });
      setOpenV(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    errorExtraction();
    serverValidation();
  };

  const handleEdit = (e) => {
    console.log("clicked");
    setEdit(true);
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
                  value={edit ? fields.firstname : student.firstname}
                  onChange={(e) => handleUserInput(e)}
                  placeholder={edit ? student.firstname : null}
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
                  value={edit ? fields.lastname : student.surname}
                  onChange={(e) => handleUserInput(e)}
                  placeholder={edit ? student.surname : null}
                />
                <Typography className="form-box-email-error-text">
                  {errors.lastname}
                </Typography>
              </Box>
              <Box>
                <Typography>Address</Typography>
                <input
                  type="text"
                  name="address"
                  value={edit ? fields.address : student.address}
                  onChange={(e) => handleUserInput(e)}
                  placeholder={edit ? student.address : null}
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
                  value={edit ? fields.email : student.emailAddress}
                  onChange={(e) => handleUserInput(e)}
                  placeholder={edit ? student.emailAddress : null}
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
                  <option
                    value={edit ? fields.gender : student.gender}
                    defaultValue
                  >
                    {edit ? fields.gender : student.gender}
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
                  type="text"
                  name="password"
                  value={edit ? fields.password : student.password}
                  onChange={(e) => handleUserInput(e)}
                  placeholder={edit ? student.password : null}
                />
                <Typography className="form-box-password-error-text">
                  {errors.password}
                </Typography>
              </Box>
            </form>
          </Box>

          <Box className="form-button-box">
            <Button onClick={edit ? handleSubmit : handleEdit}>
              {edit ? "Submit" : "Edit Student"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EditStudentForm;
