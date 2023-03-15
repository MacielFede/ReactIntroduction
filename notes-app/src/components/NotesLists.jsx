import React, { useState } from "react";
import NoteInput from "./NoteInput";
import Note from "./Note.jsx";
import "../stylesheets/NotesLists.css";

function NotesLists() {
  const [notes, setNotes] = useState([]);
  //We are going to use an array of objects.

  const addNote = (note) => {
    if (note.text.trim()) {
      note.text = note.text.trim();
      //Delete of the start and end spaces
      const notesUpdate = [note, ...notes];
      //This way we add the note at the start of the list
      setNotes(notesUpdate);
    }
  };

  const deleteNote = (id) => {
    const notesUpdate = notes.filter((note) => note.id !== id);
    setNotes(notesUpdate);
  };

  const completeNote = (id) => {
    const notesUpdate = notes.map((note) => {
      if (note.id === id) note.completed = !note.completed;
      return note;
    });
    setNotes(notesUpdate);
  };

  //We can write empty tags as the main container of the component so that theres no extra div on our project
  return (
    <>
      <NoteInput onSubmit={addNote} />
      <div className="notes-container">
        {notes.map((note) => (
          // For each note(object) we are going to create a react component with 2 props
          //The 'key' prop is an identifier for each element on the list. React uses it to not change the order of the elements.
          //Key isn't displayed on the components props
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            completed={note.completed}
            deleteNote={deleteNote}
            completeNote={completeNote}
          />
        ))}
      </div>
    </>
  );
}

export default NotesLists;
