import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeMainWrapper from './HomeMainWrapper/HomeMainWrapper'
import HomeThreeColumns from "./HomeThreeColums/HomeThreeColums";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeOrganizations from "./HomeOrganisations/HomeOrganizations";
import HomeContact from "./HomeContact/HomeContact";



const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeMainWrapper/>
            <HomeThreeColumns/>
            <HomeAbout/>
            <HomeOrganizations/>
            <HomeContact/>
        </div>
    );
};

export default Home;