import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import { StudentBox } from "../../Styles/StyleStudentPortal";
import SearchIcon from "@mui/icons-material/Search";

import { Students } from "../../Data/Students";
import TableDisplay from "./TableDisplay";
import CreateStudentForm from "./CreateStudentForm";

const StudentPortal = () => {
  const [createStudent, setCreateStudent] = useState(false);
  const [studentData, setStudentData] = useState({
    data: [],
    errors: ""
  });
  const [searchValues, setSearchValues] = useState("");

  const handleInputSearchValues = (e) => {
    setSearchValues(e.target.value);
    setStudentData({ ...studentData, data: [], errors: "" });
  };
  const handleSearch = () => {
    let error = "Student data does not exist";
    let empty = "Field can't be empty";

    if (searchValues !== "") {
      setCreateStudent(false);
      let SearchedStudent = Students.filter((student) => {
        return student.firstname === searchValues;
      });
      if (SearchedStudent.length === 0) {
        setStudentData({
          ...studentData,
          data: [],
          errors: error
        });
      } else if (SearchedStudent) {
        setStudentData({
          ...studentData,
          data: SearchedStudent,
          errors: ""
        });
      }
    } else {
      setStudentData({
        ...studentData,
        data: [],
        errors: empty
      });
    }
  };
  const { data, errors } = studentData;
  return (
    <Box>
      <Box sx={StudentBox}>
        <Box className="header-text">
          <Typography>Welcome to the Student Portal</Typography>
        </Box>
        <Box className="student-display-top">
          <Box className="student-search-box">
            <Box className="dnhsearch-box">
              <input
                type="text"
                name="search"
                placeholder="Find student by firstname"
                value={searchValues}
                onChange={(e) => {
                  handleInputSearchValues(e);
                }}
              />
              <List>
                <ListItemText>
                  <ListItemButton>
                    <SearchIcon onClick={handleSearch} />
                  </ListItemButton>
                </ListItemText>
              </List>
            </Box>
          </Box>
          <Box className="student-create-box">
            <List>
              <ListItemText>
                <ListItemButton
                  className="create-btn"
                  onClick={() => {
                    setCreateStudent((prev) => !prev);
                  }}
                >
                  Create Students
                </ListItemButton>
              </ListItemText>
            </List>
          </Box>
        </Box>
        <Box className="student-display-bottom">
          <Box className="student-data-box">
            <Box sx={{ backgroundColor: "yellow" }}>
              {!searchValues && !errors && !createStudent && (
                <Typography>
                  There are no data to display, please use the{" "}
                  <span style={{ fontWeight: "bold" }}>search</span> field
                </Typography>
              )}
              {!createStudent && (
                <Typography sx={{ color: "red" }}>{errors}</Typography>
              )}
            </Box>
            <Box sx={{ backgroundColor: "yellow" }}>
              {data.length > 0 && searchValues !== "" && (
                <Box>
                  <Typography>{data.length} user found</Typography>
                  <TableDisplay
                    data={data}
                    type="student"
                    setValues={setSearchValues}
                  />
                </Box>
              )}
            </Box>
            <Box>{createStudent && <CreateStudentForm />}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentPortal;
