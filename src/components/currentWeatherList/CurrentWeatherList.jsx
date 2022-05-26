import React from 'react';
import {
    normalizationTemp,
    normalizationVisibility,
    sunTime,
    windDirection
} from "../../services/normalizationIndicators/normalizationIndicators";
import style from "./../../styles/CurrentWeatherList.module.scss"
import {IoIosMoon, IoIosSunny} from "react-icons/io";
import {MdOutlineFmdGood} from "react-icons/md";
import Untitled from "./../../Assets/Icons/Untitled.svg"

const CurrentWeatherList = (props) => {

    const {
        name,
        visibility,
        sys: {country, sunrise, sunset},
        main: {humidity, pressure, temp},
        wind: {speed, deg},
        weather: [{icon, main}]
    } = props
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

    const temperature = normalizationTemp(temp)

    const sunriseTime = sunTime(sunrise)
    const sunsetTime = sunTime(sunset)

    const visibilityDistance = normalizationVisibility(visibility)

    const windDir = windDirection(deg)

    return (
        <div className={style.wrapper}>
            <div className={style.city}><MdOutlineFmdGood/>{name}, <span className={style.country}>{country}</span></div>
            <div className={style.weatherBlock}>
                <div className={style.iconWeather}>
                    <img src={weatherIcon} alt="icon"/>
                    <span>{main}</span>
                </div>
                <div className={style.temp}>
                    {temperature}
                    <span className={style.cel}>&deg;</span>
                </div>
            </div>
            <div className={style.sun}>
                <div className={style.sunrise}>
                    <span>{sunriseTime}</span>
                    <IoIosSunny/>
                </div>
                <img src={Untitled} alt=""/>
                <div className={style.sunset}>
                    <IoIosMoon />
                    <span>{sunsetTime}</span>
                </div>
            </div>
            <ul className={style.weatherList}>
                <li>Wind speed: {speed} m/s</li>
                <li>Wind direction: {windDir}</li>
                <li>Humidity: {humidity}%</li>
                <li>Pressure: {pressure} hPa</li>
                <li>Visibility: {visibilityDistance}</li>
            </ul>
        </div>
    );
};

export default CurrentWeatherList;