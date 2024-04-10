import React, { useState } from 'react';
import './ContactForm.css';
import {FormAllData} from '../CustomTypes';
const ContactForm: React.FC = () => {
    const [formAllData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formAllData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can perform actions like sending the form data to your server
        console.log(formAllData);
        // Reset the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className={"contact-container"}>
            <h1>NEED ANY HELP, WE ARE HERE FOR YOU</h1>
            <h2 className={"contact-heading"}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className={"form-group"}>
                    <label htmlFor="name" className={"form-label"}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formAllData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className={"form-label"}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formAllData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={"form-group"}>
                    <label htmlFor="message" className={"form-label"}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formAllData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;