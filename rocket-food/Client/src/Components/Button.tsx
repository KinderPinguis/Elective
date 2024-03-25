import React from 'react';
import './Button.css'
import '../Main.css'
import logo from "../Image/AstroBurgerRed.png";

interface ButtonProps {
    buttonText: string;
}

const Button: React.FC<ButtonProps> = ({buttonText}) => {
    return (
        <div id="buttonStyle">
            <p>{buttonText}</p>
        </div>
    );
};

export default Button;