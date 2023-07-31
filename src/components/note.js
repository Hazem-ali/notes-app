import React from "react";

const Note = ({ note }) => {
  return (
    <div className="d-flex justify-content-center m-3">
      <div className="card" style={{ width: "25rem", backgroundColor: note.color }}>
        <div className="card-body" >
          <div>
            <h5 className="card-title" >
              {note.title}
            </h5>
          </div>
          <hr />
          <p className="card-text">{note.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Note;
