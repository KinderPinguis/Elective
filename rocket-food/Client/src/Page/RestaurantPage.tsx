import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RestaurantPage.css';
import DominosImg from '../Image/DominosPizza.jpeg';
import {FaStar, FaCartPlus} from "react-icons/fa";
import Button from "../Components/Button";
import {useNavigate, useParams} from "react-router-dom";
import {Col, Row} from "antd";
import Article from "../Components/Article";
import axios from "axios";


function RestaurantPage() {
    let navigate = useNavigate();
    let { id } = useParams();

    interface Restaurant {
        nameRestaurant: string;
        streetAddress: string;
        country: string;
        city: string;
        creationDate: string;
        idRestaurateur: string;
        phoneNumber: string;
        email: string;
        password: string;
        categories: string;
    }

    const [restaurant, setRestaurant] = useState<Restaurant>({
        nameRestaurant: '',
        streetAddress: '',
        country: '',
        city: '',
        creationDate: '',
        idRestaurateur: '',
        phoneNumber: '',
        email: '',
        password: '',
        categories: ''
    });

    /*const idRestaurant = "6615cd6c2ca27e113576f8fd";
    const getRestaurantUrl = `http://localhost:5000/api/restaurant/${idRestaurant}`;*/

    const fetchRestaurantData = async () => {
        try {
            axios.get(`http://localhost:5000/api/restaurant/${id}`)
                .then(response => {
                    setRestaurant(response.data);
                })
        } catch (error) {
            console.error('Erreur lors de la récupération des restaurants :', error);
        }
    }

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const distance = "4";
    const unit = "km";
    const estimedTime = "(15-30 min)";
    const icon = FaStar;
    const rate = "3,9";
    const reviews = "(172)";
    const subTitleCategories = "For you";
    const subTitle = "Best sellers";

    const goToStar = () => {
        navigate("/Star");
    };

    return (
        <div id={"restaurantPage"}>
            <header>
                <Header/>
            </header>
            <body>
            <img id="Img" src={DominosImg} alt=""/>
            <div id={"Page"}>
                <h1>
                    {restaurant.nameRestaurant} - {restaurant.streetAddress} {restaurant.city}
                </h1>
                <h3> A {distance} {unit} {estimedTime}</h3>
                <Button onClick={goToStar} buttonImage={icon}/>
                <h4>{rate} {reviews}</h4>
                <Row>
                    <Col span={6}>
                        <h1>
                            {subTitleCategories}
                        </h1>
                    </Col>
                    <Col span={18}>
                        <h1>
                            {subTitle}
                        </h1>
                        <Row>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                            <Article title={"Pizza"} image={DominosImg} price={5} money={"€"} cartImage={FaCartPlus}/>
                        </Row>
                    </Col>
                </Row>
            </div>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default RestaurantPage;