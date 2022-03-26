import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import { Container } from './styles';

const Map = () => {
    const [content, setContent] = useState("");
    return (
        <Container>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </Container>
    );
}

export default Map;