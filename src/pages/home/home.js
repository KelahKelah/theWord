import React from 'react'
import {Jesus,} from '../../assets/images/'
import { BlogCard, Pagination } from '../../components'
import './home.css'

const Home = () => {
    const blogData = [
        {id: 1, blogTitle: "Why God has special Love for David", blogImage: `${Jesus}`},
        {id: 2, blogTitle: "5 Verses to Revive Your Heart for Ministry", blogImage: `${Jesus}`},
        {id: 3, blogTitle: "Are You Submitting to the Word or the World?", blogImage: `${Jesus}`},
        {id: 4, blogTitle: "Why God had Special Love for Abraham", blogImage: `${Jesus}`},
        {id: 5, blogTitle: "7 Verses to Memorize for during a struggle", blogImage: `${Jesus}`},       
        {id: 6, blogTitle: "5 Questions Every Christian Woman Should Ask Herself", blogImage: `${Jesus}`},
        {id: 7, blogTitle: "3 Surprising Signs of a Prideful Heart", blogImage: `${Jesus}`},
        {id: 8, blogTitle: "Why We Can Thank Jesus Everyday", blogImage: `${Jesus}`},
    ]
    return(
        <div>
            <section className="container-fluid">
                <div>
                    <h5 className="blog-page-title mt-5">ABIDE IN MY WORD</h5>
                    <hr className="custom-underline" />
                </div>
                <div className="row my-5 blog-row">
                     {blogData.length > 0 && blogData.map((item, index) => {
                         return(
                             <BlogCard key={index} item={item} />
                         )
                     })
                     }
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Pagination />
                </div>
            </section>

        </div>
    )
}
export {Home};