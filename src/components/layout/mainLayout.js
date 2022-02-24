import React from "react";
import { Header, Sidebar } from "../../components";
import  './style.css'

const MainLayout = ({children}) => {
    return(
        <div className="ml-wrapper">
            <div className="ml-headerWrapper">
                <Header />
            </div>
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