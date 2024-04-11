import React from 'react';
import RestaurantService from "../Components/RestaurantService";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ServiceRestaurant: React.FC = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
            <RestaurantService/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ServiceRestaurant;