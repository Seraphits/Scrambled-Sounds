import React from "react";
import { NavLink } from "react-router-dom";
// import HeroHome from "../../03-organisms/Static/Hero/HeroHome.Component";
// import './HomePage.styles.scss';

const NavMain = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/languages">Languages</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div> 
    );
};

export default NavMain;