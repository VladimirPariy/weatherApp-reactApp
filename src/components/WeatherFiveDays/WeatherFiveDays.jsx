import React from 'react';
import {useContext} from "react";
import {WeatherContext} from "../../services/Fetching/Fetching";

const WeatherFiveDays = () => {
    const {weatherFiveDays} = useContext(WeatherContext)
    console.log(weatherFiveDays)
    return (
        <div>
            5 days
        </div>
    );
};

export default WeatherFiveDays;