import React, {useEffect} from 'react';
import style from '../../styles/WeatherNow.module.scss'
import CurrentWeatherList from '../../components/currentWeatherList/CurrentWeatherList';
import {useState} from "react";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import Loader from "../../components/UI/loader/Loader";

const CurrentWeather = ({currentCity}) => {

    let type = "weather?";

    const [currentWeather, setCurrentWeather] = useState(() => {
        fetchingWeather(currentCity, type).then(res => setCurrentWeather(res))
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setCurrentWeather(res))
    }, [currentCity, type])


    return (
        <div className={style.wrapper}>
            {currentWeather ? <CurrentWeatherList {...currentWeather}/> : <Loader/>}
        </div>
    );
};

export default CurrentWeather;