import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RestaurantPage.css';
import DominosImg from '../Image/DominosPizza.jpeg';
import {FaStar , FaCartPlus} from "react-icons/fa";
import Button from "../Components/Button";
import {useNavigate} from "react-router-dom";
import {Col, Row} from "antd";
import Article from "../Components/Article";


function RestaurantPage() {
    const Restaurant = "Dominos'Pizza";
    const Adress = "Strasbourg Meinau";
    const distance = "4";
    const unit = "km";
    const estimedTime = "(15-30 min)";
    const icon = FaStar;
    const rate = "3,9";
    const reviews = "(172)";
    const subTitleCategories = "For you";
    const subTitle = "Best sellers";



    let navigate = useNavigate();

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
                    {Restaurant} - {Adress}
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