import React from 'react';
import Slider from '@mui/material/Slider';

const SliderDate = () => {
    return (
        <>
            <Slider
                aria-label="Restricted values"
                defaultValue={20}
                // valueLabelFormat={valueLabelFormat}
                // getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                // marks={marks}
            />
        </>
    );
}

export default SliderDate;