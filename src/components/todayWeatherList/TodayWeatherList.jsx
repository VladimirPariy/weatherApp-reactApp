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
                const {dt_txt, main: {temp, humidity, pressure}, wind: {speed, deg}, weather: [{description, icon}], visibility, } = item

                return (
                    <div className={style.weatherCard} key={item.dt}>
                        <details>
                            <summary>
                                <div className={style.time}>{dt_txt.slice(11, 16)}</div>
                                <div className={style.iconAndTemp}>
                                    <div className={style.temp}>{temp}&deg;</div>
                                        <img className={style.icon} src={icon} alt=""/>

                                </div>

                            </summary>
                            <ul className={style.list}>
                                <li>Description: {description}</li>
                                <li>Wind speed: {speed} m/s</li>
                                <li>Wind direction: {deg}</li>
                                <li>Humidity: {humidity}%</li>
                                <li>Pressure: {pressure} hPa</li>
                                <li>Visibility: {visibility}</li>
                            </ul>
                            {/*<div className={style.weather}></div>*/}
                            {/*<div className={style.windSpeed}></div>*/}
                            {/*<div className={style.windDir}></div>*/}
                        </details>


                    </div>)
            })}
        </>
    );
};

export default TodayWeatherList;