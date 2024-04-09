import React, { useState, useEffect } from "react";
import axios from 'axios';
import './HomeDelivery.css'
import {Col, Row, Switch} from "antd";
import DeliveryCard from "./DeliveryCard";

const HomeDelivery: React.FC = () => {

    const [deliveryHistory, setDeliveryHistory] = useState([]);
    const [switchChecked, setSwitchChecked] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            axios.get(`http://localhost:3002/api/deliveryHistory/${userId}`)
                .then(response => {
                    setDeliveryHistory(response.data);
                })
                .catch(error => {
                    console.error('Error fetching delivery history:', error);
                });
        }
    }, []);

    const onChangeSwitch = (checked: boolean) => {
        setSwitchChecked(checked);
    };

    return (
        <div id="homeDelivery" className="NoSelect">
            <Row wrap={true} align={'middle'} justify={"center"}>
                <Col span={20}>
                    <h2>Delivery proposal</h2>
                </Col>
                <Col span={4} className="SwitchDelivery">
                    <Switch defaultChecked onChange={onChangeSwitch} value={switchChecked}/>
                </Col>
            </Row>

            <Row wrap={true} justify={"start"}>
                <h2>Delivery history</h2>
            </Row>
            <Row wrap={true} justify={"start"}>
                {deliveryHistory.map((delivery: any, index: number) => (
                    <DeliveryCard
                        key={index}
                        restaurant={delivery.restaurant}
                        address={delivery.address}
                        price={delivery.price}
                        distance={delivery.distance}
                        time={delivery.time}
                    />
                ))}
            </Row>
        </div>
    );
};

export default HomeDelivery;
