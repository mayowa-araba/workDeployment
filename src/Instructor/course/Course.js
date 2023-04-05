import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CourseData from "./CourseData";
import CourseForm from "./CourseForm";
import EditCourse from "./EditCourse";
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

    const Course = () =>{
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
        const courseData={
            courseT:"",
            duration:"",
            students:""
        }
        const allCourse=[]

        const [course, setCourse]=useState(allCourse)//hooks example with object

        const [edit, setEdit]=useState(false)

        const [currentCourse, setCurrentCourse]=useState(courseData)

        const deleteACourseFunction=(stuIndex)=>{
            setCourse(course.filter((user, i)=>i !==stuIndex))
        }

        const addNewCourseFunction=(aCourseData)=>{
            setOpen(true);
            setCourse([...course,aCourseData])
        }

        const [index, setIndex]=useState(0)

        const editRow=(aCourse)=>{
            setOpen(true);
            setEdit(true)
            setIndex(index)
            setCurrentCourse({
                courseT:aCourse.courseT, 
                duration:aCourse.duration, 
                students:aCourse.students
            })
        }
        const updateACourse=(updatedCourse)=>{
            setEdit(false)

            setCourse(course.map((stu, i)=>
                (i===index? updatedCourse : stu)))
        }

    return(
    <>
        <Button variant="outlined" onClick={handleClickOpen}>
            Add Course
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
                edit ? (<EditCourse setEdit={setEdit} 
                    currentCourse={currentCourse}
                    updateACourse={updateACourse}/>)
                        : (<CourseForm 
                            addNewCourseFunction={addNewCourseFunction}/>)
            }    {/* this is a tenary ooperator */}

        </Box>
      </BootstrapDialog>

      <CourseData 
            CourseData={course} 
            editRow={editRow}
            deleteACourseFunction={deleteACourseFunction}/>
      
        
    </> 
    )
}
export default Course;