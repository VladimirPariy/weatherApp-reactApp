import React, {useState} from 'react';
import {selectionTodayWeather} from "../../services/selectionWeather/selectionTodayWeather";
import {normalizationWeatherArr} from "../../services/normalizationIndicators/normalizationIndicators";


const TodayWeatherList = (props) => {

    const [weatherToday, setWeatherToday] = useState(() => normalizationWeatherArr(selectionTodayWeather(props)))

    console.log(weatherToday)

    return (
        <div>

        </div>
    );
};

export default TodayWeatherList;