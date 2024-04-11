import React from 'react';
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact: React.FC = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
                <ContactForm/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Contact;