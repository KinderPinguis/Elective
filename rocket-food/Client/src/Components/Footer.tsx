import React from 'react';
import HomeButton from './HomeButton';
import './Footer.css';
import '../Main.css'
import Button from './Button';
import {FaArrowRight} from "react-icons/fa";
import {Col, Row} from "antd";


const Footer: React.FC = () => {
    return (
        <footer>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col span={5}>
                    <HomeButton/>
                </Col>
                <Col span={2}/>
                <Col span={17}>
                    <div id="footerMenu">
                        <nav>
                            <Row wrap={true} align={"middle"} justify={"center"}>
                                <ul id="AboutMenu">
                                    <Row wrap={true} align={"middle"} justify={"center"}>
                                        <Col flex={"auto"}>
                                            <h3>About</h3>
                                        </Col>
                                        <Col flex={"auto"}>
                                            <li><a href="#">About us</a></li>
                                        </Col>
                                        <Col flex={"auto"}>
                                            <li><a href="#">Features</a></li>
                                        </Col>
                                        <Col flex={"auto"}>
                                            <li><a href="#">News</a></li>
                                        </Col>
                                        <Col flex={"auto"}>
                                            <li><a href="#">Menu</a></li>
                                        </Col>
                                    </Row>
                                </ul>
                                <ul id="CompagnyMenu">
                                    <Row wrap={true} align={"middle"} justify={"center"}>
                                        <Col flex={"auto"}>
                                            <h3>Compagny</h3>
                                            <li><a href="#">Why Rocket Food ?</a></li>
                                            <li><a href="#">Partner With Us</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </Col>
                                    </Row>
                                </ul>
                                <ul id="SupportMenu">
                                    <h3>Support</h3>
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                </ul>
                                <ul id="GetMenu">
                                    <h3>Get in Touch</h3>
                                    <p>Question or feedback?</p>
                                    <p>We'd love to hear from you</p>
                                    <Button buttonText={"Email Address"} /*buttonImage={FaArrowRight}*//>
                                </ul>
                            </Row>
                        </nav>
                    </div>
                </Col>
            </Row>
        </footer>
    )
        ;
};

export default Footer;