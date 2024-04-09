import React from 'react';
import "./RadioButtonImage.css"
import { Col, Row } from "antd";

interface RadioButtonImageProps {
    text: string;
    onClick?: () => void;
    lighted: boolean;
    span: number;
    image: string;
}

const RadioButtonImage: React.FC<RadioButtonImageProps> = ({ text, onClick, lighted, span, image }) => {
    return (
        <Col onClick={onClick} className={lighted ? 'lighted' : ''} span={span}>
            <Row className="RadioButtonImage" wrap={true} align={"middle"} justify={"center"}>
                <img src={image} className="ShadowBoxImage RoundedImage"/>
            </Row>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <h3>{text}</h3>
            </Row>
        </Col>
    );
};

export default RadioButtonImage;
