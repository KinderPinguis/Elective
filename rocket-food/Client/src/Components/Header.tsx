import React from 'react';
import HomeButton from './HomeButton';
import Button from './Button';
import { FaSearch, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { Col, Row } from "antd";
import './Header.css';
import '../Main.css'

const Header: React.FC = () => {
    return (
        <div id="headerDiv">
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col span={5}>
                    <HomeButton/>
                </Col>
                <Col span={2}/>
                <Col span={17}>
                    <div id="navMenu">
                        <nav>
                            <ul>
                                <Row wrap={true} align={"middle"} justify={"center"}>
                                    <Col flex={"auto"} >
                                        <li><a href="#">Why Rocket Food</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Services</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Menu</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#">Contact</a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#"><FaSearch/></a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <li><a href="#"><FaShoppingCart/></a></li>
                                    </Col>
                                    <Col flex={"auto"}>
                                        <Button buttonText="Login" buttonImage={FaSignInAlt}/>
                                    </Col>
                                </Row>
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;