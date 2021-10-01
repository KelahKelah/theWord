import React from 'react'
import {sample, sampleTree, test, avater} from '../../assets/images/'
import { BlogCard } from '../../components'
import './home.css'

const Home = () => {
    const blogData = [
        { heading: "Lorem Dolor", date: "July 2, 2021", LargerHeading: "Lorem ipsum", introDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis" },
        { heading: "Sit amet", date: "July 2, 2021", LargerHeading: "Consectetuer", introDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis" },
        { heading: "consectetue", date: "July 2, 2021", LargerHeading: "", introDescription: "Lorem ipsum dolor sit amet, conconsectetuerAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis" },
    ]
    return(
        <div>
            <header className="blog_header d-flex align-items-center justify-content-around py-4">
                <nav>
                    <ul className="header_ul d-flex mb-0">
                        <li className="header">Home</li>
                        <li>Info</li>
                    </ul>
                </nav>
                <form>
                    <input className="input_search py-1" type="search" placeholder="Search..." />
                </form>
            </header>
                    
            <main className="container-fluid">
                <div className="row">
                    <div className="col-md-3 custom-cols">
                    </div>
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-3">
                    </div>                    
                    <div className="col-md-3">
                    </div>
                </div>

                <div className="row my-5">
                     {blogData.map(() => {
                         return(
                             <BlogCard />
                         )
                     })
                     }
                </div>

            </main>

            <footer className="container-fluid footer-container">
                <div className="row footer-row py-5">
                    <div className="col-8 bg-inf">
                        <form className="subscribe-form">
                            <label className="subscribe-label">Subscribe to newsletter</label>
                            <input className="subscribe-input py-2" placeholder="Enter your email"/>
                        </form>
                    </div>
                    <div className="col-4 bg-primar d-flex align-items-center">
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export {Home};