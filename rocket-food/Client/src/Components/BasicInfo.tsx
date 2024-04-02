import React, {useState} from 'react';
import { Row, Col } from "antd";
import Button from './Button'
import "./BasicInfo.css"
import CustomInput from "./CustomInput";

interface FormAllData {
    firstName: string;
    middleName: string;
    lastName: string;
    dobYear: string;
    dobMonth: string;
    dobDate: string;
}

interface BasicInfoProps {
    formAllData: FormAllData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: FormAllData) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ formAllData, changeStep, handleFormDataChange }) => {

    const [formData, setFormData] = useState<{ firstName: string; middleName: string; lastName: string; dobYear: string; dobMonth: string; dobDate: string}>
    ({
        firstName: formAllData.firstName,
        middleName: formAllData.middleName,
        lastName: formAllData.lastName,
        dobYear: formAllData.dobYear,
        dobMonth: formAllData.dobMonth,
        dobDate: formAllData.dobDate,
    });

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
        for (let i = start; i <= end; i++)
        {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const generateDateOptions = () => {
        if (formData.dobMonth === '')
        {
            return [<option key="select-date" value="">Select Date</option>];
        }

        const daysInMonth = new Date(parseInt(formData.dobYear), parseInt(formData.dobMonth), 0).getDate();
        const options = [];
        for (let i = 1; i <= daysInMonth; i++)
        {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const nextStep = () => {
        if(formData.firstName && formData.lastName && formData.dobDate)
        {
            formAllData.firstName = formData.firstName;
            formAllData.middleName = formData.middleName;
            formAllData.lastName = formData.lastName;
            formAllData.dobYear = formData.dobYear;
            formAllData.dobMonth = formData.dobMonth;
            formAllData.dobDate = formData.dobDate;
            handleFormDataChange(formAllData);
            changeStep(1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="basicInfo">
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h2>Basic Info</h2>
            </Row>
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
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
                <Col>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label htmlFor="female">Female</label>
                </Col>
                <Col style={{ width: '50px' }}/>
                <Col>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label htmlFor="male">Male</label>
                </Col>
                <Col style={{ width: '50px' }}/>
                <Col>
                    <input type="radio" id="nonBinary" name="gender" value="nonBinary"/>
                    <label htmlFor="nonBinary">Non-binary</label>
                </Col>
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
        </div>
    );
};

export default BasicInfo;