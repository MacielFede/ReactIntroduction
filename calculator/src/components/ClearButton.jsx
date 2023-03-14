import React from "react";
import '../stylesheets/ClearButton.css'

const ClearButton = ({clickHandler}) => (
  <div className="clear-button"
    onClick={ clickHandler }
  >Clear</div>
)

export default ClearButton