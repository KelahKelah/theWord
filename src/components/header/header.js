import React from "react";
import {logo } from "../../assets/images";
import {Link } from "react-router-dom"
import './header.css'

const Header = ({item}) => {
    return(
        <header className="blog_header d-flex align-items-center justify-content-around py-5">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className="header_ul d-flex mb-0">
                    <Link className="header-link" to="/" ><li className="custom-active px-3">Home</li> </Link>
                    <Link className="header-link" to="/prayer" ><li className="custom-menu-list px-3">Prayers</li> </Link>
                    <Link className="header-link" to="/abide" ><li className="custom-menu-list px-3">Abide in My word</li> </Link>
                    <Link className="header-link" to="/bible" ><li className="custom-menu-list px-3">Bible Verses</li> </Link>
                </ul>
            </nav>
            <form>
                <input className="input_search py-1" type="search" placeholder="Search..." />
            </form>
        </header>
    )
}
export {Header}