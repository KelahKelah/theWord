import React from "react";
import { Button, Input } from "../../components";
import { img3 } from '../../assets/images'
import "./postBlog.css";

const PostBlog = () => {

    return(
        // <div>
            <form className="pb-form-wrapper">
                <div className="pb-image-container"></div>
                <div className="pb-input1-wrapper">
                    <Input className="pb-inputField" placeholder="Full Name"/>
                    <Input className="pb-inputField" placeholder="Last Name"/>
                </div>
                <div className="pb-input2-wrapper">
                    <Input className="pb-inputField" placeholder="Email" />
                </div>
                <div>
                    <h6>Share your thoughts here</h6>
                </div>
                <div>
                    <div className="pb-blog-tool"></div>
                    <textarea className="pb-text-area" rows="10" cols="91">Start Writing </textarea>
                </div>
                <Button buttonName="Publish" />
            </form>
        // </div> 

    )
}
export { PostBlog };
