import React from 'react';
import style from "../../styles/WeatherPage.module.scss";
import weatherIcon from "../../Assets/Icons/sivvus_weather_symbols_2.svg";
import Search from "../../components/UI/Search/Search";


const WeatherPage = ({getCity}) => {
    return (
        <div className={style.container}>
            <Search getCity={getCity}/>
            <div className={style.image}>
                <img src={weatherIcon} alt=""/>
            </div>
            <div className={style.text}>
                <p><span>Find</span> your weather predictions in your city </p>
                <p> Easy steps to predict the weather and make your day easier! </p>
            </div>

        </div>
    )
};

export default WeatherPage;