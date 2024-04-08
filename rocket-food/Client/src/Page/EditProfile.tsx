import React, {useState} from 'react';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import AstroProfilNoBg from '../Image/AstroProfiNoBg.png';
import { Col, Row } from "antd";
import './EditProfile.css'
import CustomInput from "../Components/CustomInput";
import Button from "../Components/Button";

function EditProfile() {

    const [formData, setFormData] = useState<{ firstName: string; lastName: string; tel: string; }>
    ({
        firstName: '',
        lastName: '',
        tel: '',
    });

    const onClickUpdate = () => {

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
                    <img id="imgProfile" alt"" src={AstroProfilNoBg}/>
                </Row>
                <Row wrap={true} align={"middle"} justify={"start"}>
                    <Col span={8}>
                        <CustomInput
                            label="First name"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col span={8}/>
                    <Col span={8}>
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
                <Row wrap={true} align={"middle"} justify={"center"}>
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