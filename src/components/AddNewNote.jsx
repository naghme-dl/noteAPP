import React from "react";
import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("");
    setDescription("");
    // setNotes((pre) => [...pre, newNote]);
    onAddNote(newNote);
  };

  return (
    <div className="add-new-note">
      <h2>add new note</h2>{" "}
      <form action="" className="note-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="text-field"
          placeholder="note title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          add new note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
