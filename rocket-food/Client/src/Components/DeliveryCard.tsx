import React from 'react';
import './DeliverCard.css';
import logo from '../Image/AstroBurgerRed.png';
import { RiPinDistanceLine } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";

interface DeliverCardProps {
    onClick: () => void;
    restaurant: string;
    address: string;
    price: string;
    status: string;
    distance: string;
    time: string;
}

const DeliverCard: React.FC<DeliverCardProps> = ({ onClick, restaurant, address, price, status, distance, time }) => {

    return (
        <div className="DeliveryCard" onClick={onClick}>
            <a className="hero-image-container">
                <img className="hero-image" src={logo}/>
            </a>
            <main className="main-content">
                <h1><a>{restaurant}</a></h1>
                <p>{address}</p>
                <div className="flex-row">
                    <div className="coin-base">
                        <p className="small-image"><FaHandHoldingDollar/></p>
                        <p>{price}</p>
                    </div>
                    <div className="time-left">
                        <p className="small-image"><FaHandHoldingDollar/></p>
                        <p>{status}</p>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="coin-base">
                        <p className="small-image"><RiPinDistanceLine/></p>
                        <p>{distance}</p>
                    </div>
                    <div className="time-left">
                        <p className="small-image"><MdOutlineTimer/></p>
                        <p>{time}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DeliverCard;