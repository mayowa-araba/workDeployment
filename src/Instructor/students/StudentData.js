import React from 'react';
import { StudentDataBox } from "../Styles/StyleStudentData";

import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
  Card,
  Typography,
  Grid,
} from '@mui/material';

export default function studentData(props) {
    const rows=props.studentData.map((aStudent, index)=>{
        return (
        <Box className="data" key={index}>
          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography component="div">
            <Avatar
              src="/broken-image.jpg" 
            />
          </Typography>
          <br/>
          <Typography>First name     <b>{aStudent.firstname}</b></Typography>
          <Typography>Last name      <b>{aStudent.lastname}</b></Typography>
          <Typography>Age      <b>{aStudent.age}</b></Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px"
            }}>
            <Button size="small"
                    onClick={()=>props.editRow(aStudent, index)}
                    >Edit
            </Button>

            <Button
              sx={{
                backgroundColor: "#05668d",
                color: "white",
                cursor: "pointer",
                padding: "5px 15px",
                borderRadius: "15px"
              }}
              size="small"
              onClick={()=>props.deleteAStudentFunction(index)}
            >Delete
            </Button>
            
          </CardActions>


          </Card>
        </Box>
        )
    })
    
    return <Box>
              <Box sx={StudentDataBox}>
                <Box className="studentGrid">
                {rows}
                </Box> 
              </Box> 
          </Box>
}