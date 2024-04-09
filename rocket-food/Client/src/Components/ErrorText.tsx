import React from 'react';
import {Row} from "antd";
import './ErrorText.css';

interface NumberIconeH2Props {
    errorTitle: string;
    errorText: string;
}

const ErrorText: React.FC<NumberIconeH2Props> = ({ errorTitle, errorText }) => {
    return (
        <div>
            <Row>
                <p id="errorText">{errorTitle} : {errorText}</p>
            </Row>

        </div>
    );
};

export default ErrorText;