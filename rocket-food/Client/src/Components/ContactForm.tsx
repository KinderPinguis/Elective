import React, { useState } from 'react';
import {Col, Row} from "antd";
import './ContactForm.css';

//const root = ReactDOM.createRoot(document.getElementById("root"));
const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        mobile: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log(formData);
        // Reset form after submission (optional)
        setFormData({ name: '', email: '', message: '' , mobile:''});
    };

    return (
        <>
            <h1 className="contact-container">NEED ANY HELP, WE ARE HERE TO ASSIST YOU</h1>
            <h2 className="text-center">Contact us</h2>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>

                    <Row>
                        <Col>
                            <label>Name:</label>
                            <input
                                type="text"
                                placeholder="Your name.."
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Email:</label>
                            <input
                                type="text"
                                placeholder="Your email.."
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Mobile:</label>
                            <input
                                type="text"
                                placeholder="Your mobile number.."
                                name="mobile"
                                value={formData.mobile || ''}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Message:</label>
                            <textarea
                                rows={4}
                                placeholder="Write something.."
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <input type="submit" value="Submit" />
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    );
};

export default ContactForm;