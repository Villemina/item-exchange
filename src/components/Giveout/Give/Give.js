import React from 'react';
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import GiveMain from "../GiveMain/GiveMain";
import GiveYellow from "../GiveYellow/GiveYellow";
import HomeContact from "../../Home/HomeContact/HomeContact";
import HomeFooter from "../../Home/HomeFooter/HomeFooter";
import GiveStepOne from "../GiveOne/GiveStepOne";
import GiveStepTwo from "../GiveTwo/GiveStepTwo";
import GiveStepThree from "../GiveThree/GiveStepThree";
import GiveThankYou from "../GiveThankYou/GiveThankYou";
import GiveStepFour from "../GiveStepFour/GiveStepFour";

const Give = () => {
    return (
        <div>
            <HomeHeader/>
            <GiveMain/>
            <GiveYellow/>
            <GiveStepOne/>
            <GiveStepTwo/>
            <GiveStepThree/>
            <GiveStepFour/>
            <GiveThankYou/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    );
};

export default Give;