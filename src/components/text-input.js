import React from "react";
import './text-input.css'

export const TextInput = ({placeholder, faded, ...props}) => {
    return <label className={`input${faded ? ' input-faded' : ''}`}>
        <input placeholder=" " {...props}/>
        <span>{placeholder}</span>
    </label>
}
