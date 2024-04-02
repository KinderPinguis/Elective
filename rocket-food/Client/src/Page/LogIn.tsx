import React, { useState } from 'react';
import { Row,Col } from 'antd';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import './LogIn.css';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import AstroBurgerWhite from '../Image/AstroBurgerWhite.png';
import InputPassword from '../Components/PasswordInput';
import CustomInput from '../Components/CustomInput';

function LogIn() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState<{ username: string; password: string }>({ username: '', password: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = () => {
        const errorTextElement = document.getElementById('errorText');

        if (!formData.username || !formData.password) {
            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            const usernameInput = document.getElementsByName('username')[0] as HTMLInputElement;
            const passwordInput = document.getElementsByName('password')[0] as HTMLInputElement;

            if (usernameInput) {
                usernameInput.style.border = '2px solid var(--color-error)';
            }

            if (passwordInput) {
                passwordInput.style.border = '2px solid var(--color-error)';
            }
        } else {
            // Your submission logic here
        }
    };

    const goToCreateAccount = () => {
        navigate('/CreateAccount');
    };

    return (
        <div>
            <header>
                <Header />
            </header>
            <body id="logIn" className="NoSelect">
            <Row wrap={true} align={'middle'} justify={'center'}>
                <img src={AstroBurgerWhite} alt="SignIn" className="RoundedImage ShadowBoxImage" />
            </Row>
            <Row wrap={true} align={'middle'} justify={'center'}>
                <div id="formSignIn">
                    <Row wrap={true} align={'middle'} justify={'center'}>
                        <h1 className="TextPrimary">SIGN IN</h1>
                    </Row>
                    <Row>
                        <p id="errorText">Login Failed : Incorrect email or password</p>
                    </Row>
                    <Row wrap={true} align={'middle'} justify={'start'}>
                        <CustomInput
                            label="Email or mobile phone number"
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </Row>
                    <InputPassword
                        label="Your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <Row className="ButtonLogIn" wrap={true} align={'middle'} justify={'center'}>
                        <Button buttonText="Log in" onClick={onSubmit} />
                    </Row>
                    <Row id="agreeText" wrap={true} align={'middle'} justify={'center'}>
                        <p>
                            By continuing, you agree to the <a className="LinkUnderline" href="/Terms">Term of use</a> and{' '}
                            <a className="LinkUnderline" href="/Privacy">Privacy Policy</a>.
                        </p>
                    </Row>
                    <Row id="optionText" wrap={true} align={'middle'} justify={'start'}>
                        <Col span="12">
                            <a className="LinkUnderline">Other issue with sign in</a>
                        </Col>
                        <Col span="12">
                            <a className="LinkUnderline" style={{ float: 'right' }}>
                                Forget your password
                            </a>
                        </Col>
                    </Row>
                </div>
            </Row>
            <Row id="newText" wrap={true} align={'middle'} justify={'center'}>
                <Col span="7" className="AfterNewText" />
                <Col span="10">
                    <p>New to our community</p>
                </Col>
                <Col span="7" className="AfterNewText" />
            </Row>
            <Row className="ButtonLogIn" wrap={true} align={'middle'} justify={'center'}>
                <Button buttonText="Create an account" onClick={goToCreateAccount} />
            </Row>
            </body>
            <footer>

            </footer>
        </div>
    );
}

export default LogIn;