import React from 'react';
import './CustomInput.css'

interface CustomInputProps {
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, type, placeholder, value, onChange, onKeyPress }) => {

    return (
        <div id="customInput">
            {label && <p>{label}</p>}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    );
};

export default CustomInput;