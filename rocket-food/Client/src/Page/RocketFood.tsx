import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from "../Components/About";

function RocketFood() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
            <About/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default RocketFood;