import {Col, Row} from "antd";
import PizzaImage from "../Image/AstroEasyNoBg.png";
import PizzaRocket from "../Image/AstroRocketNoBg.png";
import PizzaKing from "../Image/AstroKingNoBg.png";
import RestaurantReview from "../Image/AstroReviewNoBg.png";
import ManAvatar from "../Image/ManAvatar2.jpg";
import React from "react";
import "../Components/About.css";
import ManAvatar1 from "../Image/ManAvatar.jpg";
import WomananAvatar from "../Image/WomanAvatar.jpg";
import Button from "./Button";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import signUp from "../Page/CreateAccount";

const About: React.FC = () => {

return(
    <div>
        <Row justify="space-around" style={{ width: '100%', margin: 0 }}>
            <Col id="ColInfos">
                <h1>What we serve</h1>
                <h3>Your Favorite Food<br />Delivery Partner</h3>
            </Col>
            <Row gutter={[88, 8]} className={'service-row'}>
                <Col flex="1" className={'service-container'}>
                    <Col>
                        <img src={PizzaImage} alt="PizzaImage"/>
                        <h2 id="SubTitle">Easy To Order</h2>
                        <p>You only need a few steps in</p>
                        <p>ordering food at Rocket Food</p>
                    </Col>
                </Col>
                <Col flex="1" className={'service-container'}>
                    <Col>
                        <img src={PizzaRocket} alt="PizzaRocket"/>
                        <h2 id="SubTitle">Fastest Delivery</h2>
                        <p>Delivery that is always ontime</p>
                        <p>even faster and reliable</p>
                    </Col>
                </Col>
                <Col flex="1" className={'service-container'}>
                    <Col>
                        <img src={PizzaKing} alt="PizzaKing"/>
                        <h2 id="SubTitle">Best Quality</h2>
                        <p>Not only fast for us, quality is also</p>
                        <p>number one at Rocket Food</p>
                    </Col>
                </Col>
            </Row>
        </Row>
        <Row wrap={true} justify={'center'}>
            <Col className={"review-image"}>
                <img src={RestaurantReview} alt="RestaurantReview"/>
            </Col>
                <Col className={"reviewers"}>
                    <h3>Our Reviewers</h3>
                    <Col className="review">
                        <img key={1} src={ManAvatar1} alt="ManAvatar2Image" className="image-review"/>
                        <img key={2} src={WomananAvatar} alt="WomananAvatarImage" className="image-review"/>
                        <img key={3} src={ManAvatar} alt=" ManAvatarImage" className="image-review"/>
                        <button className="review-button">28k+</button>
                    </Col>
                </Col>
            <Col style={{marginLeft:'40px'}}>
                <p style={{fontWeight:'bold', color:'#eb5757', marginTop: '50px'}}>WHAT THEY SAY</p>
                <h2 id={'Heading'}>What Our Costumer<br/>Say About Us</h2>
                <p>Rebum lorem no eos ut ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr ipsum</p>
                <Col className={"review-container"}>
                    <img src={ManAvatar} alt= "ManAvatarReview" style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
                    <p className={"text-right"} style={{color:"#df7b07"}}>
                        JOHN SMITH<span style={{display: "flex", fontWeight:"normal"}}>Food Enthusiast</span>
                    </p>
                </Col>
                <Col className="ArrowButtonStyle">
                    <Button buttonImage={FaAngleLeft} onClick={signUp}/>
                    <Button buttonImage={FaAngleRight} onClick={signUp}/>
                </Col>
            </Col>
        </Row>
    </div>
    );
    };
export default About;