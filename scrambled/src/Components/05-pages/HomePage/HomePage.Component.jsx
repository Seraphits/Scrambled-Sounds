import React from "react";
import HeroHome from "../../03-organisms/Static/Hero/HeroHome.Component";
import './HomePage.styles.scss';
import { HomePageContainer } from "./HomePage.styles";

const HomePage = () => {
    return (
        <HomePageContainer>
            <HeroHome />
            <h1>HomePage</h1>
        </HomePageContainer> 
    );
};

export default HomePage;