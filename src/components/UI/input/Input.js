import React from "react";

const Input = ({inputClass, inputPlaceholder}) => {
    return (
        <input type="text" className={inputClass} placeholder={inputPlaceholder}/>
    )
}

export default Input