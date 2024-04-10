import React from 'react';
import {Row} from "antd";
import './ErrorText.css';

interface ErrorTextProps {
    errorTitle: string;
    errorText: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ errorTitle, errorText }) => {
    return (
        <div>
            <Row>
                <p id="errorText">{errorTitle} : {errorText}</p>
            </Row>
        </div>
    );
};

export default ErrorText;