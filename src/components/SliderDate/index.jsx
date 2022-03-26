import React from 'react';
import Slider from '@mui/material/Slider';
import { Container } from './styles';

const SliderDate = () => {
    return (
        <Container>
            <Slider
                aria-label="Restricted values"
                defaultValue={20}
                // valueLabelFormat={valueLabelFormat}
                // getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
            // marks={marks}
            />
        </Container>
    );
}

export default SliderDate;