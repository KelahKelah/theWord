import React from "react";

const BlogCard = ({item}) => {
    return(
        // TAKES ROW AND CONTAINER FROM PARENT 
        <article className="col-sm-12 col-md-3 col-lg-3 blog-column my-5">
            <div className="img_container">
                <img className="img_fig" src={item.blogImage} alt="Jesus Pic" />
            </div>
            <div className="blog_text_wrapper">
                <h3 className="blog_title my-1">{item.blogTitle}</h3>
            </div>
        </article>
    )
}
export {BlogCard}