import React from "react";
import './select.css'

const Select = ({options, defaultValue, value, onChange, selectClass}) => {
    return (
        <select
            className={'select ' + selectClass}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="defaultValue">{defaultValue}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select