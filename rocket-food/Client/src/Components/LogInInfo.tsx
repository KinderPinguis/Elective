import React, {useState} from 'react';
import { Col, Row } from "antd";
import Button from './Button'
import "./LogInInfo.css"
import CustomInput from "./CustomInput";
import InputPassword from "./PasswordInput";

interface LogInInfoProps {
    changeStep: (step: number) => void;
}

const ContactInfo: React.FC<LogInInfoProps> = ({ changeStep }) => {

    const [formData, setFormData] = useState<{ email: string; password: string; city: string }>({ email: '', password: '', city:'' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const prevStep = () => {
        changeStep(1);
    };

    const onSubmit = () => {

    }

    return (
        <div id="logInInfo">
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Email Address"
                    name="email"
                    type="text"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </Row>
            <InputPassword
                label="Your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
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
                    <Button buttonText="Submit" onClick={onSubmit}/>
                </Col>
            </Row>
        </div>
    );
};

export default ContactInfo;