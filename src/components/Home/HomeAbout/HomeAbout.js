import React from "react";
import Decoration from "../../../assets/Decoration.svg";
import PeopleImage from "../../../assets/People.jpg"
import Signature from "../../../assets/Signature.svg";
import "./_homeAbout.scss"


const HomeAbout = () => {
    return (
        <div className="about" id="about">
            <div className="about__left">
                <h4>O nas</h4>
                <img className="about__left-decoration" src={Decoration} alt="fancy interline"/>
                <p>Nori grape silver beet broccoli kombu beet<br/>
                    greens fava bean potato quandong celery.<br/>
                    Bunya nuts black-eyed pea prairie turnip leek<br/>
                    lentil turnip greens parsnip.</p>
                <img className="about__left-signature" src={Signature} alt="signature"/>
            </div>
            <div className="about__right">
                <img className="about__right-image" src={PeopleImage} alt="circle of pleople"/>
            </div>

        </div>
    );
};


export default HomeAbout;