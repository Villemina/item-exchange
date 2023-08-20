import React from "react";
import './_giveStepFour.scss';

const GiveStepFour = () => {
    return (
        <section className="fourth">
            <div className="fourth__left">
                <h4>Krok 4/4</h4>
                <div className="fourth__left-inputs">
                    <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                    <div className="fourth__left-data">
                        <div className="left__col">
                            <h3>Adres odbioru:</h3>
                            <div className="left__col-cell">
                                <label>Ulica</label>
                                <input type="text"/>
                            </div>
                            <div className="left__col-cell">
                                <label>Miasto</label>
                                <input type="text"/>
                            </div>
                            <div className="left__col-cell">
                                <label>Kod <br/>pocztowy</label>
                                <input type="text"/>
                            </div>
                            <div className="left__col-cell">
                                <label>Numer <br/>telefonu</label>
                                <input type="tel"/>
                            </div>
                        </div>
                        <div className="right__col">
                            <h3>Termin odbioru:</h3>
                            <div className="right__col-cell">
                                <label>Data</label>
                                <input type="text"/>
                            </div>
                            <div className="right__col-cell">
                                <label>Godzina</label>
                                <input type="text"/>
                            </div>
                            <div className="right__col-cell">
                                <label>Uwagi dla kuriera</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div/>
                    </div>
                </div>
                <div className="second__left-button">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>
        </section>
    );}

export default GiveStepFour