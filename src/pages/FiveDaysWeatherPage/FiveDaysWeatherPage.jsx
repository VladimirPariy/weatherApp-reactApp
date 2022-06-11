import React from 'react';
import style from "./FiveDaysWeatherPage.module.scss";
import {useFetchingWeather} from "../../hooks/useFetchingWeather";
import Loader from "../../components/UI/loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import FiveDaysWeatherList from "../../components/fiveDaysWeatherList/FiveDaysWeatherList";
import WeatherPageHeader from "../../components/UI/weatherPageHeader/weatherPageHeader";

const FourDaysWeather = ({currentCity, setCurrentCity, visible, setVisible}) => {

    let type = "forecast?";
    const [fourDaysWeather, error] = useFetchingWeather(currentCity, type)

    return (
        <div className={style.wrapper}>
            {fourDaysWeather && currentCity.toUpperCase() === fourDaysWeather.city.name.toUpperCase() ?
                <>
                    <WeatherPageHeader visible={visible}
                                       setVisible={setVisible}
                                       setCurrentCity={setCurrentCity}
                                       cityName={fourDaysWeather.city.name}
                                       country={fourDaysWeather.city.country}/>

                    <div className={style.container}>
                        <FiveDaysWeatherList {...fourDaysWeather} />
                    </div>

                </>
                : error ? <ErrorPage/> : <Loader/>
            }
        </div>
    );
};

export default FourDaysWeather;