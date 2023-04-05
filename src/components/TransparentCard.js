import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent sx={{minwidth:"250px", height:"120px", backgroundColor:"#3e3c3c"}}>
      <Typography sx={{ fontSize: 14, color:"white" }} gutterBottom>
        Alisa Hester
      </Typography>
      <Typography variant="h5" component="div" sx={{ color:"white" }}>
      Chief Operating Officer
      </Typography>
      <Typography variant="body2" sx={{ color:"white" }}>
      Access to education and opportunity is incredibly powerful for the individual, their families, their communities, and society.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function TransparentCard() {
  return (
    <Box sx={{marginTop:"5px"}}>
      <Card variant="outlined" sx={{opacity:0.7, backgroundColor:"#3e3c3c",width:"200px"  }}>{card}</Card>
    </Box>
  );
}