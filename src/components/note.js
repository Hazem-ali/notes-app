/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteAdded } from "../store/notes";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Note = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const noteData = {
    title: "Mofty",
    color: "green",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio labore beatae omnis amet alias totam cumque debitis doloribus, fugit adipisci fugiat maiores culpa, repellendus, eveniet quae eligendi impedit temporibus?",
  };
  useEffect(() => {
    // console.log("Notes:", notes);

    console.log("Notes:", notes);
  }, []);
  return (
    <React.Fragment>
      <div>
        <button onClick={() => dispatch(noteAdded(noteData))}>Add note</button>
      </div>
      <div>
        {notes.map((note) => (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color={note.color} gutterBottom>
                {note.title}
              </Typography>

              <br />
              <Typography variant="body2">{note.content}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Note;
