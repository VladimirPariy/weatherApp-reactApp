import React from 'react';
import style from "./WelcomeWindow.module.scss";
import weatherIcon from "../../Assets/Icons/WeatherIcon/sivvus_weather_symbols_2.svg";
import Search from "../Search/Search";

const WelcomeWindow = () => {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={weatherIcon} alt=""/>
            </div>
            <div className={style.text}>
                <p>
                    <span>Find</span> your weather predictions in your city
                </p>
                <p>
                    Easy steps to predict the weather and make your day easier!
                </p>
            </div>
            <Search/>
        </div>
    );
};

export default WelcomeWindow;