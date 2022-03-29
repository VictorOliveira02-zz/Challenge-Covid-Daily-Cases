import React, { useState } from 'react';
import moment from 'moment';
import Slider from '@mui/material/Slider';
import { Container } from './styles';
import { dateInNumber, marks, dateNumberInString } from './utils';


const SliderDate = () => {
    const [value, setValue] = useState();

    const minDate = marks[0].value;
    const maxDate = marks[marks.length - 1].value;
    const oneDay = 86400000 // One day in milliseconds

    console.log(value)

    return (
        <Container>
            <Slider
                step={oneDay}
                marks={marks}
                min={minDate}
                max={maxDate}
                valueLabelFormat={(value) => dateNumberInString(value)}
                defaultValue={dateInNumber(moment('01/02/2020').format('DD/MM/YYYY'))}
                valueLabelDisplay="on"
                onChange={(e, value) => setValue(dateNumberInString(value))}
            />
        </Container>
    );
}

export default SliderDate;