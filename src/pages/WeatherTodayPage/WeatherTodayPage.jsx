import React from "react";
import style from "./WeatherTodayPage.module.scss";
import TodayWeatherList from "../../components/todayWeatherList/TodayWeatherList";
import Loader from "../../components/UI/loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import {useFetchingWeather} from "../../hooks/useFetchingWeather";
import WeatherPageHeader from "../../components/UI/weatherPageHeader/weatherPageHeader";

const WeatherTodayPage = ({currentCity, setCurrentCity, visible, setVisible}) => {

    let type = "forecast?";
    const [weatherToday, error] = useFetchingWeather(currentCity, type)

    return (
        <div className={style.wrapper}>
            {weatherToday && currentCity.toUpperCase() === weatherToday.city.name.toUpperCase()
                ? <>
                    <WeatherPageHeader visible={visible}
                                       setVisible={setVisible}
                                       setCurrentCity={setCurrentCity}
                                       cityName={weatherToday.city.name}
                                       country={weatherToday.city.country}/>

                    <div className={style.container}>
                        <TodayWeatherList {...weatherToday} />
                    </div>

                </>
                : error ? <ErrorPage/> : <Loader/>
            }
        </div>
    );
};

export default WeatherTodayPage;