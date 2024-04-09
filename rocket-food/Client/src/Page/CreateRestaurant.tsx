import React, { useState } from 'react';
import Header from '../Components/Header';
import './CreateRestaurant.css';
import { Row, Steps} from "antd";
import Footer from "../Components/Footer";
import {restaurantData} from '../CustomTypes'
import RestaurantInfo from "../Components/RestaurantInfo";
import RestaurantContactInfo from "../Components/RestaurantContactInfo";
import RestaurantLoginInfo from "../Components/RestaurantLoginInfo";

function CreateRestaurant() {
    const [currentStep, setCurrentStep] = useState(0);
    const [restaurantData, setFormData] = useState<restaurantData>({
        nameRestaurant: '',
        streetAddress:  '',
        country: '',
        city: '',
        creationDate: new Date,
        owner: 'me',
        phoneNumber: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        categories: 'other'
    });

    const Step = Steps.Step;

    const changeStep = (step : number) =>{
        setCurrentStep(step);
    }

    const handleFormDataChange = (data: restaurantData) => {
        setFormData({ ...restaurantData, ...data });
    };

    const stepsComponents = [
        <RestaurantInfo restaurantData={restaurantData} changeStep={changeStep} handleFormDataChange={handleFormDataChange} />,
        <RestaurantContactInfo restaurantData={restaurantData} changeStep={changeStep} handleFormDataChange={handleFormDataChange} />,
        <RestaurantLoginInfo restaurantData={restaurantData} changeStep={changeStep} handleFormDataChange={handleFormDataChange} />
    ];

    return (
        <div>
            <header>
                <Header/>
            </header>
            <body id="createRestaurant" className="NoSelect">
            <Row wrap={true} align={"middle"} justify={"center"}>
                <h1 className="TextPrimary">CREATE YOUR RESTAURANT</h1>
            </Row>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Steps className="CustomSteps" size="small" labelPlacement="vertical" responsive={true}
                       current={currentStep}>
                    <Step className="CustomStep" title="Restaurant info"/>
                    <Step className="CustomStep" title="Restaurant Contact info"/>
                    <Step className="CustomStep" title="Restaurant Login info"/>
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

export default CreateRestaurant;