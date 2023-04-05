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

import { Instructors } from "../../Data/Instructors";
import TableDisplay from "./TableDisplay";
import CreateStudentForm from "./CreateStudentForm";

const InstructorPortal = () => {
  const [createInstructor, setCreateInstructor] = useState(false);
  const [instructorData, setInstructorData] = useState({
    data: [],
    errors: ""
  });
  const [searchValues, setSearchValues] = useState("");

  const handleInputSearchValues = (e) => {
    setSearchValues(e.target.value);
    setInstructorData({ ...instructorData, data: [], errors: "" });
  };
  const handleSearch = () => {
    let error = "Instructor data does not exist";
    let empty = "Field can't be empty";

    if (searchValues !== "") {
      setCreateInstructor(false);
      let SearchedInstructor = Instructors.filter((instructor) => {
        return instructor.firstname === searchValues;
      });
      if (SearchedInstructor.length === 0) {
        setCreateInstructor({
          ...instructorData,
          data: [],
          errors: error
        });
      } else if (SearchedInstructor) {
        setInstructorData({
          ...instructorData,
          data: SearchedInstructor,
          errors: ""
        });
      }
    } else {
      setInstructorData({
        ...instructorData,
        data: [],
        errors: empty
      });
    }
  };
  const { data, errors } = instructorData;
  return (
    <Box>
      <Box sx={StudentBox}>
        <Box className="header-text">
          <Typography>Welcome to the Instructor Portal</Typography>
        </Box>
        <Box className="student-display-top">
          <Box className="student-search-box">
            <Box className="dnhsearch-box">
              <input
                type="text"
                name="search"
                placeholder="Find instructor by firstname"
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
                    setCreateInstructor((prev) => !prev);
                  }}
                >
                  Create Instructor
                </ListItemButton>
              </ListItemText>
            </List>
          </Box>
        </Box>
        <Box className="student-display-bottom">
          <Box className="student-data-box">
            <Box sx={{ backgroundColor: "yellow" }}>
              {!searchValues && !errors && !createInstructor && (
                <Typography>
                  There are no data to display, please use the{" "}
                  <span style={{ fontWeight: "bold" }}>search</span> field
                </Typography>
              )}
              {!createInstructor && (
                <Typography sx={{ color: "red" }}>{errors}</Typography>
              )}
            </Box>
            <Box sx={{ backgroundColor: "yellow" }}>
              {data.length > 0 && searchValues !== "" && (
                <Box>
                  <Typography>{data.length} user found</Typography>
                  <TableDisplay
                    data={data}
                    type="instructor"
                    setValues={setSearchValues}
                  />
                </Box>
              )}
            </Box>
            <Box>{createInstructor && <CreateStudentForm />}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructorPortal;
