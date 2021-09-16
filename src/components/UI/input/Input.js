import React from "react";
import './input.css'

const Input = ({value, onChange, inputClass, inputPlaceholder}) => {
    return (
        <input value={value} onChange={onChange} type="text" className={'input ' + inputClass} placeholder={inputPlaceholder}/>
    )
}

export default Input