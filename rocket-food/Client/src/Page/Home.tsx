import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';
import PizzaMan from '../Image/AstroPizzaRed.png';
import {Col, Row} from "antd";

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <Header/>
            </header>
            <body>
            <Row wrap={true} align={"middle"} justify={"center"}>
                <Col pull={5}>
                    <h1>
                        Be The Fastest In Delivering Your Food
                    </h1>
                </Col>
                <Col pull={10}>
                    <img src={PizzaMan} alt="PizzaMan" className="RoundedImage"/>
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