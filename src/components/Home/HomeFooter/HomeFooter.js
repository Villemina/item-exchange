import React from 'react';
import facebookIcon from "../../../assets/Facebook.svg";
import instagramIcon from "../../../assets/Instagram.svg";
import './_HomeFooter.scss'

const HomeFooter = () => {
    return (
        <div className="footer">
            <div className="footer__empty"></div>
            <h4>Copyright by Coders Lab</h4>
            <div className="footer__icons">
                <img src={facebookIcon} alt="facebook"/>
                <img src={instagramIcon} alt="instagram"/>
            </div>
        </div>
    );
};

export default HomeFooter;