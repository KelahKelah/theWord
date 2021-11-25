import React from "react";
import {useHistory} from 'react-router-dom'
import './card.css'

const BlogCard = ({item}) => {
    const history = useHistory()
    return(
        // TAKES ROW AND CONTAINER FROM PARENT 
        <article className="blog-col col-sm-12 col-md-3 col-lg- mt-3">
            <div className="img_container">
                <img className="img_fig" src={item.blogImage} alt="Jesus Pic" />
            </div>
            <div className="blog_text_wrapper text-center">
                <h3 className="blog_title my-1" onClick={()=>history.push('/single')} >{item.blogTitle}</h3>
            </div>
        </article>
    )
}
export {BlogCard}