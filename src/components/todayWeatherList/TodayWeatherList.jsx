import React from 'react';
import {selectionTodayWeather} from "../../services/selectionWeather/selectionTodayWeather";
import {normalizationWeatherArr} from "../../services/normalizationIndicators/normalizationIndicators";
import style from "./../../styles/TodayWeatherList.module.scss"


const TodayWeatherList = (props) => {

    const weatherToday = normalizationWeatherArr(selectionTodayWeather(props));
    console.log(weatherToday)


    return (
        <>
            {weatherToday.map((item) => {
                const {dt_txt, main: {temp}, wind: {speed, deg}, weather: [{description, icon}]} = item

                return (
                    <div className={style.weatherCard} key={item.dt}>
                        <div className={style.time}>{dt_txt.slice(11, 16)}</div>
                        <img className={style.icon} src={icon} alt=""/>
                        <div className={style.weather}>{description}</div>
                        <div className={style.temp}>{temp}&deg;</div>
                        <div className={style.windSpeed}>{speed}</div>
                        <div className={style.windDir}>{deg}</div>
                    </div>)
            })}
        </>
    );
};

export default TodayWeatherList;