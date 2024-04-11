import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DeliveryService from "../Components/DeliveryService";

const ServiceDelivery: React.FC = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
            <DeliveryService/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ServiceDelivery;