import  React  from 'react';
import { CourseDataBox } from "../Styles/StyleCourseBox"
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
} from '@mui/material';

export default function CourseData(props) {
    const rows=props.CourseData.map((aCourse, index)=>{
        return (
        <Box className="data" key={index}>
          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography component="div">
            
          </Typography>

          <Typography className='C-txt'>{aCourse.courseT}</Typography>
          <Typography className='D-txt'>{aCourse.duration} Weeks</Typography>
          <Typography className='P-txt'>{aCourse.students} Students</Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px"
            }}>
            <Button size="small"
              onClick={()=>props.editRow(aCourse, index)}
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
              onClick={()=>props.deleteACourseFunction(index)}
                >Delete
            </Button>
            
          </CardActions>


          </Card>
        </Box>
        )
    })
    
    return <Box>
              <Box sx={CourseDataBox}>
                <Box className="courseGrid">
                {rows}
                </Box> 
              </Box> 
          </Box>
}