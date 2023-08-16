import React, {useEffect, useState} from 'react';
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import Decoration from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import './_login.scss'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [submitTry, setSubmitTry] = useState(false);
    const [validated, setValidated] = useState(false);
    const redBar = {borderBottom: "1px solid #D8000C"};
    const blackBar = {borderBottom: "1px solid   #3C3C3C"};

    const handleChange = (e) => {
        const {id, value} = e.target;

        if (id === 'passwordInput') {
            setPassword(value);
            setPasswordError(false);
        } else if (id === 'emailInput') {
            setEmail(value);
            setEmailError(false);
        }
    };

        const validateEmail = e => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    };

    const validatePassword = e => {
        let reg = /^\S+$/g;
        return reg.test(e) && e.length > 6;
    }

    const handleClick = (e) => {
        e.preventDefault();
        const emailValidatiton = validateEmail(email);
        const passwordValidation = validatePassword(password.trim());
        setEmailError(!emailValidatiton);
        setPasswordError(!passwordValidation);
        if (submitTry === false) {
            setSubmitTry(true);
        }
        if (emailValidatiton && passwordValidation) {
            {
                const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
                const data = {
                    email: email,
                    password: password
                };
                try {
                    const response = fetch(url, {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            setValidated(true);
                            setSubmitTry(false);
                            setEmail("");
                            setPassword("");
                        });
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        } else {
            setValidated(false);
        }
    };

    useEffect(() => {
        const emailValidatiton = validateEmail(email);
        const passwordValidation = validatePassword(password.trim());
        if (submitTry === true) {
            setEmailError(!emailValidatiton);
            setPasswordError(!passwordValidation);
        }
    }, [email, password]);


    return (
        <div>
            <HomeHeader/>
                    <section className="login__container">
                        <h3>Zaloguj się</h3>
                        <img className="login__container-decoration" src={Decoration} alt="fancy interline"/>
                        <form className="login__container-form">
                            <label className="login__container-label">Email</label>
                            <input type="email"
                                   id="emailInput"
                                   className="login__form-input"
                                   value={email}
                                   onChange={handleChange}
                                   style={emailError ? redBar : blackBar}/>
                            <p className="login__form-error"
                               style={emailError ? {opacity: "1"} : {opacity: 0}}
                            >
                                Podany e-mail jest nieprawidłowy!
                            </p>
                            <label className="login__container-label">Hasło</label>
                            <input type="password"
                                   id="passwordInput"
                                   className="login__form-input"
                                   value={password}
                                   onChange={handleChange}
                                   style={passwordError ? redBar : blackBar}></input>
                            <p
                                className="login__form-error"
                                style={passwordError ? {opacity: "1"} : {opacity: 0}}
                            >
                                Podane hasło jest nieprawidłowe!
                            </p>
                        </form>
                        <div className="login__container-buttons">
                            <Link className="login__container-btn" to="/registration">Załóż konto</Link>
                            <button type="submit"
                                    className="login__container-btn"
                                    onClick={handleClick}>Zaloguj się</button>
                        </div>
                    </section>
                </div>
                );

};

export default Login;