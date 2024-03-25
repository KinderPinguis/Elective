import React from 'react';
import './HomeButton.css'
import '../Main.css'
import logo from '../Image/AstroBurgerRed.png';

const HomeButton: React.FC = () => {
    return (
        <div id="HomeButton">
            <img src={logo} alt="Home" className="RoundedImage"/>
            <h1>ROCKET FOOD</h1>
        </div>
    );
};

export default HomeButton;