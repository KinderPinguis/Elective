import React from 'react';
import HomeButton from './HomeButton';
import Button from './Button';
import { FaSearch, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Col, Row } from "antd";
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
    logIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ logIn = true }) => {

    let navigate = useNavigate();

    const goToLogIn = () => {
        navigate("/LogIn");
    };

    const goToEditProfil = () => {
        navigate("/EditProfile");
    };

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div id="headerDiv" className="NoSelect">
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
                                    {logIn ? (
                                        <>
                                        <Col flex={"auto"} className="ButtonEditProfile">
                                            <Button buttonImage={CgProfile} onClick={goToEditProfil}/>
                                        </Col>
                                        <Col flex={"auto"} className="ButtonEditProfile">
                                            <Button buttonImage={FiLogOut} onClick={logOut}/>
                                        </Col>
                                        </>
                                    ) : (
                                        <div>
                                            <Button buttonImage={FaSignInAlt} buttonText="Login" onClick={goToLogIn}/>
                                        </div>
                                    )}
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