import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';
import Rating from '../Components/Rating';
import PizzaMan from '../Image/AstroPizzaRed.png';
import PizzaImage from '../Image/AstroEasyNoBg.png';
import PizzaRocket from '../Image/AstroRocketNoBg.png';
import PizzaKing from '../Image/AstroKingNoBg.png';
import RestaurantReview from '../Image/AstroReviewNoBg.png';
import {Col, Row} from "antd";

function Home() {
    const [rating, setRating] = React.useState(0);
    return (
        <div className="Home">
            <header className="Home-header">
                <Header/>
            </header>
            <body>
            <Row gutter={5} wrap={true} align={"middle"} justify={"center"}>
                <Col pull={5}>
                    <h1>
                        Be The Fastest <br/>In Delivering <br/>Your <span
                        style={{color: '#eb5757', fontSize: '40px', fontWeight: 'bold'}}>Food</span>
                    </h1>
                </Col>
                <Col pull={50}>
                    <img src={PizzaMan} alt="PizzaMan" className="RoundedImage"
                         style={{width: '200px', height: '200px', position: 'relative'}}/>
                </Col>
            </Row>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col style={{flexDirection: 'column', textAlign: 'center'}}>
                    <p style={{color: '#eb5757'}}>What we serve</p>
                    <h1 style={{fontWeight: 'bold'}}>Your Favorite Food<br/>Delivery Partner</h1>
                </Col>
                <Row gutter={16}>
                    <Col lg={8} className="mb-5" style={{textAlign: 'center', alignItems: 'center'}}>
                        <Col className="position-relative mb-4">
                            <img src={PizzaImage} alt="PizzaMan"/>
                        </Col>
                        <h2 style={{color: '#df7b07'}}>Best Quality</h2>
                        <p>Rebum lorem no eos ut ipsum</p>
                        <p>diam tempor sed rebum elitr ipsum</p>
                    </Col>
                    <Col lg={8} className="mb-5" style={{textAlign: 'center', alignItems: 'center'}}>
                        <Col className="position-relative mb-4">
                            <img className="img-fluid rounded w-100" src={PizzaRocket} alt="PizzaRocket"/>
                        </Col>
                        <h2 style={{color: '#df7b07'}}>Best Quality</h2>
                        <p>Rebum lorem no eos ut ipsum</p>
                        <p>diam tempor sed rebum elitr ipsum</p>
                    </Col>
                    <Col lg={8} className="mb-5" style={{textAlign: 'center', alignItems: 'center'}}>
                        <Col className="position-relative mb-4">
                            <img className="img-fluid rounded w-100" src={PizzaKing} alt="PizzaKing"/>
                        </Col>
                        <h2 style={{color: '#df7b07'}}>Best Quality</h2>
                        <p>Rebum lorem no eos ut ipsum</p>
                        <p>diam tempor sed rebum elitr ipsum</p>
                    </Col>
                </Row>
            </Row>

            <Row gutter={5} wrap={true} align={"middle"} justify={'center'}>
                <Col pull={2}>
                    <img src={RestaurantReview} alt="PizzaMan"
                         style={{width: '400px', height: '400px', position: 'relative'}}/>
                </Col>
                <Col pull={40}>
                    <p style={{color: '#eb5757'}}>WHAT THEY SAY</p>
                    <h2 style={{fontSize: '40px', fontWeight: 'bold'}}>
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
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
