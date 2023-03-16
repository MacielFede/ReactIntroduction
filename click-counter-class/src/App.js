import "./App.css";
import logo from "./img/freecodecamp-logo.png";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    //super() is used to obtained all the capabilities of the parent (React.Component)
    this.state = { clickCount: 0 };
    //This is the way to set the default state of the component
    this.clickHandler = this.clickHandler.bind(this)
    this.restarCounter = this.restarCounter.bind(this)
    //Whit this two lines I'm telling javascript to keep the context when this methods are used by other components
    //Bind() is the one that does this
  }

  clickHandler() {
    this.setState(({ clickCount }) => ({
      clickCount: clickCount + 1
    }));
    //Here I pass an argument, and then set the object state with the attribute
    //clickCount (the state variable) as the argument + 1
  }

  restarCounter() {
    this.setState(() => ({ clickCount: 0 }));
    //Here I set the object state with the one attribute directly to 0
  }

  render() {
    //This method returns the component structure in jsx
    return (
      <div className="App">
        <section className="freeCodeCamp-logo-container">
          <img
            className="freeCodeCamp-logo"
            src={logo}
            alt="freeCodeCamp logo"
          />
        </section>
        <section className="main-container">
          <Counter clickCount={this.state.clickCount} />

          <Button
            text="Click"
            clickHandler={this.clickHandler}
            //The definition of the function that we pass as a prop to a component has to be located on the father component.
          />

          <Button text="Restart" clickHandler={this.restarCounter} />
        </section>
      </div>
    );
  }
  //We always have to use this when referring to methods, else it will not recognize them
}

export default App;
