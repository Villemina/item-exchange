import React from 'react';
import Decoration from "../../../assets/Decoration.svg";
import ContactImg from "../../../assets/Background-Contact-Form.jpg";
import HomeFooter from "../HomeFooter/HomeFooter";
import './HomeContact.scss'

const HomeContact = () => {
    return (
        <div className="contact" id="contact">
            <img className="contact__image" src={ContactImg} alt="Clothes pile"/>
            <form className="contact__form">
                <h3 className="contact__form-header">Skontaktuj sie z nami</h3>
                <img className="contact__form-decoration" src={Decoration} alt="fancy interline"/>
                <div className="contact__form-container">
                    <div className="contact__form-input">
                        <div className="contact__form-row ">
                            <div className="contact__form-col ">
                                <label>Wpisz swoje imię</label>
                                <input placeholder="Krzysztof" type="text"/>
                            </div>
                            <div className="contact__form-col ">
                                <label>Wpisz swój email</label>
                                <input placeholder="abc@xyz.pl" type="email"/>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form-textarea">
                        <label className="contact__form-text">Wpisz swoją wiadomość</label>
                        <textarea maxLength={120}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <button type="submit" className="contact__form-button">
                        Wyślij
                    </button>
                </div>
                <HomeFooter/>
            </form>
        </div>
    );
};

export default HomeContact;