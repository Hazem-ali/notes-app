/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteAdded } from "../store/notes";
import Note from "./note";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const history = useHistory();
  const noteData = {
    title: "Mofty",
    color: "cyan",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio labore beatae omnis amet alias totam cumque debitis doloribus, fugit adipisci fugiat maiores culpa, repellendus, eveniet quae eligendi impedit temporibus?",
  };
  useEffect(() => {
    // console.log("Notes:", notes);
  }, []);

  return (
    <React.Fragment>
      <div>
        <button onClick={() => dispatch(noteAdded(noteData))}>Add Sample Note</button>
        <button onClick={() => history.push('/notes/new')}>New Note</button>
      </div>
      <div>
        {notes.map((note) => (
          <Note note={note}></Note>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Notes;
