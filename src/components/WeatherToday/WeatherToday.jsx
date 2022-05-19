import React  from 'react';
import {useWeather} from "../../services/Fetching/Fetching";


const WeatherToday = () => {
    const {weatherToday} = useWeather()
    console.log(weatherToday)
    return (
        <div>
            WTF
        </div>
    );
};

export default WeatherToday;