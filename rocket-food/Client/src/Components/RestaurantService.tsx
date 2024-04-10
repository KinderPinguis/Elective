import React from 'react';
import {Col, Row} from "antd";
import './RestaurantService.css';
import Button from "./Button";
import signUp from "../Page/CreateAccount";
import AstroBoba from "../Image/AstroBoba.jpg";
import {FaStar} from "react-icons/fa6";
import RestoIntro from "../Image/AstroPizzaWhite.png";
const RestaurantService: React.FC = () => {
    return (
        <div className="service-container">
            <h2 className="service-heading">Our Services for Restaurant Owners</h2>
            <Row wrap={true} justify={"center"}>
                <Col span={24}>
                    <h1 style={{fontWeight:'bold', fontSize:'72px'}}>
                        Be The Fastest <br/>In Delivering<br/> Your <span id={"Title"}>Food</span>
                    </h1>
                    <Col className="restoservice-container">
                        <Button buttonText={"Get Started"} onClick={signUp}></Button>
                        <Col className={"restoservice-container"}>
                            <img src={AstroBoba} alt= "AstroBoba" style={{width: "60px", height: "60px", borderRadius: "50%", padding: "5px"}}/>
                            <p className={"text-right"}>
                                Our Happy Customer <br/>
                                <Col className={"restoservice-container"}>
                                    <FaStar className={"star-icon"}/> 4,7
                                    <span> (27.4k Review)</span>
                                </Col>
                            </p>
                        </Col>
                    </Col>
                    <p>Our job is filling your tummy with delicious food <br/> and with fast and free delivery</p>
                </Col>
                <Col>
                    <img src={RestoIntro} alt="PizzaMan" className="RoundedImage" id={"RestoIntro"}/>
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8} lg={6}>
                    <div className="service-card">
                        <h3>Online Ordering System</h3>
                        <p>Offer your customers the convenience of ordering online through our seamless ordering system.</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <div className="service-card">
                        <h3>Table Reservation Management</h3>
                        <p>Efficiently manage table reservations and optimize your restaurant's seating capacity.</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <div className="service-card">
                        <h3>Menu Management</h3>
                        <p>Easily update and customize your restaurant's menu items and prices.</p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <div className="service-card">
                        <h3>Customer Feedback System</h3>
                        <p>Collect valuable feedback from your customers to improve your restaurant's service and quality.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RestaurantService;
