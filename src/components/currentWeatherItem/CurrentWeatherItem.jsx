import React from 'react';
import style from "./CurrentWeatherItem.module.scss"
import {
    replacingFirstLetterDescription,
    getRoundingNumberToInt,
    getRoundingNumToFloat,
    getTimeInString,
    getWindDirection,
    getNormalizationVisibility
} from "../../services/normalizationIndicators";


const CurrentWeatherItem = ({currentWeather}) => {

    const {
        visibility,
        timezone,
        sys: {sunrise, sunset},
        main: {humidity, pressure, temp},
        wind: {speed, deg},
        weather: [{icon, description}]
    } = currentWeather

    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`,
        temperature = getRoundingNumberToInt(temp),
        sunriseTime = getTimeInString(sunrise, timezone),
        sunsetTime = getTimeInString(sunset, timezone),
        visibilityDistance = getNormalizationVisibility(visibility),
        des = replacingFirstLetterDescription(description),
        windDir = getWindDirection(deg),
        windSpeed = getRoundingNumToFloat(speed);

    return (
        <div className={style.wrapper}>

            <div className={style.weatherBlock}>

                <div className={style.iconWeather}>
                    <img src={weatherIcon} alt="icon"/>
                    <span>{des}</span>
                </div>

                <div className={style.temp}>
                    {temperature}
                    <span className={style.cel}>&deg;</span>
                </div>

            </div>

            <ul className={style.weatherList}>
                <li>Sun rise: {sunriseTime} </li>
                <li>Sun set: {sunsetTime} </li>
                <li>Wind speed: {windSpeed} m/s</li>
                <li>Wind direction: {windDir}</li>
                <li>Humidity: {humidity}%</li>
                <li>Pressure: {pressure} hPa</li>
                <li>Visibility: {visibilityDistance}</li>
            </ul>

        </div>
    );
};

export default CurrentWeatherItem;