import React from "react";

function NoteList({ notes, onDelete, onComplete }) {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
}

function NoteItem({ note, onDelete, onComplete }) {
  
  const options = { year: "numeric", month: "long", day: "numeric" };
  const id = note.id;
  return (
    <div className={`note-item ${note.completed ? "completed" : " "}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#EA3323"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <input
            type="checkbox"
            onChange={onComplete}
            value={note.id}
            id={note.id}
            name={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}

export default NoteList;
