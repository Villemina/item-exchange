import React, { useEffect, useState } from 'react';
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import Decoration from "../../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import './_registration.scss'

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordRepeatError, setPasswordRepeatError] = useState(false);
    const [submitTry, setSubmitTry] = useState(false);
    const [validated, setValidated] = useState(false);
    const redBar = { borderBottom: "1px solid #D8000C" };
    const blackBar = { borderBottom: "1px solid #3C3C3C" };


    const handleChange = (e) => {
        const {id, value} = e.target;

        if (id === 'passwordInput') {
            setPassword(value);
            setPasswordError(false);
        } else if (id === 'emailInput') {
            setEmail(value);
            setEmailError(false);

        } else if (id === 'passwordRepeatInput') {
            setPasswordRepeat(value);
            setPasswordRepeatError(false);
        }
    };

    const validateEmail = e => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    };

    const validatePassword = password => {
        let reg = /^\S+$/g;
        return reg.test(password) && password.length > 6;
    };

    const passwordsMatch = (password, repeatPassword) => {
        return password === repeatPassword;
    };

    const validatePasswordRepeat = repeatPassword => {
        return validatePassword(repeatPassword);
    };

    const handleClick = e => {
        e.preventDefault();
        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(password.trim());
        const passwordRepeatValidation = validatePasswordRepeat(passwordRepeat.trim());


        const passwordsMatch = password === passwordRepeat;

        setEmailError(!emailValidation);
        setPasswordError(!passwordValidation);
        setPasswordRepeatError(!passwordRepeatValidation || !passwordsMatch);

        if (submitTry === false) {
            setSubmitTry(true);
        }

        if (emailValidation && passwordValidation && passwordRepeatValidation && passwordsMatch) {
            setValidated(true);
            setSubmitTry(false);
            setEmail("");
            setPassword("");
            setPasswordRepeat("");
        } else {
            setValidated(false);
        }
    };
    useEffect(() => {
        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(password.trim());

        if (submitTry === true) {
            setEmailError(!emailValidation);
            setPasswordError(!passwordValidation);
        }
    }, [email, password]);

    return (
        <div>
            <HomeHeader />
            <section className="registration__container">
                <h3>Załóż konto</h3>
                <img className="registration__container-decoration" src={Decoration} alt="fancy interline" />
                <form className="registration__container-form">
                    <label className="registration__container-label">Email</label>
                    <input
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={handleChange}
                        style={emailError ? redBar : blackBar}
                    />
                    {emailError && <p className="registration__form-error">Podany e-mail jest nieprawidłowy!</p>}

                    <label className="registration__container-label">Hasło</label>
                    <input
                        type="password"
                        id="passwordInput"
                        value={password}
                        onChange={handleChange}
                        style={passwordError ? redBar : blackBar}
                    />
                    {passwordError && <p className="registration__form-error">Podane hasło jest za krótkie!</p>}

                    <label className="registration__container-label">Powtórz hasło</label>
                    <input
                        type="password"
                        id="passwordRepeatInput"
                        value={passwordRepeat}
                        onChange={handleChange}
                        style={passwordRepeatError ? redBar : blackBar}
                    />
                    {passwordRepeatError && <p className="registration__form-error">Hasła się nie zgadzają!</p>}
                </form>
                <div className="registration__container-buttons">
                    <Link className="registration__container-btn" to="/login">Zaloguj się</Link>
                    <button className="registration__container-btn" onClick={handleClick}>Załóż konto</button>
                </div>
            </section>
        </div>
    );
};

export default Registration;
