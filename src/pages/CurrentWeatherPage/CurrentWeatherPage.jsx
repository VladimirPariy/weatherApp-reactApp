import React from 'react';
import style from './CurrentWeatherPage.module.scss';
import {useFetchingWeather} from "../../hooks/useFetchingWeather";
import CurrentWeatherItem from '../../components/currentWeatherItem/CurrentWeatherItem';
import Loader from "../../components/UI/loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import WeatherPageHeader from "../../components/UI/weatherPageHeader/weatherPageHeader";

const CurrentWeatherPage = ({currentCity, setCurrentCity, visible, setVisible}) => {

    let type = "weather?";
    const [currentWeather, error, isLoading] = useFetchingWeather(currentCity, type)

    return (
        <div className={style.wrapper}>
            {isLoading
                ? <Loader/>
                : error
                    ? <ErrorPage/>
                    : <>
                        <WeatherPageHeader visible={visible}
                                           setVisible={setVisible}
                                           setCurrentCity={setCurrentCity}
                                           cityName={currentWeather.name}
                                           country={currentWeather.sys.country}
                        />

                        <div className={style.container}>
                            <CurrentWeatherItem currentWeather={currentWeather}/>
                        </div>
                    </>
            }
        </div>
    );
};

export default CurrentWeatherPage;