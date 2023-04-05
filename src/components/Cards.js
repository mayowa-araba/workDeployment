import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Cards({ image, title, text }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px"
        }}
      >
        <Button
          sx={{
            backgroundColor: "#05668d",
            color: "white",
            cursor: "pointer",
            padding: "5px 15px",
            borderRadius: "15px"
          }}
          size="small"
        >
          Enroll Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
