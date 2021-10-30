import React from 'react'
import {logo, JesusPraying, New, Jesus, avater, JesusTemptation, JesusIsRisen, JesusTheShepherd, JesusWithChildren} from '../../assets/images/'
import { BlogCard } from '../../components'
import './home.css'

const Home = () => {
    const blogData = [
        { smallerHeading: "Lorem Dolor", image:`${New}` , date: "July 2, 2021", largerHeading: "Lorem ipsum", introDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis", authorImage: `${avater}`, authorName: "Foo bar", authorHandle: "@oloo" },
        { smallerHeading: "Lorem Dolor", image:`${JesusTemptation}` , date: "July 2, 2021", largerHeading: "The reborn", introDescription: "This story eh e too much eh Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis", authorImage: `${avater}`, authorName: "Edet Ofo", authorHandle: "@onovo" },
        { smallerHeading: "Lorem Dolor", image:`${Jesus}` , date: "July 2, 2021", largerHeading: "Batism birth", introDescription: "Me sef i like the comment of , consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis", authorImage: `${avater}`, authorName: "Adela  ", authorHandle: "@ade" },
        { smallerHeading: "Lorem Dolor", image:`${JesusIsRisen}` , date: "July 2, 2021", largerHeading: "Lorem ipsum", introDescription: "Lorem ipsu loquitor the way i will, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis", authorImage: `${avater}`, authorName: "Amaya Outa", authorHandle: "@maya" },
        { smallerHeading: "Lorem Dolor", image:`${JesusTheShepherd}` , date: "July 2, 2021", largerHeading: "Transfiguration", introDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis", authorImage: `${avater}`, authorName: "Renee Eke", authorHandle: "@renee" },
        { smallerHeading: "Lorem Dolor", image:`${JesusWithChildren}` , date: "July 2, 2021", largerHeading: "The fish ", introDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis", authorImage: `${avater}`, authorName: "Ayra Martins", authorHandle: "@ayra" },
    ]
    return(
        <div>
            <section className="container-fluid m-auto verse-container py-5">
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
            </section>

            <section className="container-fluid">
                <div className="row my-5">
                     {blogData.map((item, index) => {
                         return(
                             <BlogCard key={index} item={item} />
                         )
                     })
                     }
                </div>
            </section>

            <section className="container-fluid my-5">
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
            </section>
        </div>
    )
}
export {Home};