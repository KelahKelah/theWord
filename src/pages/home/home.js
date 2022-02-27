import React from 'react'
import {MtOlives, Kids} from '../../assets/images/'
import { BlogCard } from '../../components'
import './home.css'

const Home = () => {
    const blogData = [
        {id: 1, header: "Why God has special Love for David", paragraph: "Do you know that when we love ourselves more than we love other people, ...." ,  eyeCount: "165", readTime: "20", blogImage: `${MtOlives}`},
        {id: 2, header: "5 Verses to Revive Your Heart for Minis", paragraph: "Starting something you haven’t done before, but always wanted to do? " , eyeCount: "16", readTime: "3", blogImage: `${Kids}`},
        {id: 3, header: "Are You Submitting to the Word or the Wo?", paragraph: "Do you like what you have? Don't have? Whatever the answer, just " , eyeCount: "125", readTime: "10", blogImage: `${MtOlives}`},
        {id: 1, header: "Why God has special Love for David", paragraph: "Do you know that when we love ourselves more than we love other people, ...." ,  eyeCount: "165", readTime: "20", blogImage: `${Kids}`},
        {id: 3, header: "Are You Submitting to the Word or the Wo?", paragraph: "Do you like what you have? Don't have? Whatever the answer, just " , eyeCount: "125", readTime: "10", blogImage: `${MtOlives}`},
        {id: 3, header: "Are You Submitting to the Word or the Wo?", paragraph: "Do you like what you have? Don't have? Whatever the answer, just " , eyeCount: "125", readTime: "10", blogImage: `${MtOlives}`},
        {id: 3, header: "Are You Submitting to the Word or the Wo?", paragraph: "Do you like what you have? Don't have? Whatever the answer, just " , eyeCount: "125", readTime: "10", blogImage: `${MtOlives}`},
        {id: 3, header: "Are You Submitting to the Word or the Wo?", paragraph: "Do you like what you have? Don't have? Whatever the answer, just " , eyeCount: "125", readTime: "10", blogImage: `${MtOlives}`},
        {id: 3, header: "Are You Submitting to the Word or the Wo?", paragraph: "Do you like what you have? Don't have? Whatever the answer, just " , eyeCount: "125", readTime: "10", blogImage: `${MtOlives}`},
    ]
    return(
        <section className="h-container">
            <div className="h-row">
                    {blogData.length > 0 && blogData.map((item, index) => {
                        return(
                            <BlogCard key={index} item={item} />
                        )
                    })
                    }
            </div> 
        </section>
    )
}
export {Home};