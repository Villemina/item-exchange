import React from 'react';
import Decoration from "../../../assets/Decoration.svg";
import './_giveThankYou.scss';

const GiveThankYou = () => {
    return (
        <section className="thanks">
            <div className="thanks__left">
                <h2>Dziękujemy za przesłanie formularza<br/> Na maila prześlemy wszelkie<br/> informacje o odbiorze.</h2>
                <img className="thanks__left-decoration" src={Decoration} alt="fancy interline"/>
            </div>
        </section>
    );
};

export default GiveThankYou;
