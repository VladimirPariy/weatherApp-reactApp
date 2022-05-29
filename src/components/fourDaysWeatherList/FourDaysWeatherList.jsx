import React from 'react';
import {selectionFourDaysWeather} from "../../services/selectionWeather/selectionWeather";

const FourDaysWeatherList = (props) => {
    const weatherFourDays = selectionFourDaysWeather(Object.values(props))

    console.log(weatherFourDays)
    return (
        <>

        </>
    );
};

export default FourDaysWeatherList;