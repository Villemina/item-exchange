import React from "react";
import {Link} from "react-scroll";
import "./_HomeHeader.scss"


const HomeHeader = () => {
    return (
        <div className="header">
            <div className="header__top">
                <ul className="header__top-list">
                    <li><Link className="nav-link" to="/login">Zaloguj</Link></li>
                    <li><Link className="nav-link" to="/registration">Załóż konto</Link></li>
                </ul>
            </div>
            <div className="header__bottom">
                <ul className="header__bottom-list">
                    <li><Link className="nav-link" to="start" smooth={true} offset={50} duration={500}>Start</Link></li>
                    <li><Link className="nav-link" to="what-about" smooth={true} offset={50} duration={500}>O co chodzi?</Link></li>
                    <li><Link className="nav-link" to="about" smooth={true} offset={50} duration={500}>O nas</Link></li>
                    <li><Link className="nav-link" to="organizations" smooth={true} offset={50} duration={500}>Fundacja i organizacje</Link></li>
                    <li><Link className="nav-link" to="contact" smooth={true} offset={50} duration={500}>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default HomeHeader;