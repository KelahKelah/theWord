import React from "react";
import { Button, Input } from "../../components";
import "./editor.css";

const Editor = () => {

    return(
        <form className="e-container">
            <Input className="" placeholder="Full Name"/>
            <Input className="" placeholder="Email"/>
            <textarea row="" col="">Write</textarea>
            <Button buttonName="Publish"/>
        </form>
    )
}
export { Editor };
