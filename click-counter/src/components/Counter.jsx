import React from "react";
import '../stylesheets/Counter.css'

function Counter( {clickCount} ){
    return(
        <div className="counter">
            {clickCount}
        </div>
    )
}

export default Counter