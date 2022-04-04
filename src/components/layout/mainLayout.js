import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Carousel } from '@trendyol-js/react-carousel';
import { Header, Sidebar, MobileHeader, Button, Input } from "../../components";
import { Home, Questions, Devotional } from "../../routes"
import { BiBible } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { BsQuestionDiamond, BsPencilSquare } from 'react-icons/bs'
import './style.css'

const MainLayout = ({ children }) => {
    let [currentButton, setCurrentButton] = useState(1)
    console.log(currentButton)
    const buttonArray = [
        { name: "Enemy" },
        { name: "Faith" },
        { name: "Soul" },
        { name: "Money" },
        { name: "Universe" },
        { name: "Pride" },
        { name: "Heaven" },
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
                    <Carousel show={4} slide={4} swiping={true} >                
                            {/* <leftArrow></leftArrow>  */}

                            {/* <Button className='mobile-recommended-button'
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
                            /> */}
                        

                            {/* <rightArrow></rightArrow>  */}
                        {buttonArray.map((ele, ind) => {
                            return (
                                <Button className="mobile-recommended-button" key={ind} buttonName={ele.name} />
                            )
                        })}
                    </Carousel>

                </div>

                <div className="mobile-icon-wrapper">
                    <Link to={Home} ><GoHome className='mobile-icon' /></Link>
                    <Link to={Questions} ><BsQuestionDiamond className='mobile-icon' /> </Link>
                    <Link to={Devotional} ><BiBible className='mobile-icon' /></Link>
                    <Link to={Home} ><BsPencilSquare className='mobile-icon' /></Link>
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