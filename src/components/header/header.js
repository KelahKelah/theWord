import React from "react";
import {logo } from "../../assets/images";

const Header = ({item}) => {
    return(
        <header className="blog_header d-flex align-items-center justify-content-around py-5">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className="header_ul d-flex mb-0">
                    <li className="custom-menu-list px-2">Home</li>
                    <li className="custom-menu-list px-2">Info</li>
                </ul>
            </nav>
            <form>
                <input className="input_search py-1" type="search" placeholder="Search..." />
            </form>
        </header>
    )
}
export {Header}