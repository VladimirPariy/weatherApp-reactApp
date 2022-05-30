import React, {useEffect, useState} from 'react';
import style from '../../styles/CurrentWeather.module.scss';
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import CurrentWeatherList from '../../components/currentWeatherList/CurrentWeatherList';
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