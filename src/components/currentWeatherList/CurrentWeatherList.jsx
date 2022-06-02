import React from 'react';
import style from "./../../styles/CurrentWeatherList.module.scss"
import {
    descriptionReplace,
    normalizationVisibility, roundNumber, roundWindSpeed, sunTime, windDirection
} from "../../services/normalizationIndicators/normalizationIndicators";
import {IoIosMoon, IoIosSunny} from "react-icons/io";
import {MdOutlineFmdGood} from "react-icons/md";
import Untitled from "./../../Assets/Icons/Untitled.svg"
import BookmarkCity from "../UI/bookmarkCity/BookmarkCity";
import Search from "../UI/Search/Search";
import Modal from "../UI/modal/Modal";


const CurrentWeatherList = ({currentWeather, visible, setVisible, getCity, currentCity}) => {

    const {
        name,
        visibility,
        sys: {country, sunrise, sunset},
        main: {humidity, pressure, temp},
        wind: {speed, deg},
        weather: [{icon, description}]
    } = currentWeather

    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`,
        temperature = roundNumber(temp),
        sunriseTime = sunTime(sunrise), sunsetTime = sunTime(sunset),
        visibilityDistance = normalizationVisibility(visibility),
        des = descriptionReplace(description),
        windDir = windDirection(deg),
        windSpeed = roundWindSpeed(speed);

    return (
        <div className={style.wrapper}>
            <Modal visible={visible} setVisible={setVisible}>
                <Search getCity={getCity} currentCity={currentCity}/>
            </Modal>
            <button className={style.city} onClick={() => setVisible(true)}>
                <MdOutlineFmdGood/>
                {name},
                <span className={style.country}>{country}</span>
            </button>
            <span className={style.bookmark}><BookmarkCity/></span>
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

export default CurrentWeatherList;