import React from 'react';
import './Button.css'
import '../Main.css'
import { IconType } from "react-icons";
import { Col, Row } from "antd";

interface ButtonProps {
    onClick: () => void;
    buttonText?: string;
    buttonImage?: IconType;
}

const Button: React.FC<ButtonProps> = ({ buttonText, buttonImage, onClick }) => {
    if (!buttonImage) {
        return (
            <div className="ButtonStyle NoSelect" onClick={onClick}>
                <p>{buttonText}</p>
            </div>
        );
    }
    else if(!buttonText)
    {
        return (
            <div className="ButtonStyle NoSelect" onClick={onClick}>
                {React.createElement(buttonImage)}
            </div>
        );
    }
    else {
        return (
            <div className="ButtonStyle NoSelect" onClick={onClick}>
                <Row justify={"center"} align={"middle"}>
                    <Col flex={"auto"}>
                        {React.createElement(buttonImage)}
                    </Col>
                    <Col style={{ width: '10px' }}/>
                    <Col flex={"auto"}>
                        <p id="image">{buttonText}</p>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default Button;