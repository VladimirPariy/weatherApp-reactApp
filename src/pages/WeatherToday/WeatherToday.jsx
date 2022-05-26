import React from "react";
import {useEffect, useState} from "react";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import TodayWeatherList from "../../components/todayWeatherList/TodayWeatherList";

const WeatherToday = ({currentCity}) => {

    let type = "forecast?";

    const [currentWeather, setCurrentWeather] = useState(() => {
        fetchingWeather(currentCity, type)
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setCurrentWeather(res))
    }, [currentCity])


    return (
        <div>
            <div>
                {currentWeather ? <TodayWeatherList {...currentWeather.list}/> : 'loader'}
            </div>
        </div>
    );
};

export default WeatherToday;