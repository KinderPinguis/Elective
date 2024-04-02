import React, {useState} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./ContactInfo.css"
import CustomInput from "./CustomInput";

interface FormAllData {
    firstName: string;
    middleName: string;
    lastName: string;
    dobYear: string;
    dobMonth: string;
    dobDate: string;
}

interface ContactInfoProps {
    formAllData: FormAllData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: FormAllData) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ changeStep }) => {

    const [formData, setFormData] = useState<{ streetAddress: string; apartment: string; city: string }>({ streetAddress: '', apartment: '', city:'' });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const prevStep = () => {
        changeStep(0);
    };

    const nextStep = () => {
        changeStep(2);
    };

    return (
        <div id="contactInfo">
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Street address"
                    name="streetAddress"
                    type="text"
                    placeholder="Address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                />
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Apartment"
                    name="apartment"
                    type="text"
                    placeholder="Apartment"
                    value={formData.apartment}
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
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col className="Button" span={11}>
                    <Button buttonText="Previous" onClick={prevStep}/>
                </Col>
                <Col span={2}/>
                <Col className="Button" span={11}>
                    <Button buttonText="Next" onClick={nextStep}/>
                </Col>
            </Row>
        </div>
    );
};

export default ContactInfo;