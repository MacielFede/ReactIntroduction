import React from "react";
import '../stylesheets/Note.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
//This is the 'x' icon displayed

function Note( {id, text, completed, completeNote, deleteNote} ){
  //Here we see how we can connect 3 different components with each other
  
  return (
    <div className={ completed ? 'note-container completed' : 'note-container' }>
      <p className="note-text" onClick={() => completeNote(id)}>{ text }</p>
      <div className="note-icon-container" onClick={() => deleteNote(id)}> <AiOutlineCloseCircle className="note-icon"/> </div>
    </div>
  )
}

export default Note