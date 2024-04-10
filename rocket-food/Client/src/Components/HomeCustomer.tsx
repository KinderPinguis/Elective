import React, {useEffect, useState} from "react";
import './HomeCustomer.css'
import {Row} from "antd";
import Card from "./Card";
import DominosImg from '../Image/DominosPizza.jpeg';
import axios from 'axios';


const HomeCustomer: React.FC = () => {
    const [restaurants, setRestaurants] = useState<any[]>([]);
    const getRestaurantsUrl = 'http://localhost:5000/api/restaurantCategories/fast-food';

    const fetchRestaurantsData = async () => {
        try {
            axios.get(getRestaurantsUrl)
                .then(response => {
                    setRestaurants(response.data);
                })
        } catch (error) {
            console.error('Erreur lors de la récupération des restaurants :', error);
        }
        ;
    }

    useEffect(() => {
        fetchRestaurantsData();
    }, []);


    return (
        <div>
            <Row wrap={true} justify={"center"}>
                <p>Customer</p>
            </Row>
            <Row justify={"center"}>
                {restaurants.map((restaurant, index) => (
                    <Card
                        key={index}
                        title={restaurant.nameRestaurant}
                        description={restaurant.categories}
                        image={DominosImg}
                    />
                ))}
            </Row>
        </div>
    );
};


export default HomeCustomer;