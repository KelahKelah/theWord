import React from "react";
import { Link } from 'react-router-dom'
import { Header, Sidebar, MobileHeader, Button, Input } from "../../components";
import { HomeIcon, PlainWriteIcon, DevIcon, QuestionIcon, ArrowIcon } from "../../assets/svgs";
import { Home, Questions, Devotional } from "../../routes"
import  './style.css'

const MainLayout = ({children}) => {
    return(
        <div className="ml-wrapper">
            <div className="ml-headerWrapper">
                <Header />
            </div>
            {/* MOBILE  */}
            <div className="mobile-ml-headerWrapper">
                <div className="m-searchbar-wrapper">
                    <Input className="m-search-input" type="search" placeholder={"Search"}/>
                </div>
                <div className="mobile-recommended-wrapper">
                    <Button className='mobile-recommended-button'
                        buttonName="Trust" 
                    />
                
                    <Button className='mobile-recommended-button'
                        buttonName="Fasting" 
                    />
                    <Button className='mobile-recommended-button'
                        buttonName="Revelation day" 
                    />
                
                    <Button className='mobile-recommended-button'
                        buttonName="Trust" 
                    />

                    <Button className='mobile-recommended-button'
                        buttonName="Enemy" 
                    />
                    <ArrowIcon
                    
                    />
                </div>
                <div className="mobile-icon-wrapper">
                    <Link to={Home} ><HomeIcon className='mobile-icon' /></Link>
                    <Link to={Questions} ><QuestionIcon className='mobile-icon' /> </Link>
                    <Link to={Devotional} ><DevIcon className='mobile-icon' /></Link>             
                    <Link to={Home} ><PlainWriteIcon className='mobile-icon' /></Link>
                </div>

            </div>
            {/* MOBILE */}
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
export {MainLayout}