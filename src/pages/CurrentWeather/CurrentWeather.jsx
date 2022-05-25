import React, {useEffect} from 'react';
import style from '../../styles/WeatherNow.module.scss'
import CurrentWeatherList from '../../components/currentWeatherList/CurrentWeatherList';
import {useState} from "react";
import {fetchingWeather} from "../../services/fetching/fetchingCurrentWeather";

const CurrentWeather = ({currentCity}) => {

    let type = "weather?";

    const [currentWeather, setCurrentWeather] = useState(() => {
        fetchingWeather(currentCity, type)
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setCurrentWeather(res))
    }, [currentCity])


    return (
        <div className={style.wrapper}>
            {currentWeather ? <CurrentWeatherList {...currentWeather}/> : 'loader'}
        </div>
    );
};

export default CurrentWeather;