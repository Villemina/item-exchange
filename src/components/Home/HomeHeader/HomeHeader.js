import React from "react";
import  {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

import "./_HomeHeader.scss"


const HomeHeader = () => {

    return (
        <div className="header">
            <div className="header__top">
                <ul className="header__top-list">
                    <li><Link className="nav-link" to="/logowanie">Zaloguj</Link></li>
                    <li><Link className="nav-link" to="/rejestracja">Załóż konto</Link></li>
                </ul>
            </div>
            <div className="header__bottom">
                <ul className="header__bottom-list">
                    <li><Link className="nav-link" to="
                   /" >Start</Link></li>
                    <li><ScrollLink className="nav-link" to="what-about" smooth={true} offset={50} duration={500}>O co
                        chodzi?</ScrollLink></li>
                    <li><ScrollLink className="nav-link" to="about" smooth={true} offset={50} duration={500}>O
                        nas</ScrollLink></li>
                    <li><ScrollLink className="nav-link" to="organizations" smooth={true} offset={50} duration={500}>Fundacja
                        i organizacje</ScrollLink></li>
                    <li><ScrollLink className="nav-link" to="contact" smooth={true} offset={50}
                                    duration={500}>Kontakt</ScrollLink></li>
                </ul>
            </div>
        </div>
    );
}

export default HomeHeader;