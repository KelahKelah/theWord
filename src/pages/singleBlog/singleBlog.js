import React from 'react'
import { sbImg1 } from '../../assets/images'
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../../assets/svgs'
import './singleBlog.css'

const SingleBlog = () => {
    return(
        // TAKES CONTINER AND ROW FROM PARENT 
        <div className="sb-container">
            <div className="sb-row">
                <article className="">
                    <div className="sb-heading-wrapper">
                        <h3 className="sb-heading">Jesus the good shephard</h3>
                    </div>

                    <div className="sb-data-wrapper">
                        <div className='sb-author-wrapper'>
                            {/* <img className="sb" src={sbImg1} alt="The blog" /> */}
                            <p className="sb-author">By Kuthor Ramble</p>
                            <p className="sb-date">2 Dec, 2012</p>
                            <p className="sb-read-min">8 mins read</p>
                        </div>
                        <div className='socials-icons-wrapper'>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                    
                    <div className="sb-img-wrapper">
                        <img className="sb-img" src={sbImg1} alt="blog img" />
                    </div>

                    <div className="sb-text-wrapper">
                        <p> Listen because this topic is deep and if care is not taken could be completely 
                            misunderstood. In mathew chapter 12 : 2 when the pharisees condemned Jesus and his 
                            disciples for picking grains on a sabbath day, he reminded them of when david and his 
                            men eat the consecrated bread because they were hungry and also when aron and his sons 
                            priests eat consecrated bread. 
                        </p>
                        <p>
                            Jesus was trying to make them understand that he is greater than the temple itself
                            since he even though is man is the son of God who owns the temple. and that he desires 
                            mercy more that he desires sacrifice. Now take a deep breath and understand what he was 
                            trying to say here. Its mercy first before sacrifice. It's about us acknowledging that we 
                            are a product of Gods mercy, living by that truth and staying humble for God before our righteousness. 

                        </p>
                        <p>
                            Now I'm saying not that righteousness is not good but we need to understand  that 
                            our righteousness will not save us as much as salvation that comes from Christ will. 
                            Reminds me why my pastor friend would say, "we can never be righteous enough for God". 
                            How can we get this salvation? It's simply just believing him and understanding that 
                            through the death and resurrection of christ have been given a gift to overcome sin, a gift of salvation. 
                        </p>
                        <p>
                            So that the enemy can no longer condemn us. Remember the bible verse in 
                            Roman 8:1 "Therefore, there is not no condemnation for those who are  for those who are in christ Jesus. 
                            Even if you have sinned, the enemy cannot use it as an Avenue to manipulate you be through the salvation 
                            that Christ Jesus gives yiure are free. The devil cannot make you suffer because of a sin that you have 
                            committed but it's important for us to try to avoid sin as much as possible.

                        </p>
                    </div>
                </article>
            </div>
        </div>
           
    )
}
export {SingleBlog}