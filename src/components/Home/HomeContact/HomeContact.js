import React from "react";
import { useState, useEffect } from "react";
import Decoration from "../../../assets/Decoration.svg";
import ContactImg from "../../../assets/Background-Contact-Form.jpg";
import './HomeContact.scss'
const HomeContact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [submitTry, setSubmitTry] = useState(false);
    const [validated, setValidated] = useState(false);
    const redBar = { borderBottom: "1px solid #D8000C" };
    const blackBar = { borderBottom: "1px solid   #3C3C3C" };


        const handleChange = (e) => {
            const { id, value } = e.target;

            if (id === 'textInput') {
                setName(value);
                setNameError(false);
            } else if (id === 'emailInput') {
                setEmail(value);
                setEmailError(false);
            } else if (id === 'textarea') {
                setMessage(value);
                setMessageError(false);
            }
    };
    const validateEmail = e => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    };

    const validateName = e => {
        let reg = /^\S+$/g;
        return reg.test(e);
    };
    const validateMessage = e => {
        return e.length > 120;

    };

    const handleClick = (e) => {
        e.preventDefault();
        const emailValidatiton = validateEmail(email);
        const nameValidation = validateName(name.trim());
        const messageValidation = validateMessage(message);
        setEmailError(!emailValidatiton);
        setNameError(!nameValidation);
        setMessageError(!messageValidation);
        if (submitTry === false) {
            setSubmitTry(true);
        }
        if (emailValidatiton && nameValidation && messageValidation) {
            {
                const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
                const data = {
                    name: name,
                    email: email,
                    message: message
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
                            setName("");
                            setMessage("");
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
        const nameValidation = validateName(name.trim());
        const messageValidation = validateMessage(message);
        if (submitTry === true) {
            setEmailError(!emailValidatiton);
            setNameError(!nameValidation);
            setMessageError(!messageValidation);
        }
    }, [email, name, message]);

    return (
        <div className="contact" id="contact">
            <img className="contact__image" src={ContactImg} alt="Clothes pile"/>
            <div className="contact__form-container">
                <h3 className="contact__form-header">Skontaktuj sie z nami</h3>
                <img className="contact__form-decoration" src={Decoration} alt="fancy interline"/>
                <p
                    className="home__contact-success"
                    style={validated ? { opacity: "1" } : { opacity: 0 }}
                >
                    Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.
                </p>
                <form className="contact__form">
                    <div className="contact__form-personal">
                        <div className="contact__form-row">
                            <label >Wpisz swoje imię</label>
                            <input placeholder="Krzysztof"
                                type="text"
                                id="textInput"
                                className="contact__form-input"
                                value={name}
                                onChange={handleChange}
                                style={nameError ? redBar : blackBar}
                            ></input>
                            <p
                                className="contact__form-error"
                                style={nameError ? { opacity: "1" } : { opacity: 0 }}
                            >
                                Podane imię jest nieprawidłowe!
                            </p>
                        </div>
                        <div className="contact__form-row">
                            <label >Wpisz swój email</label>
                            <input placeholder="abc@xyz.pl"
                                type="email"
                                id="emailInput"
                                value={email}
                                onChange={handleChange}
                                className="contact__form-input"
                                style={emailError ? redBar : blackBar}
                            ></input>
                            <p
                                className="contact__form-error"
                                style={emailError ? { opacity: "1" } : { opacity: 0 }}
                            >
                                Podany e-mail jest nieprawidłowy!
                            </p>
                        </div>
                    </div>
                    <div className="contact__form-textarea">
                        <label>
                            {" "}
                            Wpisz swoją wiadomość
                        </label>
                        <textarea  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            className="contact-form__textarea"
                            id="textarea"
                            value={message}
                            onChange={handleChange}
                            style={messageError ? redBar : blackBar}
                        ></textarea>
                        <p
                            className="contact__form-error"
                            style={messageError ? { opacity: "1" } : { opacity: 0 }}
                        >
                            Wiadomość musi mieć conajmniej 120 znaków!
                        </p>
                    </div>
                    <div className="contact__form-button">
                        <button
                            type="submit"
                            className="contact-form__submit"
                            onClick={handleClick}
                        >
                            Wyślij
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default HomeContact;