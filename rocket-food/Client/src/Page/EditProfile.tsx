import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import AstroProfilNoBg from '../Image/AstroProfiNoBg.png';
import { FaRegTrashAlt } from "react-icons/fa";
import { Col, Row, Modal } from "antd";
import './EditProfile.css'
import CustomInput from "../Components/CustomInput";
import Button from "../Components/Button";
import { isTokenExpired, refreshToken } from '../MainFonction';
import axios from 'axios';
import ErrorText from "../Components/ErrorText";

function EditProfile() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState<{ firstName: string; lastName: string; tel: string; }>
    ({
        firstName: '',
        lastName: '',
        tel: '',
    });

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const userId = localStorage.getItem('userId');
            let accessToken = localStorage.getItem('accessToken');

            if (!userId || !accessToken) {
                console.error('User ID or Access token is missing');
                return;
            }

            if (isTokenExpired(accessToken)) {
                await refreshToken("http://localhost:3000");
                accessToken = localStorage.getItem('accessToken');
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

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const onClickDelete = async () => {
        try {
            const userId = localStorage.getItem('userId');
            let accessToken = localStorage.getItem('accessToken');

            if (!userId || !accessToken) {
                console.error('User ID or Access token is missing');
                return;
            }

            if (isTokenExpired(accessToken)) {
                await refreshToken("http://localhost:3000");
                accessToken = localStorage.getItem('accessToken');
            }

            await axios.delete(`http://localhost:3000/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("userId");
            localStorage.removeItem("typeUser");
            navigate("/LogIn");
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const onClickUpdate = async () => {
        try {
            const userId = localStorage.getItem('userId');
            let accessToken = localStorage.getItem('accessToken');
            const errorTextElement = document.getElementById('errorText');

            if (!userId || !accessToken) {
                console.error('User ID or Access token is missing');
                return;
            }

            if (isTokenExpired(accessToken)) {
                await refreshToken("http://localhost:3000");
                accessToken = localStorage.getItem('accessToken');
            }

            await axios.put(`http://localhost:3000/api/users/${userId}`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (errorTextElement) {
                errorTextElement.style.display = 'block';
            }

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
                <Row wrap={true} align={"middle"} justify={"end"}>
                    <Button onClick={showDeleteModal} buttonImage={FaRegTrashAlt}/>
                </Row>
                <Row wrap={true} align={"middle"} justify={"center"}>
                    <img id="imgProfile" src={AstroProfilNoBg}/>
                </Row>
                <Row className="UpdateSuccess" wrap={true} align={"middle"} justify={"center"}>
                    <ErrorText errorTitle="Update successful" errorText="your data has been updated" />
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
                <Modal
                    title="Confirm delet your account"
                    visible={isDeleteModalVisible}
                    onOk={onClickDelete}
                    onCancel={handleCancelDelete}
                    className="DeleteModal"
                    okText="Delete"
                >
                    <p>Are you sure you want to delete your account ?</p>
                </Modal>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default EditProfile;