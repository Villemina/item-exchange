import React from 'react';
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import Decoration from "../../../assets/Decoration.svg";
import './_login.scss'
const Login = () => {
    return (
        <div>
            <HomeHeader/>
            <section className="login__container">
                <h3>Zaloguj się</h3>
                <img className="login__container-decoration" src={Decoration} alt="fancy interline" />
                <form  className="login__container-form">
                    <label className="login__container-label">Email</label>
                    <input type="email"/>
                    <label className="login__container-label">Hasło</label>
                    <input type="password"/>
                </form>
                <div className="login__container-buttons">
                    <button className="login__container-btn">Załóż konto</button>
                    <button className="login__container-btn">Zaloguj sie</button>
                </div>
            </section>
            
        </div>
    );
};

export default Login;