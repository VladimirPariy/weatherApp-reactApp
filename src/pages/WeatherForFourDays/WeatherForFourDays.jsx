import React, {useEffect, useState} from 'react';
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import style from "../../styles/TodayWeatherList.module.scss";
import {MdOutlineFmdGood} from "react-icons/md";
import Loader from "../../components/UI/loader/Loader";
import FourDaysWeatherList from "../../components/fourDaysWeatherList/FourDaysWeatherList";

const WeatherForFourDays = ({currentCity}) => {
    let type = "forecast?";

    const [weatherFiveDays, setWeatherFiveDays] = useState(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherFiveDays(res))
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherFiveDays(res))
    }, [currentCity, type]);
    return (
        <div className={style.wrapper}>
            {weatherFiveDays ?
                <>
                    <div className={style.cityAndCountry}>

                        <MdOutlineFmdGood/>
                        {weatherFiveDays.city.name},
                        <span className={style.countryName}>
                            {weatherFiveDays.city.country}
                        </span>
                    </div>
                    <div className={style.container}>
                        <FourDaysWeatherList {...weatherFiveDays.list}/>
                    </div>

                </>
                : <Loader/>}

        </div>
    );
};

export default WeatherForFourDays;