import React from 'react';
import style from './TodayWeatherList.module.scss'
import {selectionWeather} from "../../services/selectionWeather";
import {normalizationWeatherArrIndic} from "../../services/normalizationIndicators";

const TodayWeatherList = ({city, list}) => {
    const timeZone = city.timezone

    const weatherToday = normalizationWeatherArrIndic(selectionWeather(list, timeZone), timeZone);

    return (
        <>
            {weatherToday.map((item) => {
                const {
                    dt_txt,
                    main: {temp, humidity, pressure},
                    wind: {speed, deg},
                    weather: [{description, icon, main}],
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
                                    <div className={style.iconAndWeather}>
                                        <img className={style.icon} src={icon} alt=""/>
                                        <span className={style.weather}>{main}</span>
                                    </div>
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