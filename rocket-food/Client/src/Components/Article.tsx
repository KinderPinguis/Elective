import React from 'react';
import './Article.css';
import {Col, Row} from "antd";
import {IconType} from "react-icons";

interface CardProps {
    title: string;
    image: string;
    price: number;
    money: string;
    cartImage: IconType;
}

const Card: React.FC<CardProps> = ({title, image, price, money, cartImage}) => {
    const limitedTitle = title.slice(0, 8)
    const limitedPrice = price.toFixed(2)

    return (
        <div className="Article">
            <Row>
                <img src={image} alt={title}/>
            </Row>
            <div id={"Text"}>
                <Row>
                    <Col span={"19"}>
                        <div>
                            <div>
                                <h2>{limitedTitle}</h2>
                                <h3>
                                    {limitedPrice}{money}
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div id={"Cart"}>
                            {React.createElement(cartImage)}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Card;
