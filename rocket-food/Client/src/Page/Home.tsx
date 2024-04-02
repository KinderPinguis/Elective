import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <Header />
            </header>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;