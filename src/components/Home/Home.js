import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeMainWrapper from './HomeMainWrapper/HomeMainWrapper'
import HomeThreeColumns from "./HomeThreeColums/HomeThreeColumns";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeOrganizations from "./HomeOrganisations/HomeOrganizations";
import HomeContact from "./HomeContact/HomeContact";
import HomeFourSteps from "./HomeFourSteps/HomeFourSteps";
import HomeFooter from "./HomeFooter/HomeFooter";



const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeMainWrapper/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeOrganizations/>
            <HomeContact/>
        </div>
    );
};

export default Home;