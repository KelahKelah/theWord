import React from "react";
import { Header, Sidebar, MobileHeader, Button, Input } from "../../components";
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
                    <Input type="search" />
                </div>
                <div className="m-header-wrapper">
                    
                </div>
                <div className="mobile-recommended-wrapper">
                    <Button className='mobile-recommended-button'
                        buttonName="Trust" 
                    />
                
                    <Button className='mobile-recommended-button'
                        buttonName="Fasting" 
                    />
                    {/* <Button className='mobile-recommended-button'
                        buttonName="Revelation day" 
                    />
                
                    <Button className='mobile-recommended-button'
                        buttonName="Trust" 
                    />

                    <Button className='mobile-recommended-button'
                        buttonName="Enemy" 
                    /> */}
                </div>

                {/* <MobileHeader /> */}
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