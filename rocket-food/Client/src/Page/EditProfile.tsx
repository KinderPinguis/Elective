import React, {useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import AstroProfilNoBg from '../Image/AstroProfiNoBg.png';
import { Col, Row } from "antd";
import './EditProfile.css'
import CustomInput from "../Components/CustomInput";
import Button from "../Components/Button";
import axios from 'axios';

function EditProfile() {

    const [formData, setFormData] = useState<{ firstName: string; lastName: string; tel: string; }>
    ({
        firstName: '',
        lastName: '',
        tel: '',
    });

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const accessToken = localStorage.getItem('accessToken');

            if (!userId || !accessToken) {
                console.error('User ID or Access token is missing');
                return;
            }

            const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const userData = response.data;

            setFormData({
                firstName: userData.firstName,
                lastName: userData.lastName,
                tel: userData.tel,
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const onClickUpdate = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const accessToken = localStorage.getItem('accessToken');

            if (!userId || !accessToken) {
                console.error('User ID or Access token is missing');
                return;
            }

            await axios.put(`http://localhost:3000/api/users/${userId}`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <header>
                <Header/>
            </header>
            <body id="editProfile" className="NoSelect">
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <img id="imgProfile" src={AstroProfilNoBg}/>
                </Row>
                <Row wrap={true} align={"middle"} justify={"start"}>
                    <Col span={10}>
                        <CustomInput
                            label="First name"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col span={4}/>
                    <Col span={10}>
                        <CustomInput
                            label="Last name"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <CustomInput
                        label="Telephone"
                        name="tel"
                        type="text"
                        value={formData.tel}
                        onChange={handleInputChange}
                    />
                </Row>
                <Row id="buttonUpdate" wrap={true} align={"middle"} justify={"center"}>
                    <Button buttonText="Update" onClick={onClickUpdate}/>
                </Row>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default EditProfile;