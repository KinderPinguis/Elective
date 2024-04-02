import React, { useState, useRef } from 'react';
import { Row, Col } from 'antd';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CustomInput from './CustomInput';
import './PasswordInput.css'

interface PasswordInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, value, onChange }) => {
    const [passwordHidden, setPasswordHidden] = useState(true);
    const passwordRef = useRef<HTMLInputElement>(null);

    const onClickHide = () => {
        setPasswordHidden(!passwordHidden);

        if (passwordRef.current) {
            passwordRef.current.type = passwordHidden ? 'text' : 'password';
        }
    };

    return (
        <Row id="passwordInput" wrap={true} align={'middle'} justify={'start'}>
            <Col id="label" span={12}>
                <p>{label}</p>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
                <div id="hidden" onClick={onClickHide}>
                    {passwordHidden ? <FaEye /> : <FaEyeSlash />}
                    <p style={{ marginLeft: '10px' }}>{passwordHidden ? 'Show' : 'Hide'}</p>
                </div>
            </Col>
            <CustomInput
                name={name}
                type={passwordHidden ? 'password' : 'text'}
                placeholder="Password"
                value={value}
                onChange={onChange}
            />
        </Row>
    );
};

export default PasswordInput;