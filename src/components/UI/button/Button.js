import React from "react";

const Button = ({buttonClass, text, onClick}) => {
    return (
        <button onClick={onClick} className={buttonClass}>{text}</button>
    )
}

export  default  Button