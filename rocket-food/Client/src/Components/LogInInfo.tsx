import React, {useState} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./LogInInfo.css"
import CustomInput from "./CustomInput";
import InputPassword from "./PasswordInput";
import NumberIconeH2 from "./numberIconH2";
import {FormAllData} from '../CustomTypes'

interface LogInInfoProps {
    formAllData: FormAllData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: FormAllData) => void;
}

const ContactInfo: React.FC<LogInInfoProps> = ({ formAllData, changeStep, handleFormDataChange }) => {

    const [formData, setFormData] = useState<{ email: string; confirmEmail: string; password: string; confirmPassword: string }>
    ({
        email: formAllData.email,
        confirmEmail: formAllData.confirmEmail,
        password: formAllData.password,
        confirmPassword: formAllData.confirmPassword,
    });

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

    const onSubmit = () => {

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
            <NumberIconeH2 numberIcone={1} h2Text="Basic info" lighted={true} onClick={firstStep}/>
            <NumberIconeH2 numberIcone={2} h2Text="Contact info" lighted={true} onClick={prevStep}/>
            <NumberIconeH2 numberIcone={3} h2Text="Login info"/>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Email address"
                    name="email"
                    type="text"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Confirm email zddress"
                    name="confirmEmail"
                    type="text"
                    placeholder="email"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                />
            </Row>
            <InputPassword
                label="*Your password"
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