import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Header, Sidebar, MobileHeader, Button, Input } from "../../components";
import { HomeIcon, PlainWriteIcon, DevIcon, QuestionIcon, ArrowIcon } from "../../assets/svgs";
import { Home, Questions, Devotional } from "../../routes"
import { Carousel } from '@trendyol-js/react-carousel';

import './style.css'

const MainLayout = ({ children }) => {
    let [currentButton, setCurrentButton] = useState(1)
    console.log(currentButton)
    const buttonArray = [
        { name: "Enemy" },
        { name: "Faith" },
        { name: "Soul" },
    ]
    const handleSlide = () => {
        setCurrentButton(currentButton + 3)
    }
    return (
        <div className="ml-wrapper">
            <div className="ml-headerWrapper">
                <Header />
            </div>
            {/* MOBILE  STARTS*/}
            <div className="mobile-ml-headerWrapper">
                <div className="m-searchbar-wrapper">
                    <Input className="m-search-input" type="search" placeholder={"Search"} />
                </div>

                <div className="mobile-recommended-wrapper">
                    <Carousel show={2} slide={2} swiping={true} >                
                            <leftArrow></leftArrow> 

                            <Button className='mobile-recommended-button'
                                buttonName="Andromeda" 
                            />
                            <Button className='mobile-recommended-button'
                            buttonName="comma" 
                            />
                            <Button className='mobile-recommended-button'
                            buttonName="comos" 
                            />
                            <Button className='mobile-recommended-button'
                            buttonName="general" 
                            /><Button className='mobile-recommended-button'
                            buttonName="relativity" 
                            /><Button className='mobile-recommended-button'
                            buttonName="diameter" 
                            />
                        

                            <rightArrow></rightArrow> 
                        {/* {buttonArray.map((ele, ind) => {
                            return (
                                <Button key={ind}
                                    buttonName={ele.name} />
                            )
                        })} */}

                    </Carousel>

                </div>

                <div className="mobile-icon-wrapper">
                    <Link to={Home} ><HomeIcon className='mobile-icon' /></Link>
                    <Link to={Questions} ><QuestionIcon className='mobile-icon' /> </Link>
                    <Link to={Devotional} ><DevIcon className='mobile-icon' /></Link>
                    <Link to={Home} ><PlainWriteIcon className='mobile-icon' /></Link>
                </div>

            </div>
            {/* MOBILE ENDS*/}

            <div className="ml-contentWrapper">
                <div className="ml-childrenWrapper">
                    {children}
                </div>
                <div className="ml-sidebarWrapper">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export { MainLayout }