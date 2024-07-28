import React, { useState } from "react";

function NoteHeader({ notes, onSort, sortBy }) {
  const handleSort = (e) => {
    console.log(e.target);
  };
  return (
    <div className="note-header">
      <h2>my courses( {notes.length} )</h2>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">latest</option>
        <option value="earliest">earliest</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
}

export default NoteHeader;
