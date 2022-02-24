import React from "react";
import './button.css'

const Button = ({buttonName}) => {
    return(
        <button className="b-tag">{buttonName}</button>
    )
}
export {Button}