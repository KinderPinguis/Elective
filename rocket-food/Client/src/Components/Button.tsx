import React from 'react';
import './Button.css'
import '../Main.css'
import { IconType } from "react-icons";
import { Col, Row } from "antd";

interface ButtonProps {
    buttonText: string;
    buttonImage?: IconType;
}

const Button: React.FC<ButtonProps> = ({ buttonText, buttonImage }) => {
    if (!buttonImage) {
        return (
            <div className="ButtonStyle">
                <p>{buttonText}</p>
            </div>
        );
    } else {
        return (
            <div className="ButtonStyle">
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