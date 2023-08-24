import React, {useState} from 'react';
import GiveMainImg from "../../../assets/Form-Hero-Image.jpg";
import Decoration from "../../../assets/Decoration.svg";
import './_giveMain.scss';
import {useSelector} from "react-redux";

const GiveMain = () => {
    const [steps] = useState([1, 2, 3, 4, 5]);
    const step = useSelector(e => e.currentStep.currentStep);
    return (
        <section className="main">
            <div className="main__left">
                <img className="main__left-image" src={GiveMainImg} alt="Green Clothes"/>
            </div>
            <div className="main__right">
                <div className="main__right-header">
                    <h2>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h2>
                    <img className="contact__form-decoration" src={Decoration} alt="fancy interline"/>
                    <h3>Wystarczą 4 proste kroki</h3>
                </div>
                <div className="main__right-boxes">
                    <div className="main__right-square">
                        <div className="main__right-text">
                            <span >1</span>
                            <p>Wybierz rzeczy</p>
                        </div>
                    </div>

                <div className="main__right-square">
                    <div className="main__right-text">
                        <span >2</span>
                        <p>Spakuj je w worki</p>
                    </div>
                </div>
                <div className="main__right-square">
                    <div className="main__right-text">
                        <span >3</span>
                        <p>Wybierz Fundację</p>
                    </div>
                </div>
                <div className="main__right-square">
                    <div className="main__right-text">
                        <span >4</span>
                        <p>Zamów Kuriera</p>
                    </div>
                    {steps.map(e => {
                        if (e === step) {
                            return (
                                <div
                                    key={e + "n"}
                                    className="give-main-min__steps-square give-main-min__steps-square--active"
                                >
                                    {e === 5 ? <FontAwesomeIcon icon={faCheck} /> : e}
                                </div>
                            );
                        } else if (e < step) {
                            return (
                                <div
                                    key={e + "n"}
                                    className="give-main-min__steps-square give-main-min__steps-square--visited"
                                >
                                    {e === 5 ? <FontAwesomeIcon icon={faCheck} /> : e}
                                </div>
                            );
                        } else {
                            return (
                                <div key={e + "n"} className="give-main-min__steps-square">
                                    {e === 5 ? <FontAwesomeIcon icon={faCheck} /> : e}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            </div>
        </section>
);
};

export default GiveMain;