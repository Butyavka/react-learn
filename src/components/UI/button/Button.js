import React from "react";
import "../../../styles/button.css"

const Button = ({buttonClass, text, onClick}) => {
    return (
        <button onClick={onClick} className={buttonClass}>{text}</button>
    )
}

export  default  Button