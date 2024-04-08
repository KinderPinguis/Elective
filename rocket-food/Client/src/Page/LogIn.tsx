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
import ErrorText from "../Components/ErrorText";
import axios from 'axios';

function LogIn() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState<{ email: string; password: string }>({ email: '', password: '' });
    const [errorTitle, setErrorTitle] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async () => {
        if (!formData.email || !formData.password) {
            setErrorTitle("Login Failed");
            setErrorText("Please enter your email and password");
            const errorTextElement = document.getElementById('errorText');

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            const emailInput = document.getElementsByName('email')[0] as HTMLInputElement;
            const passwordInput = document.getElementsByName('password')[0] as HTMLInputElement;

            if (emailInput) {
                emailInput.classList.add('ErrorInput');
            }

            if (passwordInput) {
                emailInput.classList.add('ErrorInput');
            }
        }
        else
        {
            const response = await axios.post('http://localhost:3000/api/login', {
                email: formData.email,
                password: formData.password
            }).then(response => {
                const { accessToken, refreshToken, userId, typeUser } = response.data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('userId', userId);
                localStorage.setItem('typeUser', typeUser);
                navigate('/');
            })
            .catch(error => {
                const errorTextElement = document.getElementById('errorText');
                if (errorTextElement) {
                    errorTextElement.style.display = 'block';
                }
                setErrorTitle("Login Failed");
                setErrorText(error.response.data.message);
            });
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
                    <ErrorText errorTitle={errorTitle} errorText={errorText}/>
                    <Row wrap={true} align={'middle'} justify={'start'}>
                        <CustomInput
                            label="Email or mobile phone number"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    onSubmit();
                                }
                            }}
                        />
                    </Row>
                    <InputPassword
                        label="Your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                onSubmit();
                            }
                        }}
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
                <Footer/>
            </footer>
        </div>
    );
}

export default LogIn;