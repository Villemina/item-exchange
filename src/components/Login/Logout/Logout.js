import React from 'react';
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import Decoration from "../../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import './_logout.scss'

const Logout = () => {
    return (
        <div>
            <HomeHeader/>
            <section className="logout">
                <h2>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                <img className="logout__decoration" src={Decoration} alt="fancy interline" />
                <button><Link className="nav-link" to="/">Strona Główna</Link></button>
            </section>

        </div>
    );
};

export default Logout;