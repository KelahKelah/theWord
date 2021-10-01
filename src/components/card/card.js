import React from "react";
import { sample, avater } from "../../assets/images";

const BlogCard = () => {
    return(
        <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="img_container bg-warning">
                <img className="img_fig" src={sample} alt="Jesus Pic" />
            </div>
            <div className="blog_text_wrapper my-4">
                <div className="smaller_heading_wrapper d-flex">
                    <h6 className="smaller_heading">Smaller Heading</h6>
                    <span className="blog_date">- July 2, 2021</span>
                </div>
                <div className="larger_heading">
                    <h3 className="blog_title my-1">The birth </h3>
                </div>
                <div className="blog_detail">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis 
                    </p>
                </div>
                <div className="d-flex align-items-center author_data my-3">
                    <img className="author_img" src={avater} alt="author" />
                    <div>
                        <p className="author_name mb-0">Kelechi Ekebor</p>
                        <p>@kelah</p>
                    </div> 
                </div>
            </div>
        </article>
    )
}
export {BlogCard}