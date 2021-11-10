import React from "react";
import {logo } from "../../assets/images";
import './header.css'

const Header = ({item}) => {
    return(
        <header className="blog_header d-flex align-items-center justify-content-around py-5">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className="header_ul d-flex mb-0">
                    <li className="custom-active px-3">Home</li>
                    <li className="custom-menu-list px-3">Prayers</li>
                    <li className="custom-menu-list px-3">Abide in My word</li>
                    <li className="custom-menu-list px-3">Bible Verses</li>
                </ul>
            </nav>
            <form>
                <input className="input_search py-1" type="search" placeholder="Search..." />
            </form>
        </header>
    )
}
export {Header}