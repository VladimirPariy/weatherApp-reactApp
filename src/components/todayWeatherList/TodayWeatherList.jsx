import React from 'react';
import {selectionWeather} from "../../services/selectionWeather/selectionWeather";
import {normalizationWeatherArr} from "../../services/normalizationIndicators/normalizationIndicators";
import style from "./../../styles/TodayWeatherList.module.scss"


const TodayWeatherList = (props) => {

    const weatherToday = normalizationWeatherArr(selectionWeather(props));

    return (
        <>
            {weatherToday.map((item) => {
                const {
                    dt_txt,
                    main: {temp, humidity, pressure},
                    wind: {speed, deg},
                    weather: [{description, icon}],
                    visibility,
                    dt
                } = item

                return (
                    <div className={style.weatherCard} key={dt}>
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
                        </details>
                    </div>)
            })}
        </>
    );
};

export default TodayWeatherList;