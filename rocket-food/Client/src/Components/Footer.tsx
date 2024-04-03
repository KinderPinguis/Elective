import React from 'react';
import HomeButton from './HomeButton';
import './Footer.css';
import '../Main.css'
import Button from './Button';
import {FaArrowRight, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";


const Footer: React.FC = () => {
    let navigate = useNavigate();
    const goToInsta = () => {
        navigate("https://www.instagram.com");
    };
    const goToFacebook = () => {
        navigate("https://www.facebook.com");
    };
    const goToTwitter = () => {
        navigate("https://www.twitter.com");
    };
    const goToContact = () => {
        navigate("/Contact");
    };
    return (
        <footer>
            <Row wrap={true} justify={"center"}>
                <div id="footerHome">
                    <Row wrap={true} justify={"center"}>
                        <HomeButton/>
                    </Row>
                    <Row wrap={true} justify={"center"} id={"buttonRes"}>
                        <Button buttonImage={FaInstagram} onClick={goToInsta}/>
                        <Button buttonImage={FaFacebook} onClick={goToFacebook}/>
                        <Button buttonImage={FaTwitter} onClick={goToTwitter}/>
                    </Row>
                </div>
                <Col span={15}>
                    <div id="footerMenu">
                        <nav>
                            <Row wrap={true} align={"top"} justify={"start"}>
                                <ul id="AboutMenu">
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
                                </ul>
                                <ul id="CompagnyMenu">
                                    <Col flex={"auto"}>
                                        <h3>Compagny</h3>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Why Rocket Food ?</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Partner With Us</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">FAQ</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Blog</a></li>
                                    </Col>
                                </ul>
                                <ul id="SupportMenu">
                                    <Col flex={"auto"}>
                                        <h3>Support</h3>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Account</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Support Center</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Feedback</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Contact Us</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Accessibility</a></li>
                                    </Col>
                                </ul>
                                <ul id="GetMenu">
                                    <Col flex={"auto"} pull={0}>
                                        <h3>Get in Touch</h3>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <p>Question or feedback?</p>
                                        <p>We'd love to hear from you</p>
                                        <Button buttonText={"Email Address"} buttonImage={FaArrowRight} onClick={goToContact}/>
                                    </Col>
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