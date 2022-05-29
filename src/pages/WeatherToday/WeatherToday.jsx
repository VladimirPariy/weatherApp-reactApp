import React from "react";
import {useEffect, useState} from "react";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import TodayWeatherList from "../../components/todayWeatherList/TodayWeatherList";
import style from "../../styles/TodayWeatherList.module.scss";
import {MdOutlineFmdGood} from "react-icons/md";
import Loader from "../../components/UI/loader/Loader";

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

                            <MdOutlineFmdGood/>
                            {currentWeather.city.name},
                        <span className={style.countryName}>
                            {currentWeather.city.country}
                        </span>
                    </div>
                    <div className={style.container}>
                        <TodayWeatherList {...currentWeather.list}/>
                    </div>

                </>
                : <Loader/>}

        </div>
    );
};

export default WeatherToday;