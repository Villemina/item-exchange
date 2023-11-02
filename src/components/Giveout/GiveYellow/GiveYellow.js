import './_giveYellow.scss'
import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const GiveYellow = () => {
    const step = useSelector(state => state.currentStep.currentStep);
    const handleYellow = e => {
        switch (e) {
            case 1:
                return "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać";
            case 2:
                return "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.";
            case 3:
                return "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.";
            case 4:
                return "Podaj adres oraz termin odbioru rzeczy.";
            default:
                return "";
        }
    };

    return (
        <>
            <div className="ribbon">
                <FontAwesomeIcon icon={faInfoCircle} className="ribbon__icon" />
                <div>
                    <h3 className="ribbon__title">Ważne!</h3>
                    <h4 className="ribbon__text">{handleYellow(step)}</h4>
                </div>
            </div>
        </>
    );
};

export default GiveYellow;