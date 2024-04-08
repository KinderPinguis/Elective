import React, {useRef, useState} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./RestaurantContactInfo.css"
import CustomInput from "./CustomInput";
import NumberIconH2 from "./NumberIconH2";
import {restaurantData} from '../CustomTypes'
import ErrorText from "./ErrorText";
import {toggleErrorClass} from '../MainFonction'

interface RestaurantContactInfoProps {
    restaurantData: restaurantData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: restaurantData) => void;
}

const ContactInfo: React.FC<RestaurantContactInfoProps> = ({ restaurantData, changeStep, handleFormDataChange }) => {

    const [formData, setFormData] = useState<{ streetAddress: string; country: string; city: string; phoneNumber: string; }>
    ({
        streetAddress: restaurantData.streetAddress,
        country: restaurantData.country,
        city: restaurantData.city,
        phoneNumber: restaurantData.phoneNumber
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
        if (formData.streetAddress && formData.country && formData.city && formData.phoneNumber) {
            save();
            changeStep(2);
            if (numberIconRef.current) {
                numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        else{
            const errorTextElement = document.getElementById('errorText');
            const streetAddressInput = document.getElementsByName('streetAddress')[0] as HTMLInputElement;
            const countryInput = document.getElementsByName('country')[0] as HTMLInputElement;
            const cityInput = document.getElementsByName('city')[0] as HTMLInputElement;
            const phoneNumberInput = document.getElementsByName('phoneNumber')[0] as HTMLInputElement;

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            toggleErrorClass(streetAddressInput, streetAddressInput.value);
            toggleErrorClass(countryInput, countryInput.value);
            toggleErrorClass(cityInput, cityInput.value);
            toggleErrorClass(phoneNumberInput, phoneNumberInput.value);

            if (numberIconRef.current) {
                numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const save = () => {
        restaurantData.streetAddress = formData.streetAddress;
        restaurantData.country = formData.country;
        restaurantData.city = formData.city;
        restaurantData.phoneNumber = formData.phoneNumber;
        handleFormDataChange(restaurantData);
    }

    return (
        <div id="restaurantContactInfo">
            <NumberIconH2 numberIcone={1} h2Text="Restaurant info" lighted={true} onClick={prevStep}/>
            <NumberIconH2 numberIcone={2} h2Text="Restaurant Contact info" ref={numberIconRef}/>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Street address"
                    name="streetAddress"
                    type="string"
                    placeholder="Street address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                />
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
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
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Country"
                    name="country"
                    type="string"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                />
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
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
            <NumberIconH2 numberIcone={3} h2Text="Restaurant Login info" lighted={true} onClick={nextStep}/>
        </div>
    );
};

export default ContactInfo;