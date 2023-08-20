import React from 'react';
import './_giveTwo.scss';

const GiveStepTwo = () => {
    return (
        <section className="second">
            <div className="second__left">
                <h4>Krok 2/4</h4>
                <div className="second__left-inputs">
                    <h3>Podaj liczbę 60l worków, w których spakowałeś rzeczy:</h3>
                    <div className="seconds__left-bags">
                        <label htmlFor="bag-select">liczba 60l worków:</label>
                        <select name="Bags" id="bag-select">
                            <option value="">---Wybierz---</option>
                            <option value="1">1 </option>
                            <option value="2">2 </option>
                            <option value="3">3 </option>
                            <option value="4">4 </option>
                            <option value="5">5 </option>

                        </select>
                    </div>
                </div>
                <div className="second__left-button">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>
        </section>
    );
};

export default GiveStepTwo;
