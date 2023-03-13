import React from "react";
import "../stylesheets/Button.css";

function Button({ text, clickHandler }) {
  //This form of defining props it's called destructuring, it help us build a more readable and maintainable code
  return (
    <button
      className={text === "Click" ? "click-button" : "restart-button"}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
