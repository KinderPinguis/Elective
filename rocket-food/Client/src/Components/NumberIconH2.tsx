import React, { forwardRef, ForwardedRef } from 'react';
import "./NumberIconH2.css"
import { Row } from "antd";

interface NumberIconeH2Props {
    h2Text: string;
    numberIcone: number;
    lighted?: boolean;
    onClick?: () => void;
}

const NumberIconH2: React.ForwardRefRenderFunction<HTMLDivElement, NumberIconeH2Props> = ({ h2Text, numberIcone, lighted = false, onClick }, ref) => {
    return (
        <div>
            <Row wrap={true} align={"middle"} justify={"start"} onClick={onClick} className={lighted ? 'lighted' : ''} ref={ref}>
                <p id="numberIcone">{numberIcone}</p><h2>{h2Text}</h2>
            </Row>
        </div>
    );
};

export default forwardRef(NumberIconH2);
