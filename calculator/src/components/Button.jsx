import React from "react";
import '../stylesheets/Button.css'

function Button(props){
  
  const isOperator = (value) => {
    return isNaN(value) && !['.', '='].includes(value)
  }
  
  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}  
      onClick={() => props.clickHandler(props.children)}
      //We have to use ()=> because this way we are using the function, if we don't use it we are calling the function but not executing it
    >
        {props.children}
    </div>
  )
  
  //
} 

export default Button