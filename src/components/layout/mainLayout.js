import React from "react";
import { Header, Sidebar, MobileHeader, Button, Input } from "../../components";
import { HomeIcon, PlainWriteIcon, DevIcon, QuestionIcon } from "../../assets/svgs";
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
                    <Button className=''
                        buttonName="Trust" 
                    />
                
                    <Button className=''
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
                </div>
                <div className="mobile-icon-wrapper">
                    <HomeIcon className='mobile-icon' />
                    <QuestionIcon className='mobile-icon' />
                    <DevIcon className='mobile-icon' />
                    <PlainWriteIcon className='mobile-icon' />
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