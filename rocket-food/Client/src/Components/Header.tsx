import React from 'react';
import HomeButton from './HomeButton';
import Button from './Button';
import './Header.css';
import '../Main.css'

const Header: React.FC = () => {
    return (
        <header>
            <div>
                <HomeButton/>

                <div id="navMenu">
                    <nav>
                        <ul>
                            <li><a href="#">Why Rocket Food</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>

                    <Button buttonText="Login"/>
                </div>
            </div>
        </header>
    );
};

export default Header;