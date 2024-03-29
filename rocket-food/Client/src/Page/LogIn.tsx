import React, {useState, useRef} from 'react';
import Header from '../Components/Header';
import './LogIn.css';
import Button from '../Components/Button'
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";
import AstroBurgerWhite from "../Image/AstroBurgerWhite.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LogIn() {

    let navigate = useNavigate();

    const [formData, setFormData] = useState<{ username: string; password: string }>({ username: '', password: '' });
    const [passwordHidden, setPasswordHidden] = useState(true);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = () => {
        if(!formData.username)
        {

        }
        else if(!formData.password)
        {

        }
        else
        {

        }
    }

    const onClickHide = () => {
        setPasswordHidden(!passwordHidden);

        if (passwordRef.current) {
            passwordRef.current.type = passwordHidden ? "text" : "password";
        }
    };

    const goToCreateAccount = () => {
        navigate("/CreateAccount");
    };

    return (
        <div>
            <header>
                <Header/>
            </header>
            <body id="logIn" className="NoSelect">
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <img src={AstroBurgerWhite} alt="SignIn" className="RoundedImage ShadowBoxImage"/>
                </Row>
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <div id="formSignIn">
                        <Row wrap={true} align={"middle"} justify={"center"}>
                            <h1 className="TextPrimary">SIGN IN</h1>
                        </Row>
                        <Row wrap={true} align={"middle"} justify={"start"}>
                            <p>Email or mobile phone number</p>
                        </Row>
                        <Row wrap={true} align={"middle"} justify={"center"}>
                            <input name="username" type="text" placeholder="Username" onChange={(e) => handleInputChange(e)}/>
                        </Row>
                        <Row wrap={true} align={"middle"} justify={"start"}>
                            <Col span="12">
                                <p>Your password</p>
                            </Col>
                            <Col span="12" style={{ textAlign: 'right' }}>
                                <div id="hidden" onClick={onClickHide}>
                                    {passwordHidden ? <FaEye /> : <FaEyeSlash />}
                                    <p style={{ marginLeft: '10px' }}>{passwordHidden ? "Show" : "Hide"}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row wrap={true} align={"middle"} justify={"center"}>
                            <input ref={passwordRef} name="password" type="password" placeholder="Password" onChange={(e) => handleInputChange(e)}/>
                        </Row>
                        <Row className="ButtonLogIn" wrap={true} align={"middle"} justify={"center"}>
                            <Button buttonText="Log in" onClick={onSubmit}/>
                        </Row>
                        <Row id="agreeText" wrap={true} align={"middle"} justify={"center"}>
                            <p>By continuing, you agree to the <a href="/Terms">Term of use</a> and <a href="/Privacy">Privacy Policy</a>.</p>
                        </Row>
                        <Row id="optionText" wrap={true} align={"middle"} justify={"start"}>
                            <Col span="12">
                                <a>Other issue whit sign in</a>
                            </Col>
                            <Col span="12">
                                <a style={{ float: 'right'}}>Forget your password</a>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row id="newText" wrap={true} align={"middle"} justify={"center"}>
                    <Col span="7" className="AfterNewText"/>
                    <Col span="10">
                        <p>New to our community</p>
                    </Col>
                    <Col span="7" className="AfterNewText"/>
                </Row>
                <Row className="ButtonLogIn" wrap={true} align={"middle"} justify={"center"}>
                    <Button buttonText="Create an account" onClick={goToCreateAccount}/>
                </Row>
            </body>
        </div>
    );
}

export default LogIn;