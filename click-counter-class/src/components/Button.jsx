import React from "react";
import "../stylesheets/Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.text === "Click" ? "click-button" : "restart-button"
        }
        onClick={this.props.clickHandler}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
