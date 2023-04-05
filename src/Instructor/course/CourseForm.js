import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette:{
    primary:{
      main:"#05668d"
    }
  }
});

const CourseForm =(props)=>{

  const newCourse={courseT:"", duration:"", students:""}//initial new student
    const [aCourse, setACourse]=useState(newCourse)//hook to new student
    //hook variable   

    const handleChange=(event)=>{
        const{name, value}=event.target

        setACourse({
           ...aCourse, [name]:value
        })
    }

   const submitForm=()=>{
        props.addNewCourseFunction(aCourse)
        setACourse(newCourse)
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Course
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="course"
                  autoComplete="given-name"
                  name="courseT"
                  value={aCourse.courseT}
                  onChange={handleChange} 
                  fullWidth
                  label="Course Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="duration"
                  value={aCourse.duration} 
                  onChange={handleChange} 
                  label="Duration"
                  name="duration"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="overall"
                  value={aCourse.students}
                  onChange={handleChange} 
                  label="Students"
                  type="number"
                  name="students"
                />
              </Grid>

            </Grid>

            <Button
              value="submit" 
              onClick={submitForm} 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CourseForm;