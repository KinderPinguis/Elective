import React, {useState, useRef} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./LogInInfo.css"
import { useNavigate } from 'react-router-dom';
import CustomInput from "./CustomInput";
import InputPassword from "./PasswordInput";
import NumberIconH2 from "./NumberIconH2";
import {FormAllData} from '../CustomTypes'
import ErrorText from "./ErrorText";
import {toggleErrorClass} from '../MainFonction'
import axios from "axios";

interface LogInInfoProps {
    formAllData: FormAllData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: FormAllData) => void;
}

const ContactInfo: React.FC<LogInInfoProps> = ({ formAllData, changeStep, handleFormDataChange }) => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState<{ email: string; confirmEmail: string; password: string; confirmPassword: string }>
    ({
        email: formAllData.email,
        confirmEmail: formAllData.confirmEmail,
        password: formAllData.password,
        confirmPassword: formAllData.confirmPassword,
    });

    const numberIconRef = useRef<HTMLDivElement>(null);

    const [errorTitle, setErrorTitle] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const firstStep = () => {
        save();
        changeStep(0);
    };

    const prevStep = () => {
        save();
        changeStep(1);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onSubmit = async () => {
        let newErrorTitle = "";
        let newErrorText = "";

        const errorTextElement = document.getElementById('errorText');
        const emailInput = document.getElementsByName('email')[0] as HTMLInputElement;
        const confirmEmailInput = document.getElementsByName('confirmEmail')[0] as HTMLInputElement;
        const passwordInput = document.getElementsByName('password')[0] as HTMLInputElement;
        const confirmPasswordInput = document.getElementsByName('confirmPassword')[0] as HTMLInputElement;

        if(!formData.email || !formData.confirmEmail || !formData.password || !formData.confirmPassword)
        {
            newErrorTitle = "Empty fields"
            newErrorText = "Some required fields are not complete";

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            toggleErrorClass(emailInput, emailInput.value);
            toggleErrorClass(confirmEmailInput, confirmEmailInput.value);
            toggleErrorClass(passwordInput, passwordInput.value);
            toggleErrorClass(confirmPasswordInput, confirmPasswordInput.value);
        }

        else if (formData.email !== formData.confirmEmail && formData.password !== formData.confirmPassword)
        {
            newErrorTitle = "Email and Password mismatch";
            newErrorText = "Email addresses and passwords do not match";

            emailInput.classList.add('ErrorInput');
            confirmEmailInput.classList.add('ErrorInput');
            passwordInput.classList.add('ErrorInput');
            confirmPasswordInput.classList.add('ErrorInput');
        }

        else if (formData.email !== formData.confirmEmail)
        {
            newErrorTitle = "Email mismatch";
            newErrorText = "Email addresses do not match";

            emailInput.classList.add('ErrorInput');
            confirmEmailInput.classList.add('ErrorInput');
            passwordInput.classList.remove('ErrorInput');
            confirmPasswordInput.classList.remove('ErrorInput');
        }

        else if (formData.password !== formData.confirmPassword)
        {
            newErrorTitle = "Password mismatch";
            newErrorText = "Passwords do not match";

            emailInput.classList.remove('ErrorInput');
            confirmEmailInput.classList.remove('ErrorInput');
            passwordInput.classList.add('ErrorInput');
            confirmPasswordInput.classList.add('ErrorInput');
        }

        else if (!isValidEmail(formData.email))
        {
            newErrorTitle = "Invalid Email";
            newErrorText = "Please enter a valid email address";

            emailInput.classList.add('ErrorInput');
            confirmEmailInput.classList.add('ErrorInput');
            passwordInput.classList.remove('ErrorInput');
            confirmPasswordInput.classList.remove('ErrorInput');
        }

        else if (formData.password.length < 10) {
            newErrorTitle = "Invalid Password";
            newErrorText = "Password must be at least 10 characters long";

            emailInput.classList.remove('ErrorInput');
            confirmEmailInput.classList.remove('ErrorInput');
            passwordInput.classList.add('ErrorInput');
            confirmPasswordInput.classList.add('ErrorInput');
        }

        else
        {
            save();

            const response = await axios.post('http://localhost:3000/api/users', {
                firstName: formAllData.firstName,
                middleName: formAllData.middleName,
                lastName: formAllData.lastName,
                gender: formAllData.gender,
                birthday: new Date(formAllData.year, formAllData.month, formAllData.day),
                streetAddress: formAllData.streetAddress,
                city: formAllData.city,
                country: formAllData.country,
                tel: formAllData.tel,
                email: formAllData.email,
                password: formAllData.password
            }).then(response => {
                const token = response.data.accessToken;
                localStorage.setItem('token', token);
                navigate('/HomeLogIn');
            })
                .catch(error => {
                    console.error('Error create account:', error);
                });
        }

        setErrorTitle(newErrorTitle);
        setErrorText(newErrorText);

        if (numberIconRef.current) {
            numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const save = () => {
        formAllData.email = formData.email;
        formAllData.confirmEmail = formData.confirmEmail;
        formAllData.password = formData.password;
        formAllData.confirmPassword = formData.confirmPassword;
        handleFormDataChange(formAllData);
    }

    return (
        <div id="logInInfo">
            <NumberIconH2 numberIcone={1} h2Text="Basic info" lighted={true} onClick={firstStep}/>
            <NumberIconH2 numberIcone={2} h2Text="Contact info" lighted={true} onClick={prevStep}/>
            <NumberIconH2 numberIcone={3} h2Text="Login info" ref={numberIconRef}/>
            <Row wrap={true} align={"middle"} justify={"start"} >
                <h3>*All fields required unless noted.</h3>
            </Row>
            <ErrorText errorTitle={errorTitle} errorText={errorText} />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Email address"
                    name="email"
                    type="text"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Confirm email address"
                    name="confirmEmail"
                    type="text"
                    placeholder="Confirm email address"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                />
            </Row>
            <InputPassword
                label="*Your password (10 characters min)"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <InputPassword
                label="*Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
            />
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col className="Button" span={11}>
                    <Button buttonText="Previous" onClick={prevStep}/>
                </Col>
                <Col span={2}/>
                <Col className="Button" span={11}>
                    <Button buttonText="Submit" onClick={onSubmit}/>
                </Col>
            </Row>
        </div>
    );
};

export default ContactInfo;