import React from "react";
import { Button } from "../../components";
import "./editor.css";

const Editor = () => {

    return(
        <form className="e-container">
            <input className="" placeholder="Full Name"/>
            <input className="" placeholder="Email"/>
            <textarea row="" col="">Write</textarea>
            <Button buttonName="Publish"/>
        </form>
    )
}
export { Editor };
