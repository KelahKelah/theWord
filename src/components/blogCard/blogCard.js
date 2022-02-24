import React from "react";
import {useHistory} from 'react-router-dom'
import {Eyes} from '../../assets/svgs/'
import './blogCard.css'

const BlogCard = ({item}) => {
    const history = useHistory()
    return(
        // TAKES ROW AND CONTAINER FROM PARENT 
        <article className="bc-col">
            <div className="bc-text-wrapper">
                <div className="bc-wrapper">
                    <h3 className="bc-header" onClick={()=>history.push('/single')} >{item.header}</h3>
                </div>
                <div>
                    <p className="bc-paragraph">{item.paragraph}</p>
                </div>
                <div className="bc-stats">
                    <p>{`${item.readTime}min read`}</p>
                    <div className="eye"><Eyes /><p>{item.eyeCount}</p></div>
                </div>
            </div>
            <div className="bc-img-wrapper">
                <img className="img-fig" src={item.blogImage} alt="Jesus Pic" />
            </div>
        </article>
    )
}
export {BlogCard}