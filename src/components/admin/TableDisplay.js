import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
  } from "@mui/material";
  import React, { useState } from "react";
  import Modal from "@mui/material/Modal";
  import EditForm from "./EditForm";
  
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxHeight: "70vh",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  
  const TableDisplay = ({
    data,
    setValues,
    type,
    students,
    Courses,
    Instructors
  }) => {
    const [openV, setOpenV] = React.useState(false);
    const [openD, setOpenD] = React.useState(false);
    const [openB, setOpenB] = React.useState(false);
  
    const handleClose = () => setOpenV(false);
    const handleCloseD = () => setOpenD(false);
    const handleCloseB = () => setOpenB(false);
  
    const [oneData, setOneData] = useState({});
  
    const handleSelectedData = (id) => {
      let selectedData = data.find((student) => {
        return student.id === id;
      });
      if (selectedData) {
        setOneData(selectedData);
      }
      setOpenV(true);
    };
    const handleDeleteModal = (id) => {
      let selectedData = data.find((datum) => {
        return datum.id === id;
      });
      if (selectedData) {
        setOneData(selectedData);
      }
      setOpenD(true);
    };
  
    const handleBlockModal = (id) => {
      let selectedData = data.find((datum) => {
        return datum.id === id;
      });
      if (selectedData) {
        setOneData(selectedData);
      }
      setOpenB(true);
    };
    const removeObjectWithId = (arr, id) => {
      const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
      if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
        console.log(objWithIdIndex);
        console.log(students);
      }
      return arr;
    };
  
    const handleDeleteData = (id) => {
      removeObjectWithId(Instructors, id);
      window.alert("Student deleted from database successfully");
      setOpenD(false);
      setValues("");
    };
  
    const blockObjectWithId = (arr, id) => {
      const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  
      if (objWithIdIndex > -1) {
        arr[objWithIdIndex].block = "Yes";
      }
      return arr;
    };
  
    const handleBlockObject = (id) => {
      blockObjectWithId(data, id);
      window.alert("Student blocked successfully");
      setOpenB(false);
      setValues("");
    };
  
    const unBlockObjectWithId = (arr, id) => {
      const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  
      if (objWithIdIndex > -1) {
        arr[objWithIdIndex].block = "No";
        console.log(arr);
      }
      return arr;
    };
  
    const handleUnBlockObject = (id) => {
      unBlockObjectWithId(data, id);
      window.alert("Student unblocked successfully");
      setOpenB(false);
      setValues("");
    };
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="left">Block-Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datum, index) => (
              <TableRow
                key={datum.surname}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(odd)": { backgroundColor: "#F8F6FA" }
                }}
              >
                <TableCell
                  align="left"
                  sx={{ color: datum.block === "Yes" ? "red" : "black" }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: datum.block === "Yes" ? "red" : "black" }}
                >
                  {datum.firstname}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: datum.block === "Yes" ? "red" : "black" }}
                >
                  {datum.surname}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: datum.block === "Yes" ? "red" : "black" }}
                >
                  {datum.emailAddress}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: datum.block === "Yes" ? "red" : "black" }}
                >
                  {datum.block}
                </TableCell>
                <TableCell align="left">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#05668d"
                        }
                      }}
                      onClick={() => handleSelectedData(datum.id)}
                    >
                      View
                    </Typography>
                    {openV && (
                      <Modal
                        open={openV}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            {type} Info
                          </Typography>
                          <EditForm
                            datum={oneData}
                            setModal={setOpenV}
                            type={type}
                          />
                        </Box>
                      </Modal>
                    )}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#05668d"
                        }
                      }}
                      onClick={() => handleDeleteModal(datum.id)}
                    >
                      Delete
                    </Typography>
                    {openD && (
                      <Modal
                        open={openD}
                        onClose={handleCloseD}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            align="center"
                          >
                            Kindly confirm if you want to delete the selected {""}
                            {type}
                          </Typography>
                          <Box
                            className="delete-actions-box"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              textAlign: "center",
                              alignItems: "center",
                              marginTop: "20px"
                            }}
                          >
                            <Button
                              onClick={() => handleDeleteData(oneData.id)}
                              sx={{ marginRight: "20px" }}
                            >
                              Yes
                            </Button>
                            <Button onClick={handleCloseD}>No</Button>
                          </Box>
                        </Box>
                      </Modal>
                    )}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#05668d"
                        }
                      }}
                      onClick={() => handleBlockModal(datum.id)}
                    >
                      {datum.block === "Yes" ? "Unblock" : "Block"}
                    </Typography>
                    {openB && (
                      <Modal
                        open={openB}
                        onClose={handleCloseB}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            align="center"
                          >
                            Kindly confirm if you want to{" "}
                            {datum.block === "Yes" ? "Unblock" : "Block"} the
                            selected {""}
                            {type}
                          </Typography>
                          <Box
                            className="delete-actions-box"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              textAlign: "center",
                              alignItems: "center",
                              marginTop: "20px"
                            }}
                          >
                            <Button
                              onClick={() =>
                                datum.block === "No"
                                  ? handleBlockObject(oneData.id)
                                  : handleUnBlockObject(oneData.id)
                              }
                              sx={{ marginRight: "20px" }}
                            >
                              Yes
                            </Button>
                            <Button onClick={handleCloseB}>No</Button>
                          </Box>
                        </Box>
                      </Modal>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default TableDisplay;
  