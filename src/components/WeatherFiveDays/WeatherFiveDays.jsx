import React from 'react';
import {useWeather} from "../../services/Fetching/Fetching";

const WeatherFiveDays = () => {
    const {weatherFiveDays} = useWeather()
    console.log(weatherFiveDays)
    return (
        <div>
            5 days
        </div>
    );
};

export default WeatherFiveDays;