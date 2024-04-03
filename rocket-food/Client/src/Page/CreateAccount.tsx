import React, { useState } from 'react';
import Header from '../Components/Header';
import './CreateAccount.css';
import BasicInfo from "../Components/BasicInfo";
import ContactInfo from "../Components/ContactInfo";
import LoginInfo from "../Components/LogInInfo";
import {Col, Row, Steps} from "antd";
import Footer from "../Components/Footer";
import {FormAllData} from '../CustomTypes'

function CreateAccount() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formAllData, setFormData] = useState<FormAllData>({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dobYear: '',
        dobMonth: '',
        dobDate: '',
        streetAddress: '',
        city: '',
        country: '',
        tel: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });

    const Step = Steps.Step;

    const changeStep = (step : number) =>{
        setCurrentStep(step);
    }

    const handleFormDataChange = (data: FormAllData) => {
        setFormData({ ...formAllData, ...data });
    };

    const stepsComponents = [
        <BasicInfo formAllData={formAllData} changeStep={changeStep} handleFormDataChange={handleFormDataChange} />,
        <ContactInfo formAllData={formAllData} changeStep={changeStep} handleFormDataChange={handleFormDataChange} />,
        <LoginInfo formAllData={formAllData} changeStep={changeStep} handleFormDataChange={handleFormDataChange} />
    ];

    return (
        <div>
            <header>
                <Header/>
            </header>
            <body id="createAccount" className="NoSelect">
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <h1 className="TextPrimary">JOIN US</h1>
                </Row>
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <h3>Already have an account ? <a className="LinkUnderline" href="/LogIn">Log in</a></h3>
                </Row>
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <Steps className="CustomSteps" size="small" labelPlacement="vertical" responsive={true}
                           current={currentStep}>
                        <Step className="CustomStep" onClick={() => changeStep(0)} title="Basic info"/>
                        <Step className="CustomStep" onClick={() => changeStep(1)} title="Contact info"/>
                        <Step className="CustomStep" onClick={() => changeStep(2)} title="Login info"/>
                    </Steps>
                </Row>

                <div style={{marginTop: '20px', textAlign: 'center'}}>
                    {stepsComponents[currentStep]}
                </div>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default CreateAccount;