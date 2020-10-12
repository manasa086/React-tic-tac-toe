import React from "react";



const Button=(props)=>{
    if(props.display)
    {
        return <button onClick={props.ButDisplay}>Start</button>
    }
    else
    {
        return "";
    }
}

export default Button;