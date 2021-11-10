import React from 'react'
import {Jesus,} from '../../assets/images/'
import { BlogCard, Pagination } from '../../components'
import './home.css'

const Home = () => {
    const blogData = [
        {blogTitle: "Why God has special Love for David", blogImage: `${Jesus}`},
        {blogTitle: "5 Verses to Revive Your Heart for Ministry", blogImage: `${Jesus}`},
        {blogTitle: "Are You Submitting to the Word or the World?", blogImage: `${Jesus}`},
        {blogTitle: "Why God had Special Love for Abraham", blogImage: `${Jesus}`},
        {blogTitle: "7 Verses to Memorize for during a struggle", blogImage: `${Jesus}`},       
        {blogTitle: "5 Questions Every Christian Woman Should Ask Herself", blogImage: `${Jesus}`},
        {blogTitle: "3 Surprising Signs of a Prideful Heart", blogImage: `${Jesus}`},
        {blogTitle: "Why We Can Thank Jesus Everyday", blogImage: `${Jesus}`},
    ]
    return(
        <div>
            {/* <section className="container-fluid m-auto verse-container py-5">
                <div className="row verse-card-row my-5">
                    <div className="col-md-2 verse-custom-col text-center">
                        <div>
                            <p className="verse-text mb-0">Sleep</p>
                            <p className="verse-text mb-0">
                                Isitum tua 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 verse-custom-col text-center">
                        <div>
                            <p className="verse-text mb-0">Water</p>
                            <p className="verse-text mb-0">
                                Isitum tua 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 verse-custom-col text-center">
                        <div>
                            <p className="verse-text mb-0">Work</p>
                            <p className="verse-text mb-0">
                                Isitum tua 
                            </p>
                        </div>
                    </div>                    
                    <div className="col-md-2 verse-custom-col text-center">
                        <div>
                            <p className="verse-text mb-0">Drinking</p>
                            <p className="verse-text mb-0">
                                Isitum tua 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 verse-custom-col text-center">
                        <div>
                            <p className="verse-text mb-0">Money</p>
                            <p className="verse-text mb-0">
                                Isitum tua 
                            </p>
                        </div>
                    </div> 
                    
                </div>
            </section> */}

            <section className="container-fluid">
                <div>
                    <h5 className="blog-page-title mt-5">ABIDE IN MY WORD</h5>
                    <span className="custom-underline"></span>
                </div>
                <div className="row my-5 blog-row">
                     {blogData.map((item, index) => {
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

            {/* <section className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="d-flex justify-content-center">
                            <p> Want to contribute your own story? </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-warning">Click Here</button>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
export {Home};