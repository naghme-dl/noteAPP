import React from "react";
import Message from "./Message";

function NoteStatus({ notes }) {
  if (notes.length === 0) return <Message>this is test</Message>;
  return (
    <ul className="note-status">
      <li>
        ALL <span>{notes.length}</span>
      </li>
      <li>
        COMPLETED <span>{notes.filter((n) => n.completed).length}</span>
      </li>
      <li>
        OPEN
        <span> {notes.length - notes.filter((n) => n.completed).length}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
