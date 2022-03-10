import React from 'react'

import './input.css'

const Input = ({ className, type, placeholder, id, onChange }) => {
    return (
            <input className={`input-text ${className}`} type={type} placeholder={placeholder} id={id} onChange={onChange} /> 
    )
}
export { Input };