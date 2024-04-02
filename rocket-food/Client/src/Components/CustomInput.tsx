import React from 'react';
import './CustomInput.css'

interface InputTextProps {
    label?: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div id="customInput">
            {label && <p>{label}</p>}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputText;