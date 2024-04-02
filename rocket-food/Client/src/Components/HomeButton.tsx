import React from 'react';
import './HomeButton.css'
import '../Main.css'
import logo from '../Image/AstroBurgerRed.png';
import {useNavigate} from "react-router-dom";

const HomeButton: React.FC = () => {

    let navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div id="HomeButton" className="NoSelect" onClick={goToHome}>
            <img src={logo} alt="Home" className="RoundedImage"/>
            <h1>ROCKET FOOD</h1>
        </div>
    );
};

export default HomeButton;