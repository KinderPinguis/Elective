import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Delivery.css'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Col, Modal, Row} from "antd";
import Button from "../Components/Button";
import Map from "../Components/Map";
import CustomInput from "../Components/CustomInput";
import ErrorText from "../Components/ErrorText";

const Delivery: React.FC = () => {
    const [startLocation, setStartLocation] = useState<{ lat: number, lng: number } | null>(null);
    const deliveryId = localStorage.getItem("deliveryId");

    const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
    const [isGetModalVisible, setIsGetModalVisible] = useState(false);

    const [errorTitle, setErrorTitle] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");

    const originAddress = "3 rue de Belfort, Strasbourg, France";
    const deliveryAddress = "1 rue de Belfort, Strasbourg, France";

    const [formData, setFormData] = useState<{ code: string; }>({
        code: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setStartLocation({ lat: latitude, lng: longitude });
            }, (error) => {
                console.error("Error getting user's location:", error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const showCancelModal = () => {
        setIsCancelModalVisible(true);
    };

    const handleCancelCancel = () => {
        setIsCancelModalVisible(false);
    };

    const cancelDelivery = () => {
        localStorage.removeItem("deliveryId")
    }

    const showGetModal = () => {
        setIsGetModalVisible(true);
    };

    const handleGetCancel = () => {
        setIsGetModalVisible(false);
    };

    const getDelivery = async () => {
        const codeInput = document.getElementsByName('code')[0] as HTMLInputElement;
        const errorTextElement = document.getElementById('errorText');

        const response = await axios.post('http://localhost:3002/api/checkCode', {
            id: deliveryId,
            codeDelivery: codeInput.value
        }).then(response => {
            if (response.data) {
                console.log("hello");
            } else {
                if (errorTextElement) {
                    errorTextElement.style.display = 'block';
                }
                setErrorTitle("Check code failed");
                setErrorText(codeInput.value + " is not the good code");
            }
        }).catch(error => {
            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }
            setErrorTitle("Check Code Failed");
            setErrorText(error.response.data.message);
        });
    };

    return (
        <div>
            <header>
                <Header/>
            </header>
            <body id="delivery">
                <Row wrap={true} justify={"center"}>
                    <h2>Delivery : get the command</h2>
                </Row>
                <Row>
                    <Map origin={originAddress} destination={deliveryAddress} />
                </Row>
                <Row wrap={true} justify={"center"}>
                    <Col className="CancelButton" span={4}>
                        <Button onClick={showCancelModal} buttonText="Cancel Delivery"/>
                    </Col>
                    <Col span={2}/>
                    <Col className="GetButton" span={4}>
                        <Button onClick={showGetModal} buttonText="Get Delivery"/>
                    </Col>
                </Row>
                <Modal
                    title="Confirm cancel delivery"
                    visible={isCancelModalVisible}
                    onOk={cancelDelivery}
                    onCancel={handleCancelCancel}
                    className="DeleteModal"
                    okText="Yes"
                    cancelText="No"
                >
                    <p>Are you sure you want to cancel this delivery ?</p>
                </Modal>

                <Modal
                    title="Confirm you get the delivery"
                    visible={isGetModalVisible}
                    onOk={getDelivery}
                    onCancel={handleGetCancel}
                    className="AcceptModal"
                    okText="Yes"
                    cancelText="No"
                >
                    <p>Are you sure you get this delivery ?</p>
                    <ErrorText errorTitle={errorTitle} errorText={errorText}/>
                    <CustomInput
                        name="code"
                        value={formData.code}
                        type="text"
                        onChange={handleInputChange}
                        onKeyPress={getDelivery}
                    />
                </Modal>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Delivery;