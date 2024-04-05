import React from 'react';
import Header from '../Components/Header';
import './Home.css';
import '../Main.css';
import Rating from '../Components/Rating';
import PizzaMan from '../Image/AstroPizzaRed.png';
import PizzaImage from '../Image/AstroEasyNoBg.png';
import PizzaRocket from '../Image/AstroRocketNoBg.png';
import PizzaKing from '../Image/AstroKingNoBg.png';
import RestaurantReview from '../Image/AstroReviewNoBg.png';
import {Col, Row} from "antd";
import Footer from '../Components/Footer';


function Home() {
    const [rating, setRating] = React.useState(0);



    return (
        <div className="Home">
            <header>
                <Header/>
            </header>
            <body>
            <Row wrap={true} justify={"center"}>
                <Col span={8}>
                    <h1>
                        Be The Fastest <br/>In Delivering<br/> Your <span id={"Title"}>Food</span>
                    </h1>
                </Col>
                <Col>
                    <img src={PizzaMan} alt="PizzaMan" className="RoundedImage" id={"PizzaMan"}/>
                </Col>
            </Row>
            <Row wrap={true} justify={"center"}>
                <Col id={"ColInfos"}>
                    <h1 id={"Title"}>What we serve</h1>
                    <h1>Your Favorite Food<br/>Delivery Partner</h1>
                </Col>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <Col>
                            <img src={PizzaImage} alt="PizzaImage"/>
                        </Col>
                        <h2 id={"SubTitle"}>Best Quality</h2>
                        <p>Rebum lorem no eos ut ipsum</p>
                        <p>diam tempor sed rebum elitr ipsum</p>
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                        <Col>
                            <img src={PizzaRocket} alt="PizzaRocket"/>
                        </Col>
                        <h2 id={"SubTitle"}>Best Quality</h2>
                        <p>Rebum lorem no eos ut ipsum</p>
                        <p>diam tempor sed rebum elitr ipsum</p>
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                        <Col>
                            <img src={PizzaKing} alt="PizzaKing"/>
                        </Col>
                        <h2 id={"SubTitle"}>Best Quality</h2>
                        <p>Rebum lorem no eos ut ipsum</p>
                        <p>diam tempor sed rebum elitr ipsum</p>
                    </Col>
                </Row>
            </Row>

            <Row wrap={true} justify={'center'}>
                <Col >
                    <img src={RestaurantReview} alt="RestaurantReview"
                         style={{width: '400px', height: '400px', position: 'relative'}}/>
                </Col>
                <Col>
                    <h1 id={"Title"}>WHAT THEY SAY</h1>
                    <h2>
                        What Our Costumer<br/>Say About Us
                    </h2>
                    <p>Rebum lorem no eos ut ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr ipsum</p>
                    <Rating
                        count={5}
                        value={rating}
                        edit={true}
                        onChange={(value) => setRating(value)}
                    />
                    <p>
                        <b>Value: </b>
                        {rating} stars
                    </p>
                </Col>
            </Row>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Home;
