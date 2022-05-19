import React, {useContext} from 'react';
import {WeatherContext} from "../../services/Fetching/Fetching";


const WeatherToday = () => {
    const {weatherToday} = useContext(WeatherContext)
    console.log(weatherToday)
    return (
        <div>
            WTF
        </div>
    );
};

export default WeatherToday;