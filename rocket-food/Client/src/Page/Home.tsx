import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import GetAppImg from "../Image/AppMobile_accueil.png";
import Button from "../Components/Button";
import ManAvatar from "../Image/ManAvatar2.jpg";
import WomananAvatar from "../Image/WomanAvatar.jpg";
import ManAvatar1 from "../Image/ManAvatar.jpg";
import AstroBoba from "../Image/AstroBoba.jpg";
import signUp from "../Page/CreateAccount";
//import Footer from '../Components/Footer';

function Home() {
    let navigate = useNavigate();

    const goToPlayStore = () => {
        navigate("www.play-store.com");
    };
    return (
        <div className="Home">
            <header>
                <Header/>
            </header>
            <body>
            <Row wrap={true} justify={"center"}>
                <Col span={16}>
                    <h1 style={{fontWeight:'bold', fontSize:'80px'}}>
                        Be The Fastest <br/>In Delivering<br/> Your <span id={"Title"}>Food</span>
                    </h1>
                    <Button buttonText={"Get Started"} onClick={signUp}></Button>
                    <Col className={"review-container"}>
                        <img src={AstroBoba} alt= "AstroBoba" style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
                        <p className={"text-right"} style={{fontWeight: "bold"}}>
                            Our Happy Customer <br/>
                            <Rating count={1}></Rating> 4,7
                            <span style={{textAlign:'left', color:'#df7b07'}}> (27.4k Review)</span>
                        </p>
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
                <Row gutter={[112, 8]} style={{ marginTop: '190px' }}>
                    <Col flex="1" style={{ textAlign: 'center' }}>
                        <Col>
                            <img src={PizzaImage} alt="PizzaImage" style={{ width: "100px", height: "100px" }} />
                            <h2 id="SubTitle">Best Quality</h2>
                            <p>Rebum lorem no eos ut ipsum</p>
                            <p>diam tempor sed rebum elitr ipsum</p>
                        </Col>
                    </Col>
                    <Col flex="1" style={{ textAlign: 'center' }}>
                        <Col>
                            <img src={PizzaRocket} alt="PizzaRocket" style={{ width: "100px", height: "100px" }} />
                            <h2 id="SubTitle">Best Quality</h2>
                            <p>Rebum lorem no eos ut ipsum</p>
                            <p>diam tempor sed rebum elitr ipsum</p>
                        </Col>
                    </Col>
                    <Col flex="1" style={{ textAlign: 'center' }}>
                        <Col>
                            <img src={PizzaKing} alt="PizzaKing" style={{ width: "100px", height: "100px" }} />
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
                <Col className={"review-container"}>
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
                    <h2 id={'Heading'}>
                        What Our Costumer<br/>Say About Us
                    </h2>
                    <p>Rebum lorem no eos ut ipsum<br/>diam tempor sed rebum elitr ipsum<br/>diam tempor sed rebum elitr
                        ipsum<br/>diam tempor sed rebum elitr ipsum</p>
                    <Col className={"review-container"}>
                        <img src={ManAvatar} alt= "ManAvatarReview" style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
                        <p className={"text-right"} style={{fontWeight: "bold", color:"#df7b07"}}>
                            JOHN SMITH<span style={{display: "flex", fontWeight:"normal"}}>Food Enthusiast</span>
                        </p>
                    </Col>
                    <Col>
                    <Rating count={5} size={20}/>
                    </Col>
                </Col>
            </Row>
            <Row wrap={true} justify={"center"}>
                <Col className={'get-app'}>
                    <Col id={"Text"}>
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

export default Home;
