import React from 'react';
import HomeButton from './HomeButton';
import './Footer.css';
import '../Main.css'
import Button from './Button';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <HomeButton/>
                <div id="footerMenu">

                    <nav>
                        <ul id="AboutMenu">
                            <h3>About</h3>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Menu</a></li>
                        </ul>
                        <ul id="CompagnyMenu">
                            <h3>Compagny</h3>
                            <li><a href="#">Why Rocket Food ?</a></li>
                            <li><a href="#">Partner With Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <ul id="SupportMenu">
                            <h3>Support</h3>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                        <ul id="GetMenu">
                        <h3>Get in Touch</h3>
                            <p>Question or feedback?</p>
                            <p>We'd love to hear from you</p>
                            <Button buttonText={"Email Address"}/>
                        </ul>
                    </nav>

                </div>

            </div>
        </footer>
    );
};

export default Footer;