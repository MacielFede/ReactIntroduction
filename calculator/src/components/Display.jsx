import React from "react";
import '../stylesheets/Display.css'

const Display = ({ input }) => (
  //Here I defined the display component as an arrow function
  <div className="display">
    {input}
  </div>
)

export default Display