import React from "react";
import {logo } from "../../assets/images";
import {Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return(
        <header className="header-wrapper">
            <div className="header-logoWrapper">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className="header-ul">
                    <Link className="header-link" to="/" ><li className="custom-active">Home</li></Link>
                    <Link className="header-link" to="/questions" ><li className="custom-menu-list">Questions</li> </Link>
                    <Link className="header-link" to="/devotionls" ><li className="custom-menu-list">Devotionals</li> </Link>
                </ul>
            </nav>
            {/* <form>
                <input className="input_search" type="search" placeholder="Search..." />
            </form> */}
        </header>
    )
}
export {Header}