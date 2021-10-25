import React from "react";
import {avater, Jesus } from "../../assets/images";

const BlogCard = ({item}) => {
    return(
        // TAKES ROW AND CONTAINER FROM PARENT 
        <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="img_container bg-warning">
                <img className="img_fig" src={item.image} alt="Jesus Pic" />
            </div>
            <div className="blog_text_wrapper my-4">
                <div className="smaller_heading_wrapper d-flex">
                    <h6 className="smaller_heading">{item.smallerHeading}</h6>
                    <span className="blog_date">{item.date}</span>
                </div>
                <div className="larger_heading">
                    <h3 className="blog_title my-1">{item.largerHeading}</h3>
                </div>
                <div className="blog_detail">
                    <p>{item.introDescription}</p>
                </div>
                <div className="d-flex align-items-center author_data my-3">
                    <img className="author_img" src={item.authorImage} alt="author" />
                    <div className="px-4">
                        <p className="author_name mb-0">{item.authorName}</p>
                        <p>{item.authorHandle}</p>
                    </div> 
                </div>
            </div>
        </article>
    )
}
export {BlogCard}