import React from 'react';
import GiveBearImage from "../../../assets/Background-Form.jpg";
import './_giveStepOne.scss';

const GiveStepOne = () => {
    return (
        <section className="first">
            <div className="first__left">
                <h4>Krok 1/4</h4>
                <div className="first__left-inputs">
                    <h3>Zaznacz co chcesz oddać:</h3>
                    <label className="radio-container">
                        <input type="radio" value="reuse" name="donation" className="square-radio" />
                        <span className="checkmark"></span>
                        ubrania, które nadają się do ponownego użycia
                    </label>

                    <label className="radio-container">
                        <input type="radio" value="damaged" name="donation" className="square-radio" />
                        <span className="checkmark"></span>
                        ubrania, do wyrzucenia
                    </label>

                    <label className="radio-container">
                        <input type="radio" value="toys" name="donation" className="square-radio" />
                        <span className="checkmark"></span>
                        zabawki
                    </label>

                    <label className="radio-container">
                        <input type="radio" value="books" name="donation" className="square-radio" />
                        <span className="checkmark"></span>
                        książki
                    </label>

                    <label className="radio-container">
                        <input type="radio" value="other" name="donation" className="square-radio" />
                        <span className="checkmark"></span>
                        Inne
                    </label>
                </div>
                <button>Dalej</button>
            </div>
            <div className="first__right">
                <img className="first__right-image" src={GiveBearImage} alt="Teddy Bear" />
            </div>
        </section>
    );
};

export default GiveStepOne;
