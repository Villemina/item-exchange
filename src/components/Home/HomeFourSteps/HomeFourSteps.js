import React from "react";
import {Link} from "react-scroll";
import Decoration from "../../../assets/Decoration.svg";
import IconOne from "../../../assets/Icon-1.svg";
import IconTwo from "../../../assets/Icon-2.svg";
import IconThree from "../../../assets/Icon-3.svg";
import IconFour from "../../../assets/Icon-4.svg";
import "./_homeFourSteps.scss"


const HomeFourSteps = () => {
    return (
        <div className="steps" id="what-about">
            <div className="steps__upper">
                <h3>Wystarczą 4 proste kroki</h3>
                <img className="wrapper__decoration" src={Decoration} alt="fancy interline"/>
            </div>
            <div className="steps__bottom">
                <div className="steps__bottom-box">
                    <img className="steps__image" src={IconOne} alt="Clothes icon"/>
                    <h4>Wybierz rzeczy</h4>
                    <hr style={{width: '60px'}}/>
                    <p>ubrania, zabawki,<br/> sprzęt i inne</p>
                </div>
                <div className="steps__bottom-box">
                    <img className="steps__image" src={IconTwo} alt="Shopping bag icon"/>
                    <h4>Spakuj je</h4>
                    <hr style={{width: '60px'}}/>
                    <p>skorzystaj z<br/> worków na śmieci</p>
                </div>
                <div className="steps__bottom-box">
                    <img className="steps__image" src={IconThree} alt="magnifying glass icon"/>
                    <h4>Zdecyduj komu <br/>chcesz pomóc</h4>
                    <hr style={{width: '60px'}}/>
                    <p>wybierz zaufane<br/> miejsce</p>
                </div>
                <div className="steps__bottom-box">
                    <img className="steps__image" src={IconFour} alt="reuse icon"/>
                    <h4>Zamów kuriera</h4>
                    <hr style={{width: '60px'}}/>
                    <p>kurier przyjedzie<br/> w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps__button">
                <Link className="nav-link" to="/login">
                    <button>
                        Oddaj<br/>rzeczy
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default HomeFourSteps;