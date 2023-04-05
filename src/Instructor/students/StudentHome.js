import React, { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import StudentData from "./StudentData";
import StudentForm from "./StudentForm";
import EditForm from "./EditForm";
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

const Student = () =>{
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    const studentData={
        firstname:"",
        lastname:"",
        age:""
    }
    const allStudent=[]

    const [student, setStudent]=useState(allStudent)//hooks example with object

    const [edit, setEdit]=useState(false)

    const [currentStudent, setCurrentStudent]=useState(studentData)

    const deleteAStudentFunction=(stuIndex)=>{
        setStudent(student.filter((user, i)=>i !==stuIndex))
    }

    const addNewStudentFunction=(aStudentData)=>{
        setOpen(true);
        setStudent([...student,aStudentData])
    }

    const [index, setIndex]=useState(0)

    const editRow=(aStudent)=>{
        setOpen(true);
        setEdit(true)
        setIndex(index)
        setCurrentStudent({
          firstname:aStudent.firstname, 
          lastname:aStudent.lastname, 
          age:aStudent.age
        })
    }
    const updateAStudent=(updatedStudent)=>{
        setEdit(false)

        setStudent(student.map((stu, i)=>(i===index? updatedStudent : stu)))
    }
    return(
    <>
        <Button variant="outlined" onClick={handleClickOpen}>
        Add Student
        </Button>

        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <Box>

          {
            edit ? (<EditForm setEdit={setEdit} 
              currentStudent={currentStudent}
              updateAStudent={updateAStudent}/>)
                : (<StudentForm 
                    addNewStudentFunction={addNewStudentFunction}/>)
          }     {/* this is a tenary ooperator */}
        </Box>
      </BootstrapDialog>

      <StudentData 
        studentData={student} 
        editRow={editRow}
        deleteAStudentFunction={deleteAStudentFunction}/>
      
        
    </> 
    )

}
export default Student;