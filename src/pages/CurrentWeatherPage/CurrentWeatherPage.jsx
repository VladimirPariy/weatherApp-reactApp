import React from 'react';
import style from './CurrentWeatherPage.module.scss';
import {useFetchingWeather} from "../../hooks/useFetchingWeather";
import CurrentWeatherItem from '../../components/currentWeatherItem/CurrentWeatherItem';
import Loader from "../../components/UI/loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import WeatherPageHeader from "../../components/UI/weatherPageHeader/weatherPageHeader";

const CurrentWeatherPage = ({currentCity, setCurrentCity, visible, setVisible}) => {

    let type = "weather?";
    const [currentWeather, error] = useFetchingWeather(currentCity, type)
    console.log(currentWeather)
    return (
        <div className={style.wrapper}>
            {currentWeather && currentCity.toUpperCase() === currentWeather.name.toUpperCase() ?
                <>

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
                : error
                    ? <ErrorPage/>
                    : <Loader/>
            }
        </div>
    );
};

export default CurrentWeatherPage;