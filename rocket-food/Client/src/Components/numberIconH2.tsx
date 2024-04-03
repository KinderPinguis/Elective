import React from 'react';
import "./numberIconeH2.css"
import {Row} from "antd";

interface NumberIconeH2Props {
    h2Text: string;
    numberIcone: number;
    lighted?: boolean;
    onClick?: () => void;
}

const NumberIconeH2: React.FC<NumberIconeH2Props> = ({ h2Text, numberIcone, lighted = false, onClick }) => {
    return (
        <div>
            <Row wrap={true} align={"middle"} justify={"start"} onClick={onClick} className={lighted ? 'lighted' : ''}>
                <p id="numberIcone">{numberIcone}</p><h2>{h2Text}</h2>
            </Row>
        </div>
    );
};

export default NumberIconeH2;