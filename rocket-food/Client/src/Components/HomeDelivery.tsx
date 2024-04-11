import React, { useState, useEffect } from "react";
import axios from 'axios';
import './HomeDelivery.css'
import {Col, Modal, Row, Switch} from "antd";
import DeliveryCard from "./DeliveryCard";
import { useNavigate } from 'react-router-dom';

interface DeliveryHistory {
    _id: string;
    idRestaurant: string;
    price: string;
    status: string;
    distance: string;
    time: string;
    restaurant?: string;
    address: string;
}

const HomeDelivery: React.FC = () => {
    let navigate = useNavigate();

    const [deliveredDeliveries, setDeliveredDeliveries] = useState<DeliveryHistory[]>([]);
    const [pendingDeliveries, setPendingDeliveries] = useState<DeliveryHistory[]>([]);
    const [switchChecked, setSwitchChecked] = useState(false);

    const [isAcceptModalVisible, setIsAcceptModalVisible] = useState(false);
    const [selectedDeliveryId, setSelectedDeliveryId] = useState<string | null>(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            axios.get(`http://localhost:3002/api/deliveryHistory/${userId}`)
                .then(response => {
                    const fetchedDeliveryHistory: DeliveryHistory[] = response.data;
                    const delivered: DeliveryHistory[] = [];
                    const pending: DeliveryHistory[] = [];

                    fetchedDeliveryHistory.forEach((delivery: DeliveryHistory) => {
                        axios.get(`http://localhost:5000/api/restaurant/${delivery.idRestaurant}`)
                            .then(res => {
                                const restaurantName = res.data.nameRestaurant;
                                const address = res.data.streetAddress + ", " + res.data.city;
                                const updatedDelivery: DeliveryHistory = {
                                    ...delivery,
                                    restaurant: restaurantName,
                                    address: address
                                };

                                if (updatedDelivery.status === "delivered") {
                                    delivered.push(updatedDelivery);
                                } else {
                                    pending.push(updatedDelivery);
                                }

                                setDeliveredDeliveries(delivered);
                                setPendingDeliveries(pending);
                            })
                            .catch(error => {
                                console.error('Error getting name restaurant:', error);
                            });
                    });
                })
                .catch(error => {
                    console.error('Error fetching delivery history:', error);
                });
        }
    }, []);

    const onChangeSwitch = (checked: boolean) => {
        setSwitchChecked(checked);
    };

    const showDeleteModal = (deliveryId: string) => {
        setSelectedDeliveryId(deliveryId);
        setIsAcceptModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsAcceptModalVisible(false);
    };

    const acceptDelivery = () => {
        if (selectedDeliveryId) {
            localStorage.setItem("deliveryId", selectedDeliveryId);
            navigate("/Delivery");
        }
    };

    const openHistory = () => {

    };

    return (
        <div id="homeDelivery" className="NoSelect">
            <Row wrap={true} align={'middle'} justify={"center"}>
                <Col span={20}>
                    <h2>Delivery proposal</h2>
                </Col>
                <Col span={4} className="SwitchDelivery">
                    <Switch defaultChecked onChange={onChangeSwitch} value={switchChecked} />
                </Col>
            </Row>
            <Row wrap={true} justify={"start"}>
                {switchChecked ? (
                    pendingDeliveries.map((delivery: DeliveryHistory, index: number) => (
                        <DeliveryCard
                            onClick={() => showDeleteModal(delivery._id)}
                            key={index}
                            restaurant={delivery.restaurant || "Unknown Restaurant"}
                            address={delivery.address}
                            price={delivery.price}
                            status={delivery.status}
                            distance={delivery.distance}
                            time={delivery.time}
                        />
                    ))
                ) : null}
            </Row>
            <Row wrap={true} justify={"start"}>
                <h2>Delivery history</h2>
            </Row>
            <Row wrap={true} justify={"start"}>
                {deliveredDeliveries.map((delivery: DeliveryHistory, index: number) => (
                    <DeliveryCard
                        onClick={openHistory}
                        key={index}
                        restaurant={delivery.restaurant || "Unknown Restaurant"}
                        address={delivery.address}
                        price={delivery.price}
                        status={delivery.status}
                        distance={delivery.distance}
                        time={delivery.time}
                    />
                ))}
            </Row>

            <Modal
                title="Confirm accept delivery"
                visible={isAcceptModalVisible}
                onOk={acceptDelivery}
                onCancel={handleCancelDelete}
                className="AcceptModal"
                okText="Accept"
            >
                <p>Are you sure you want to accept this delivery ?</p>
            </Modal>
        </div>
    );
};

export default HomeDelivery;
