import React from 'react';
import SliderDate from '../../components/SliderDate';
import Map from '../../components/Map';
import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <h1>Covid Daily Cases</h1>
            <SliderDate />
            <Map />
        </Container>
    );
}

export default Home;