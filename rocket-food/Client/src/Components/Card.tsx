import React from 'react';
import './Card.css';
interface CardProps {
    title: string;
    imageUrl: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, link }) => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt={title} />
                <div className="text-container">
                    <h2>{title}</h2>
                    <a href={link}>Order Now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
