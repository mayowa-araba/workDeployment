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

const StudentForm =(props)=>{

  const newStudent={firstname:"", lastname:"", age:""}//initial new student
    const [aStudent, setAStudent]=useState(newStudent)//hook to new student
    //hook variable   

    const handleChange=(event)=>{
        const{name, value}=event.target

        setAStudent({
           ...aStudent, [name]:value
        })
    }

   const submitForm=()=>{
        props.addNewStudentFunction(aStudent)
        setAStudent(newStudent)
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
          <Avatar sx={{ m: 1, backgroundColor:"#05668d" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Student
          </Typography>
          <Box  noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="firstName"
                  autoComplete="given-name"
                  name="firstname"
                  value={aStudent.firstname}
                  onChange={handleChange} 
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="lastName"
                  value={aStudent.lastname} 
                  onChange={handleChange} 
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="overall"
                  value={aStudent.age}
                  onChange={handleChange} 
                  label="Age"
                  type="number"
                  name="age"
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

export default StudentForm;