import React from 'react';
import {JesusIsRisen , avater} from '../../assets/images'
import './singleBlog.css'

const SingleBlog = () => {
    return(
        // TAKES CONTINER AND ROW FROM PARENT 
        <div className="container-fluid ">
            <div className="row">
                <article className="col-lg-7 m-auto">
                    <div className="d-flex justify-content-center singleblog-smaller-heading-wrapper">
                        <h3 className="singleblog-heading my-5">Jesus the good shephard</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img className="singleBlogImg" src={JesusIsRisen } alt="The blog" />
                    </div>
                    <div className="d-flex justify-content-center my-2">
                        <p className="singleblog-authur-name mb-0">By Kuthor Ramble</p>
                        <p className="singleblog-authur-date px-2">2 Dec, 2012</p>
                    </div>
                    <div className="text-center my-5">
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                            life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                            far World of Grammar.
                        </p>
                        <p>
                            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline 
                            of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her ow
                            road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                        </p>
                        <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                        the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                        </p>
                    </div>
                </article>
            </div>
        </div>
           
    )
}
export {SingleBlog}