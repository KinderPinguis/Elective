import React, { useState, useRef } from 'react';
import { Row } from "antd";
import Button from './Button';
import "./RestaurantInfo.css";
import CustomInput from "./CustomInput";
import RadioButtonImage from "./RadioButtonImage";
import NumberIconH2 from "./NumberIconH2";
import { restaurantData } from '../CustomTypes';
import ErrorText from "./ErrorText";
import {toggleErrorClass} from '../MainFonction'
import fast_food from "../Image/AstroPizzaRed.png";
import traditional from "../Image/AstroRamenWhite.png";
import other from "../Image/AstroEatingNoBg.png";

interface RestaurantInfoProps {
    restaurantData: restaurantData;
    changeStep: (step: number) => void;
    handleFormDataChange: (data: restaurantData) => void;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurantData, changeStep, handleFormDataChange }) => {
    const [formData, setFormData] = useState<{    nameRestaurant: string; creationDate: Date; categories: string;}>
    ({
        nameRestaurant: restaurantData.nameRestaurant,
        creationDate: restaurantData.creationDate,
        categories : restaurantData.categories
    });

    const numberIconRef = useRef<HTMLDivElement>(null);
    
    const handleCategoryChange = (categories: "fast-food" | "traditional" | "other") => {
        setFormData({ ...formData, categories });
    };
    
    const generateOptions = (start: number, end: number) => {
        const options = [];
        for (let i = start; i <= end; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };
    
    const nextStep = () => {
        if (formData.nameRestaurant && formData.categories) {
            save();
            changeStep(1);
        }

        else {
            const errorTextElement = document.getElementById('errorText');

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

            const nameRestaurantInput = document.getElementsByName('nameRestaurant')[0] as HTMLInputElement;

            toggleErrorClass(nameRestaurantInput, nameRestaurantInput.value);

            if (numberIconRef.current) {
                numberIconRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };
    
    const lastStep = () => {
        if (formData.nameRestaurant && formData.categories) {
            if (restaurantData.streetAddress && restaurantData.country && restaurantData.city && restaurantData.phoneNumber) {
                save();
                changeStep(2);
            }
        }
    };

    const save = () => {
        restaurantData.nameRestaurant = formData.nameRestaurant;
        restaurantData.creationDate = formData.creationDate;
        restaurantData.categories = formData.categories;
        handleFormDataChange(restaurantData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="restaurantInfo">
            <NumberIconH2 numberIcone={1} h2Text="Restaurant info" ref={numberIconRef} />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <h3>*All fields required unless noted.</h3>
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <CustomInput
                    label="*Restaurant name"
                    name="nameRestaurant"
                    type="text"
                    placeholder="Name Restaurant"
                    value={formData.nameRestaurant}
                    onChange={handleInputChange}
                />
            </Row>
            <ErrorText errorTitle="Empty fields" errorText="Some required fields are not complete" />
            <Row wrap={true} align={"middle"} justify={"start"}>
                <p>What's your restaurant category ?</p>
            </Row>
            <Row id="radioButtonImage" wrap={true} align={"middle"} justify={"start"}>
                <RadioButtonImage text="Fast-Food" span={8} image={fast_food} lighted={formData.categories != "fast-food"} onClick={() => handleCategoryChange("fast-food")} />
                <RadioButtonImage text="Traditional" image={traditional} span={8} lighted={formData.categories != "traditional"} onClick={() => handleCategoryChange("traditional")} />
                <RadioButtonImage text="Other" image={other} span={8} lighted={formData.categories != "other"} onClick={() => handleCategoryChange("other")} />
            </Row>
            <Row id="button" wrap={true} align={"middle"} justify={"center"}>
                <Button buttonText="Next" onClick={nextStep}/>
            </Row>
            <NumberIconH2 numberIcone={2} h2Text="Restaurant Contact info" lighted={true} onClick={nextStep}/>
            <NumberIconH2 numberIcone={3} h2Text="Restaurant Login info" lighted={true} onClick={lastStep}/>
        </div>
    );
};

export default RestaurantInfo;