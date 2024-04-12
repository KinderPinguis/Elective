/*import {Col, Row} from "antd";
import PizzaMan from "../Image/AstroPizzaRed.png";
import PizzaImage from "../Image/AstroEasyNoBg.png";
import PizzaRocket from "../Image/AstroRocketNoBg.png";
import PizzaKing from "../Image/AstroKingNoBg.png";
import RestaurantReview from "../Image/AstroReviewNoBg.png";
import ManAvatar from "../Image/ManAvatar2.jpg";
import Rating from "./Rating";
import Button from "./Button";
import GetAppImg from "../Image/AppMobile_accueil.png";
import React from "react";
import {useNavigate} from "react-router-dom";
import './HomeNotLogIn.css';

const HomeNotLogIn: React.FC = () => {
    const [rating, setRating] = React.useState(0);
    let navigate = useNavigate();

    const goToPlayStore = () => {
        navigate("www.play-store.com");
    };
    return (
        <div>
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
                <Row style={{marginTop: '150px'}}>
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
                <Col className={"review-image"}>
                    <img src={RestaurantReview} alt="RestaurantReview"/>
                </Col>
                <Col className={"review-container"}>
                    <h3>Our Reviewers</h3>
                </Col>
                <Col>
                    <h1 id={"Title"}>WHAT THEY SAY</h1>
                    <h2>
                        What Our Costumer<br/>Say About Us
                    </h2>
                    <p>Rebum lorem no eos ut ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr
                        ipsum<br/>diam tempor sed rebum elitr ipsum</p>
                    <Col className={"review-container"}>
                        <img src={ManAvatar} alt="ManAvatarReview" className={"RoundedImage"}/>
                        <p className={"text-right"} style={{fontWeight: "bold", color: "#df7b07"}}>
                            JOHN SMITH<span style={{display: "flex", fontWeight: "normal"}}>Food Enthusiast</span>
                        </p>
                    </Col>
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
            <Row wrap={true} justify={"center"}>
                <Col className={'get-app'}>
                    <Col id={"Text"}>
                        <p style={{color: "#eb5757", fontWeight: "bold"}}>DOWNLOAD APP</p>
                        <h2>Get Started With <br/>
                            <span id={"LogoName"}>Rocket Food</span> Today!<br/>
                        </h2>
                        <p>Discover Rocket Food wherever and whenever <br/>and get your food delivered quickly.</p>
                        <Button buttonText={"Download App"} onClick={goToPlayStore}></Button>
                    </Col>
                    <Col className={'get-app'}>
                        <img src={GetAppImg} alt="Get App" className={"image-container"}/>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};
export default HomeNotLogIn;*/


import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import '../Main.css';
import PizzaMan from '../Image/AstroPizzaRed.png';
import PizzaImage from '../Image/AstroEasyNoBg.png';
import PizzaRocket from '../Image/AstroRocketNoBg.png';
import PizzaKing from '../Image/AstroKingNoBg.png';
import RestaurantReview from '../Image/AstroReviewNoBg.png';
import {Col, Row} from "antd";
import GetAppImg from "../Image/AppMobile_accueil.png";
import Button from "../Components/Button";
import ManAvatar from "../Image/ManAvatar2.jpg";
import WomananAvatar from "../Image/WomanAvatar.jpg";
import ManAvatar1 from "../Image/ManAvatar.jpg";
import AstroBoba from "../Image/AstroBoba.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import './HomeNotLogIn.css';
import Review from '../Components/Review';
//import Footer from '../Components/Footer';

function HomeNotLogIn() {
    let navigate = useNavigate();

    const goToPlayStore = () => {
        navigate("www.play-store.com");
    };
    const [ reviewIndex, setReviewIndex ] = useState(0)

    const reviewsData = [{ name: "JOHN SMITH", image: ManAvatar, description:"Food Enthousiast", rating:4}, { name: "ANNE-MARIE", image: WomananAvatar, description:"Vegan", rating: 3}, {name: "BRYAN FREYER", image: ManAvatar1, description:"Burger Lover", rating:5}]


    const moveToBack = () => {
        if (reviewIndex > 0) {
            setReviewIndex(reviewIndex - 1)
        }
        else {
            setReviewIndex(reviewsData.length-1);
        }
    }

    const moveToNext = () => {
        if (reviewIndex < reviewsData.length-1) {
            setReviewIndex(reviewIndex + 1)
        }
        else {
            setReviewIndex(0);
        }
    }

    const onClickGetStarted = () => {
        navigate('/CreateAccount');
    }

    return (
        <div className="Home">
            <header>
                <Header/>
            </header>
            <body>
            <Row wrap={true} justify={"center"}>
                <Col span={16}>
                    <h1 style={{fontWeight:'bold', fontSize:'72px'}}>
                        Be The Fastest <br/>In Delivering<br/> Your <span id={"Title"}>Food</span>
                    </h1>
                    <Col className="review-container">
                        <Button buttonText={"Get Started"} onClick={onClickGetStarted}></Button>
                        <Col className={"review-container"}>
                            <img src={AstroBoba} alt= "AstroBoba" style={{width: "60px", height: "60px", borderRadius: "50%", padding: "5px"}}/>
                            <p className={"text-right"}>
                                Our Happy Customer <br/>
                                <Col className={"review-container"}>
                                    <FaStar className={"star-icon"}/> 4,7
                                    <span> (27.4k Review)</span>
                                </Col>
                            </p>
                        </Col>
                    </Col>
                    <p>Our job is filling your tummy with delicious food <br/> and with fast and free delivery</p>
                </Col>
                <Col>
                    <img src={PizzaMan} alt="PizzaMan" className="RoundedImage" id={"PizzaMan"}/>
                </Col>
            </Row>
            <Row justify="space-around" style={{ width: '100%', margin: 0 }}>
                <Col id="ColInfos">
                    <h3 style={{color:'#eb5757'}}>What we serve</h3>
                    <h1>Your Favorite Food<br />Delivery Partner</h1>
                </Col>
                <Row gutter={[88, 8]} style={{ marginTop: '190px' }}>
                    <Col flex="1" style={{ textAlign: 'center' }}>
                        <Col>
                            <img src={PizzaImage} alt="PizzaImage" style={{ width: "50%", height: "50%" }} />
                            <h2 id="SubTitle">Best Quality</h2>
                            <p>Rebum lorem no eos ut ipsum</p>
                            <p>diam tempor sed rebum elitr ipsum</p>
                        </Col>
                    </Col>
                    <Col flex="1" style={{ textAlign: 'center' }}>
                        <Col>
                            <img src={PizzaRocket} alt="PizzaRocket" style={{ width: "50%", height: "50%" }} />
                            <h2 id="SubTitle">Best Quality</h2>
                            <p>Rebum lorem no eos ut ipsum</p>
                            <p>diam tempor sed rebum elitr ipsum</p>
                        </Col>
                    </Col>
                    <Col flex="1" style={{ textAlign: 'center' }}>
                        <Col>
                            <img src={PizzaKing} alt="PizzaKing" style={{ width: "50%", height: "50%" }} />
                            <h2 id="SubTitle">Best Quality</h2>
                            <p>Rebum lorem no eos ut ipsum</p>
                            <p>diam tempor sed rebum elitr ipsum</p>
                        </Col>
                    </Col>
                </Row>
            </Row>
            <Row wrap={true} justify={'center'}>
                <Col className={"review-image"}>
                    <img src={RestaurantReview} alt="RestaurantReview"/>
                </Col>
                <div className={"reviewers"}>
                    <Col>
                        <h3>Our Reviewers</h3>
                        <Col className="review">
                            <img key={1} src={ManAvatar1} alt="ManAvatar2Image" className="image-review"/>
                            <img key={2} src={WomananAvatar} alt="WomananAvatarImage" className="image-review"/>
                            <img key={3} src={ManAvatar} alt=" ManAvatarImage" className="image-review"/>
                            <button className="review-button">28k+</button>
                        </Col>
                    </Col>
                </div>
                <Col style={{marginLeft:'40px'}}>
                    <p style={{fontWeight:'bold', color:'#eb5757', marginTop: '50px'}}>WHAT THEY SAY</p>
                    <h2 id={'Heading'}>What Our Costumer<br/>Say About Us</h2>
                    <p>Rebum lorem no eos ut ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr ipsum</p>
                    <Review
                        name={reviewsData[reviewIndex].name}
                        image={reviewsData[reviewIndex].image}
                        description={reviewsData[reviewIndex].description}
                        rating={reviewsData[reviewIndex].rating}
                    />
                    <Col className="ArrowButtonStyle">
                        <Button buttonImage={FaAngleLeft} onClick={moveToBack}/>
                        <Button buttonImage={FaAngleRight} onClick={moveToNext}/>
                    </Col>
                </Col>
            </Row>
            <Row wrap={true} justify={"center"}>
                <Col className={'get-app'}>
                    <Col id={"Text-app"}>
                        <p style={{color: "#eb5757", fontWeight: "bold"}}>DOWNLOAD APP</p>
                        <h1>Get Started With <br/>
                            <span id={"LogoName"}>Rocket Food</span> Today!<br/>
                        </h1>
                        <p>Discover Rocket Food wherever and whenever <br/>and get your food delivered quickly.</p>
                        <Button buttonText={"Download App"} onClick={goToPlayStore}></Button>
                    </Col>
                    <Col className={'get-app'}>
                        <img src={GetAppImg} alt="Get App" className={"image-container"}/>
                    </Col>
                </Col>
            </Row>
            </body>
        </div>
    );
}

export default HomeNotLogIn;

