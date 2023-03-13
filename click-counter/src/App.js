import "./App.css";
import logo from "./img/freecodecamp-logo.png";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);
  //ClickCount is the variable that changes with the state of the component
  //setClickCount is the function that sets the clickCount value
  //useState(0) means that the variable will start with a value of 0

  const clickHandler = () => {
    setClickCount(clickCount + 1);
    //We pass directly what we want to do with the variable value
  };

  const restarCounter = () => {
    setClickCount(0);
  };

  return (
    <div className="App">
      <section className="freeCodeCamp-logo-container">
        <img className="freeCodeCamp-logo" src={logo} alt="freeCodeCamp logo" />
      </section>
      <section className="main-container">
        <Counter clickCount={clickCount} />

        <Button
          text="Click"
          clickHandler={clickHandler}
          //The definition of the function that we pass as a prop to a component has to be located on the father component.
        />

        <Button text="Restart" clickHandler={restarCounter} />
      </section>
    </div>
  );
}

export default App;
