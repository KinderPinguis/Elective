import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import './Home.css';
import '../Main.css';
import Footer from '../Components/Footer';
import HomeNotLogIn from "../Components/HomeNotLogIn";

function Home() {
    return (
        <div className="Home">
            <header>
                <Header/>
            </header>
            <body>
            <HomeNotLogIn/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Home;
