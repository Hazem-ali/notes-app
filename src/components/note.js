import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Note = ({ note }) => {
  return (
    <Container maxWidth="sm" sx={{ my: 2, p: 0 }}>
      <Card sx={{ minWidth: 275, boxShadow: 4, p: 0 }}>
        <CardContent>
          <div className="">
            <Typography sx={{ fontSize: 14 }} color={note.color} gutterBottom>
              {note.title}
            </Typography>
          </div>

          <br />
          <Typography variant="body2">{note.content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Note;
