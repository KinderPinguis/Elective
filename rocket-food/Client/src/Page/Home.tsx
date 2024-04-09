import React from 'react';
import Header from '../Components/Header';
//import './Home.css';
import '../Main.css';
import Footer from '../Components/Footer';
import HomeNotLogIn from "../Components/HomeNotLogIn";
/*import HomeCustomer from "../Components/HomeCustomer";
import HomeRestaurateur from "../Components/HomeRestaurateur";
import HomeDelivery from "../Components/HomeDelivery";*/

function Home() {
    const typeUser = localStorage.getItem("typeUser");

    if (!typeUser) {
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
    }

    switch (typeUser) {
        case "customer":
            return (
                <div className="Home">
                    <header>
                        <Header/>
                    </header>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            );
        case "restaurateur":
            return (
                <div className="Home">
                    <header>
                        <Header/>
                    </header>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            );
        case "delivery":
            return (
                <div className="Home">
                    <header>
                        <Header/>
                    </header>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            );
        default:
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
    }
}

export default Home;
