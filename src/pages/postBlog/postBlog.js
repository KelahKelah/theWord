import React from "react";
import { Button } from "../../components";
import { PenIcon, TextIcon, AlignIcon } from "../../assets/svgs";
import "./postBlog.css";

const PostBlog = () => {
    return(
            <form className="pb-form-wrapper">
                <div>
                    <h6>Share your thoughts here</h6>
                </div>
                <div>
                    <div className="pb-blog-tool">
                        <PenIcon />
                        <TextIcon />
                        <AlignIcon />
                    </div>
                    <textarea className="pb-text-area" rows="" cols="">Start Writing </textarea>
                </div>
                <Button className="pd-button" buttonName="Publish" />
            </form>
        )
}
export { PostBlog };