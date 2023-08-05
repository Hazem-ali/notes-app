import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { noteAdded } from "../store/notes";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [group, setGroup] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(title);
    console.log(noteContent);
    console.log(group);

    const note = {
      title,
      content: noteContent,
      group,
    };

    // Call the server to send note, if success, dispatch adding it

    dispatch(noteAdded(note));
  };

  return (
    <div className="container pt-5">
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <span>
          <select
            className="form-control"
            onChange={(event) => setGroup(event.target.value)}
          >
            <option>Group</option>
            <option>Default</option>
            <option>2</option>
            <option>3</option>
          </select>
        </span>
      </div>

      <div className="form-group mt-4">
        <textarea
          className="form-control"
          placeholder="Type your note here..."
          onChange={(event) => setNoteContent(event.currentTarget.value)}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default NoteForm;
