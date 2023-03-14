import "./App.css";
import freeCodeCampLogo from "./assets/freecodecamp-logo.png";
import Button from "./components/Button.jsx";
import Display from "./components/Display";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const addOperator = (operator) => {
    let newInput = input;
    if (
      isNaN(input) &&
      ["-", "*", "/", "+"].includes(input.charAt(input.length - 1))
    ) {
      //If the last input given by the user is an operator delete the previous operator selected
      newInput = input.slice(0, -1);
    }
    setInput(newInput + operator);
  };

  const calculate = () => {
    input
      ? setInput(evaluate(input))
      : alert("Please add a number before calculating");
  };

  return (
    <main>
      <section className="freecodecamp-logo">
        <img src={freeCodeCampLogo} alt="freeCodeCamp logo" />
      </section>
      <section className="mainContainer">
        <Display input={input} />
        {/* Here I use the input from the app state */}
        <div className="rows">
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addOperator}>+</Button>
        </div>
        <div className="rows">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addOperator}>-</Button>
        </div>
        <div className="rows">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addOperator}>*</Button>
        </div>
        <div className="rows">
          <Button clickHandler={calculate}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addOperator}>/</Button>
        </div>
        <div className="rows">
          <ClearButton clickHandler={() => setInput("")} />
        </div>
      </section>
    </main>
  );
}

export default App;
