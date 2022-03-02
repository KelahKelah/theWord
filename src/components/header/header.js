import React from "react";
import { Logo } from "../../assets/svgs";
import { NavLink } from "react-router-dom";
// import { Button } from "..";
import './header.css';

const Header = () => {
    return(
        <header className="header-wrapper">
            {/* Desktop header start */}
            <div className="header-logoWrapper">
                {/* <img src={logo} alt="Logo" /> */}
                <Logo />
            </div>
            <nav>
                <ul className="header-ul">
                    <NavLink activeClassName="custom-active" to="/" ><li activeClassName="custom-active">Home</li></NavLink>
                    <NavLink className="header-link" to="/questions" ><li className="custom-menu-list">Questions</li> </NavLink>
                    <NavLink className="header-link" to="/devotionls" ><li className="custom-menu-list">Devotionals</li> </NavLink>
                </ul>
            </nav>

            {/* <div name="mobile-header">
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
                <form>
                    
                </form>
                <div name="mobile-header-recommended">
                    <Button
                        buttonName="Trust" 
                    />
                
                    <Button
                        buttonName="Fasting" 
                    />
                    <Button
                        buttonName="Revelation day" 
                    />
                
                    <Button
                        buttonName="Trust" 
                    />

                    <Button
                        buttonName="Enemy" 
                    />               
                </div>
            </div> */}
            {/* Desktop header ends  */}
        </header>
    )
}
export {Header}