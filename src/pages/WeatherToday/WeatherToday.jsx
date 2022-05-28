import React from "react";
import {useEffect, useState} from "react";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import TodayWeatherList from "../../components/todayWeatherList/TodayWeatherList";
import style from "../../styles/TodayWeatherList.module.scss";
import {MdOutlineFmdGood} from "react-icons/md";

const WeatherToday = ({currentCity}) => {

    let type = "forecast?";

    const [currentWeather, setCurrentWeather] = useState(() => {
        fetchingWeather(currentCity, type)
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setCurrentWeather(res))
    }, [currentCity]);


    return (
        <div className={style.wrapper}>
            {currentWeather ?
                <>
                    <div className={style.cityAndCountry}>
                        <span className={style.cityName}>
                            <MdOutlineFmdGood/>
                            {currentWeather.city.name},
                        </span>
                        <span className={style.countryName}>
                            {currentWeather.city.country}
                        </span>
                    </div>
                    <div className={style.container}>
                        <TodayWeatherList {...currentWeather.list}/>
                    </div>

                </>
                : 'loader'}
        </div>
    );
};

export default WeatherToday;