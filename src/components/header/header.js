import React from "react";
import { Logo } from "../../assets/svgs";
import { NavLink } from "react-router-dom";
import { Home, Questions, Devotional } from "../../routes";
import './header.css';

const Header = () => {
    return(
        <header className="header-wrapper">
            <div className="header-logoWrapper">                
                <Logo />
            </div>
            <nav>
                <ul className="header-ul">
                    <NavLink className="header-link" activeclassname="custom-active" to={Home} ><li activeclassname="custom-active">Home</li></NavLink>
                    <NavLink className="header-link" to={Questions} ><li className="custom-menu-list">Questions</li> </NavLink>
                    <NavLink className="header-link" to={Devotional} ><li className="custom-menu-list">Devotionals</li> </NavLink>
                </ul>
            </nav>
        </header>
    )
}
export { Header }