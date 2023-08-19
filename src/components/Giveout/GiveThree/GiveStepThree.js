import React from 'react';
import './_giveStepThree.scss';

const GiveStepThree = () => {
    return (
        <section className="third">
            <div className="third__left">
                <h4>Krok 3/4</h4>
                <div className="third__left-inputs">
                    <div className="third__left-location">
                        <h3>Lokalizacja</h3>
                        <div className="third__left-select">
                            <select name="location" id="location-select">
                                <option value="">---Wybierz---</option>
                                <option value="city">Poznań</option>
                                <option value="city">Warszawa</option>
                                <option value="city">Kraków</option>
                                <option value="city">Wrocław</option>
                                <option value="city">Katowice</option>
                            </select>
                        </div>
                    </div>
                    <div className="third__left-group">
                        <h3>Komu chcesz pomóc?</h3>
                        <ul className="group__list">
                            <li className="group__list-element">dzieciom</li>
                            <li className="group__list-element">samotnym matkom</li>
                            <li className="group__list-element">bezdomnym</li>
                            <li className="group__list-element">niepełnosprawnym</li>
                            <li className="group__list-element">osobom starszym</li>
                        </ul>
                    </div>
                    <div className="third__left-optional">
                        <label>Wpisz nazwe konkretnej organizacji(opcjonalnie)</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="firs__left-button">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>
        </section>
    );
};

export default GiveStepThree;
