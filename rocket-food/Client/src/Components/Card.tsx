import React from 'react';
import './Card.css';
import {Col, Row} from "antd";

interface CardProps {
    title: string;
    description : string;
    image: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, description, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <Row>
                <Col span={"13"}>
                    <div className="image-container">
                        <img src={image} alt={title}/>
                        <div className="text-container">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Card;
