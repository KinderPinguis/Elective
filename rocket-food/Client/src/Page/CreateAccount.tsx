import React, { useState } from 'react';
import Header from '../Components/Header';
import './CreateAccount.css';
import BasicInfo from "../Components/BasicInfo";
import ContactInfo from "../Components/ContactInfo";
import LoginInfo from "../Components/LogInInfo";
import {Col, Row, Steps} from "antd";

function CreateAccount() {
    const [currentStep, setCurrentStep] = useState(0);
    const Step = Steps.Step;

    const changeStep = (step : number) =>{
        setCurrentStep(step);
    }

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
                    <Steps className="CustomSteps" size="small" labelPlacement="vertical" responsive={true} current={currentStep}>
                        <Step className="CustomStep" onClick={() => changeStep(0)} title="Basic info"/>
                        <Step className="CustomStep" onClick={() => changeStep(1)} title="Contact info"/>
                        <Step className="CustomStep" onClick={() => changeStep(2)} title="Login info"/>
                    </Steps>
                </Row>

                <div style={{marginTop: '20px', textAlign: 'center'}}>
                    {currentStep === 0 && (
                        <BasicInfo changeStep={changeStep}/>
                    )}
                    {currentStep === 1 && (
                        <ContactInfo changeStep={changeStep}/>
                    )}
                    {currentStep === 2 && (
                        <LoginInfo changeStep={changeStep}/>
                    )}
                </div>
            </body>
        </div>
    );
}

export default CreateAccount;