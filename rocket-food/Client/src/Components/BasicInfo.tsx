import React, { useState, useRef } from 'react';
import { Row, Col, Radio, RadioChangeEvent  } from "antd";
import Button from './Button';
import "./BasicInfo.css";
import CustomInput from "./CustomInput";
import NumberIconH2 from "./NumberIconH2";
import { FormAllData } from '../CustomTypes';
import ErrorText from "./ErrorText";
import {toggleErrorClass} from '../MainFonction'

interface BasicInfoProps {
    formAllData: FormAllData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: FormAllData) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ formAllData, changeStep, handleFormDataChange }) => {
    const [formData, setFormData] = useState<{ firstName: string; middleName: string; lastName: string; gender: "male" | "female" | "nonBinary" | ""; dobYear: string; dobMonth: string; dobDate: string}>
    ({
        firstName: formAllData.firstName,
        middleName: formAllData.middleName,
        lastName: formAllData.lastName,
        gender : formAllData.gender,
        dobYear: formAllData.dobYear,
        dobMonth: formAllData.dobMonth,
        dobDate: formAllData.dobDate,
    });

    const numberIconRef = useRef<HTMLDivElement>(null);

    const handleGenderChange = (e: RadioChangeEvent) => {
        if (e.target.value === "male" || e.target.value === "female" || e.target.value === "nonBinary") {
            setFormData({ ...formData, gender: e.target.value });
        } else {
            setFormData({ ...formData, gender: "" });
        }
    };

    const handleDobChange = (type: string, value: string) => {
        switch (type) {
            case 'month':
                setFormData({ ...formData, dobMonth: value, dobDate: '' });
                break;
            case 'date':
                setFormData({ ...formData, dobDate: value });
                break;
            case 'year':
                setFormData({ ...formData, dobYear: value });
                break;
            default:
                break;
        }
    };

    const generateOptions = (start: number, end: number) => {
        const options = [];
        for (let i = start; i <= end; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const generateDateOptions = () => {
        if (formData.dobMonth === '') {
            return [<option key="select-date" value="">Select Date</option>];
        }

        const daysInMonth = new Date(parseInt(formData.dobYear), parseInt(formData.dobMonth), 0).getDate();
        const options = [];
        for (let i = 1; i <= daysInMonth; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const nextStep = () => {
        if (formData.firstName && formData.lastName && formData.dobDate) {
            save();
            changeStep(1);
        }

        else {
            const errorTextElement = document.getElementById('errorText');

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            const firstNameInput = document.getElementsByName('firstName')[0] as HTMLInputElement;
            const lastNameInput = document.getElementsByName('lastName')[0] as HTMLInputElement;

            toggleErrorClass(firstNameInput, firstNameInput.value);
            toggleErrorClass(lastNameInput, lastNameInput.value);

            if (numberIconRef.current) {
                numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const lastStep = () => {
        if (formData.firstName && formData.lastName && formData.dobDate) {
            if (formAllData.streetAddress && formAllData.city && formAllData.country && formAllData.tel) {
                save();
                changeStep(2);
            }
        }
    };

    const save = () => {
        formAllData.firstName = formData.firstName;
        formAllData.middleName = formData.middleName;
        formAllData.lastName = formData.lastName;
        formAllData.gender = formData.gender;
        formAllData.dobYear = formData.dobYear;
        formAllData.dobMonth = formData.dobMonth;
        formAllData.dobDate = formData.dobDate;
        handleFormDataChange(formAllData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="basicInfo">
            <NumberIconH2 numberIcone={1} h2Text="Basic info" ref={numberIconRef} />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*First name"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="Middle name (as applicable)"
                    name="middleName"
                    type="text"
                    placeholder="Middle name"
                    value={formData.middleName}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Last name"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <p>What's your gender ? (optional)</p>
            </Row>
            <Row id="gender" wrap={true} align={"middle"} justify={"start"}>
                <Radio.Group value={formData.gender} onChange={handleGenderChange}>
                    <Radio value="female">Female</Radio>
                    <Radio value="male">Male</Radio>
                    <Radio value="nonBinary">Non-binary</Radio>
                    <Radio value="">I don't want to answer</Radio>
                </Radio.Group>
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <p>*What's your date of birth ?</p>
            </Row>
            <Row id="birthDate" wrap={true} align={"middle"} justify={"center"}>
                <Col span={7}>
                    <p>Year</p>
                    <select value={formData.dobYear} onChange={(e) => handleDobChange('year', e.target.value)}>
                        {generateOptions(1900, new Date().getFullYear())}
                    </select>
                </Col>
                <Col span={1}/>
                <Col span={7}>
                    <p>Month</p>
                    <select value={formData.dobMonth} onChange={(e) => handleDobChange('month', e.target.value)}>
                        {generateOptions(1, 12)}
                    </select>
                </Col>
                <Col span={1}/>
                <Col span={7}>
                    <p>Date</p>
                    <select value={formData.dobDate} onChange={(e) => handleDobChange('date', e.target.value)}>
                        {generateDateOptions()}
                    </select>
                </Col>
            </Row>
            <Row id="button" wrap={true} align={"middle"} justify={"center"}>
                <Button buttonText="Next" onClick={nextStep}/>
            </Row>
            <NumberIconH2 numberIcone={2} h2Text="Contact info" lighted={true} onClick={nextStep}/>
            <NumberIconH2 numberIcone={3} h2Text="Login info" lighted={true} onClick={lastStep}/>
        </div>
    );
};

export default BasicInfo;