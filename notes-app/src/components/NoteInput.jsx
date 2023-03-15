import React, { useState } from "react";
import "../stylesheets/NoteInput.css";
import { v4 } from "uuid";
//uuid set an unique id. It isn't going to be 1,2,3...

function NoteInput(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    //e is the event, target the input and value the text written by the user
  };

  const send = (e) => {
    e.preventDefault();
    const newNote = {
      id: v4(),
      text: input,
      completed: false,
    };
    props.onSubmit(newNote);
    //This is going to set a prop on the component, that when a submit event occurs it's going to use that variable.
    //We have to define the event as a prop on the parent component and execute a function
  };

  return (
    <form onSubmit={send}>
      <input
        type="text"
        placeholder="Write a note"
        name="text"
        onChange={handleChange}
      />
      <button>Add note</button>
    </form>
  );
}

export default NoteInput;
