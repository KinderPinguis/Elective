import React, {useState} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./ContactInfo.css"
import CustomInput from "./CustomInput";
import NumberIconeH2 from "./numberIconH2";
import {FormAllData} from '../CustomTypes'

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
            <NumberIconeH2 numberIcone={1} h2Text="Basic info" lighted={true} onClick={prevStep}/>
            <NumberIconeH2 numberIcone={2} h2Text="Contact info"/>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Street address"
                    name="streetAddress"
                    type="text"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*City"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Telephone"
                    name="tel"
                    type="tel"
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
            <NumberIconeH2 numberIcone={3} h2Text="Login info" lighted={true} onClick={nextStep}/>
        </div>
    );
};

export default ContactInfo;