import React, {useRef, useState} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./ContactInfo.css"
import CustomInput from "./CustomInput";
import NumberIconH2 from "./NumberIconH2";
import {FormAllData} from '../CustomTypes'
import ErrorText from "./ErrorText";
import {toggleErrorClass} from '../MainFonction'

interface ContactInfoProps {
    formAllData: FormAllData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: FormAllData) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ formAllData, changeStep, handleFormDataChange }) => {

    const [formData, setFormData] = useState<{ streetAddress: string; city: string; country: string; tel: string; }>
    ({
        streetAddress: formAllData.streetAddress,
        city: formAllData.city,
        country: formAllData.country,
        tel: formAllData.tel
    });

    const numberIconRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const prevStep = () => {
        save();
        changeStep(0);
    };

    const nextStep = () => {
        if(formData.streetAddress && formData.city && formData.country && formData.tel)
        {
            save();
            changeStep(2);
            if (numberIconRef.current) {
                numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        else{
            const errorTextElement = document.getElementById('errorText');
            const streetAddressInput = document.getElementsByName('streetAddress')[0] as HTMLInputElement;
            const cityInput = document.getElementsByName('city')[0] as HTMLInputElement;
            const countryInput = document.getElementsByName('country')[0] as HTMLInputElement;
            const telInput = document.getElementsByName('tel')[0] as HTMLInputElement;

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            toggleErrorClass(streetAddressInput, streetAddressInput.value);
            toggleErrorClass(cityInput, cityInput.value);
            toggleErrorClass(countryInput, countryInput.value);
            toggleErrorClass(telInput, telInput.value);

            if (numberIconRef.current) {
                numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const save = () => {
        formAllData.streetAddress = formData.streetAddress;
        formAllData.city = formData.city;
        formAllData.country = formData.country;
        formAllData.tel = formData.tel;
        handleFormDataChange(formAllData);
    }

    return (
        <div id="contactInfo">
            <NumberIconH2 numberIcone={1} h2Text="Basic info" lighted={true} onClick={prevStep}/>
            <NumberIconH2 numberIcone={2} h2Text="Contact info" ref={numberIconRef}/>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Street address"
                    name="streetAddress"
                    type="text"
                    placeholder="Street address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*City"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Telephone"
                    name="tel"
                    type="tel"
                    placeholder="Telephone"
                    value={formData.tel}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col className="Button" span={11}>
                    <Button buttonText="Previous" onClick={prevStep}/>
                </Col>
                <Col span={2}/>
                <Col className="Button" span={11}>
                    <Button buttonText="Next" onClick={nextStep}/>
                </Col>
            </Row>
            <NumberIconH2 numberIcone={3} h2Text="Login info" lighted={true} onClick={nextStep}/>
        </div>
    );
};

export default ContactInfo;