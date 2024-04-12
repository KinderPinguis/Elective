import React from 'react';
import {Col, Row} from "antd";
import './DeliveryService.css';
import Button from "./Button";
import signUp from "../Page/CreateAccount";

const DeliveryService: React.FC = () => {
    return (
        <div className="delivery-container">
            <h2 className="delivery-heading">Our Services for Delivery</h2>
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
                <Col className={'bouton-center'}>
                    <Button buttonText={"Get Started"} onClick={signUp}></Button>
                </Col>
            </Row>
        </div>
    );
};

export default DeliveryService;