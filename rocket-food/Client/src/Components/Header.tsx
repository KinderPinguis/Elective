import React, { useState, useEffect } from 'react';
import HomeButton from './HomeButton';
import Button from './Button';
import { FaSearch, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Col, Row } from "antd";
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    let navigate = useNavigate();
    const [typeUser, setTypeUser] = useState<string | null>(localStorage.getItem('typeUser'));

    useEffect(() => {
        const handleUserTypeChange = () => {
            setTypeUser(localStorage.getItem('typeUser'));
        };

        window.addEventListener('storage', handleUserTypeChange);

        return () => {
            window.removeEventListener('storage', handleUserTypeChange);
        };
    }, []);

    const goToLogIn = () => {
        navigate("/LogIn");
    };

    const goToEditProfil = () => {
        navigate("/EditProfile");
    };

    const logOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("typeUser");
        navigate("/LogIn");
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
                                    {typeUser ?
                                        (
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
