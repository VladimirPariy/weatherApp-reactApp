import React from 'react';
import style from './../../styles/FourDaysWeatherList.module.scss'
import {selectionFourDaysWeather} from "../../services/selectionWeather/selectionWeather";
import {normalizationWeatherArr} from "../../services/normalizationIndicators/normalizationIndicators";

const FourDaysWeatherList = (props) => {
    const weatherFourDays = normalizationWeatherArr(selectionFourDaysWeather(Object.values(props)));

    console.log(weatherFourDays)
    return (
        <>

        </>
    );
};

export default FourDaysWeatherList;