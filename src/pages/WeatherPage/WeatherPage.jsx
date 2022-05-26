import React from 'react';
import Nav from "../../components/UI/Navbar/Nav";


const WeatherPage = ({getCity}) => {
    return (
        <div>
            <Nav getCity={getCity}/>


        </div>
    );
};

export default WeatherPage;