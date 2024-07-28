import "./App.css";
// import {state} from react;
import react from "@heroicons/react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import { useState } from "react";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (note) => {
    setNotes((pre) => [...pre, note]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompleteNotes = (e) => {
    const newNotes = notes.map((n) => {
      return parseInt(n.id) === parseInt(e.target.value)
        ? { ...n, completed: !n.completed }
        : n;
    });
    // console.log(completedNote);
    setNotes(newNotes);
  };

  let sortedNotes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />

      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={sortedNotes}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNotes}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
