import React from 'react';
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import Decoration from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import './_registration.scss'

const Login = () => {
    return (
        <div>
            <HomeHeader/>
            <section className="registration__container">
                <h3>Załóż konto</h3>
                <img className="registration__container-decoration" src={Decoration} alt="fancy interline" />
                <form  className="registration__container-form">
                    <label className="registration__container-label">Email</label>
                    <input type="email"/>
                    <label className="registration__container-label">Hasło</label>
                    <input type="password"/>
                    <label className="registration__container-label">Powtórz hasło</label>
                    <input type="password"/>
                </form>
                <div className="registration__container-buttons">
                    <Link className="registration__container-btn" to="/login">Zaloguj się</Link>
                    <button className="registration__container-btn">Zarejestruj sie</button>
                </div>
            </section>

        </div>
    );
};

export default Login;