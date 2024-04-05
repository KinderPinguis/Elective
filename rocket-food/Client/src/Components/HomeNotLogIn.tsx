import {Col, Row} from "antd";
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
export default HomeNotLogIn;