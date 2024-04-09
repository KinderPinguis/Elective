import React, { useState } from "react";
import './HomeDelivery.css'
import {Col, Row, Switch} from "antd";
import DeliveryCard from "./DeliveryCard";

const HomeDelivery: React.FC = () => {

    const [switchChecked, setSwitchChecked] = useState(false);

    const onChangeSwitch = (checked: boolean) => {
        setSwitchChecked(checked);
    };

    return (
        <div id="homeDelivery" className="NoSelect">
            <Row wrap={true}  align={'middle'} justify={"center"}>
                <Col span={20}>
                    <h2>Delivery proposal </h2>
                </Col>
                <Col span={4} className="SwitchDelivery">
                    <Switch defaultChecked onChange={onChangeSwitch} value={switchChecked}/>
                </Col>
            </Row>

            <Row wrap={true} justify={"start"}>
                <h2>Delivery history</h2>
            </Row>
            <Row wrap={true} justify={"start"}>
                <DeliveryCard restaurant="Mcdo" address="7 rue du tilleul Strasbourg" price="8 €" distance="3,9km" time="10 minutes"/>
                <DeliveryCard restaurant="Mcdo" address="7 rue du tilleul Strasbourg" price="8 €" distance="3,9km" time="10 minutes"/>
                <DeliveryCard restaurant="Mcdo" address="7 rue du tilleul Strasbourg" price="8 €" distance="3,9km" time="10 minutes"/>
                <DeliveryCard restaurant="Mcdo" address="7 rue du tilleul Strasbourg" price="8 €" distance="3,9km" time="10 minutes"/>
            </Row>
        </div>
    );
};


export default HomeDelivery;
