import React, { useState } from 'react';
import Header from '../Components/Header';
import './CreateAccount.css';
import Button from '../Components/Button'
import {Col, Row, Steps} from "antd";

function CreateAccount() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const submit = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div>
            <header>
                <Header/>
            </header>
            <body id="createAccount">
            <Row wrap={true} align={"middle"} justify={"center"}>
                <h1 className="TextPrimary">JOIN US</h1>
            </Row>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <h3>Already have an account ? Log in</h3>
            </Row>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Steps className="Custom-steps" size="small" labelPlacement="vertical" responsive={true} current={0}
                       items={[
                           {
                               title: 'Basic info',
                           },
                           {
                               title: 'Contact info',
                           },
                           {
                               title: 'Login info',
                           },
                       ]}/>
            </Row>

            <div style={{marginTop: '20px', textAlign: 'center'}}>
                {currentStep > 0 && (
                    <Button buttonText="Previous" onClick={prevStep}/>
                )}
                {currentStep < 2 && (
                    <Button buttonText="Next" onClick={nextStep}/>
                )}
                {currentStep === 2 && (
                    <Button buttonText="Submit" onClick={submit}/>
                )}
            </div>
            </body>
        </div>
    );
}

export default CreateAccount;