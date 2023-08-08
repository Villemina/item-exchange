import React from "react";
import {Link} from "react-router-dom";
import Decoration from './Decoration.svg'
import HomeHeroImage from "./Home-Hero-Image.jpg"
import "./_HomeMainWrapper.scss"

const HomeMainWrapper = () => {
    return (
        <div className="wrapper" id="start">
            <img className="wrapper__image" src={HomeHeroImage} alt="Box with Pc Items" />
            <div className="wrapper__right">
                <h1 className="wrapper__right-header">
                    Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img className="wrapper__decoration" src={Decoration} alt="fancy interline" />
                <div className="wrapper__right-buttons">
                    <ul>
                        <li>
                            <Link className="nav-link" to="/login">
                                <button>
                                    Oddaj <br />rzeczy
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/login">
                                <button>
                                    Zorganizuj <br />zbiórkę
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeMainWrapper;
