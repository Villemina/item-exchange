import React from "react";
import {Link} from "react-router-dom";
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
                    <li><Link className="nav-link" to="start">Start</Link></li>
                    <li><Link className="nav-link" to="what-about">O co chodzi?</Link></li>
                    <li><Link className="nav-link" to="about">O nas</Link></li>
                    <li><Link className="nav-link" to="organizations">Fundacja i organizacje</Link></li>
                    <li><Link className="nav-link" to="contact">Kontakt</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default HomeHeader;