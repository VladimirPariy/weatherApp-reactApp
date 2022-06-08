import React from 'react';
import style from "./FourDaysWeatherPage.module.scss";
import {useFetchingWeather} from "../../hooks/useFetchingWeather";
import Loader from "../../components/UI/loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import FourDaysWeatherList from "../../components/fourDaysWeatherList/FourDaysWeatherList";
import WeatherPageHeader from "../../components/UI/weatherPageHeader/weatherPageHeader";

const FourDaysWeather = ({currentCity, setCurrentCity, visible, setVisible}) => {

    let type = "forecast?";
    const [fourDaysWeather, error] = useFetchingWeather(currentCity, type)

    return (
        <div className={style.wrapper}>
            {fourDaysWeather &&currentCity.toUpperCase() === fourDaysWeather.city.name.toUpperCase()?
                <>
                    <WeatherPageHeader visible={visible}
                                       setVisible={setVisible}
                                       setCurrentCity={setCurrentCity}
                                       cityName={fourDaysWeather.city.name}
                                       country={fourDaysWeather.city.country}/>

                    <div className={style.container}>
                        <FourDaysWeatherList {...fourDaysWeather} />
                    </div>

                </>
                : error ? <ErrorPage/> : <Loader/>
            }
        </div>
    );
};

export default FourDaysWeather;