import React, {useRef, useState} from "react";
import axios from "axios";
import style from "./WeatherPage.module.scss";
import SmallWeatherCard from "./SmallWeatherCard/SmallWeatherCard";

const WeatherPage = () => {

    const [allWeather, setAllWeather] = useState(() => isFetchingWeather())



    function getCelFromKel(temp) {
        return Math.round(+temp - 273, 15)
    }

    let inputRef = useRef('Kyiv')

    function getInput(string) {
        setAllWeather(isFetchingWeather(inputRef.current.value))
    }


    return (
        <div className={style.card}>
            {allWeather ? (<SmallWeatherCard
                city={allWeather.name}
                country={allWeather.sys.country}
                weather={allWeather.weather[0].main}
                icon={`http://openweathermap.org/img/wn/${allWeather.weather[0].icon}@2x.png`}
                temp={getCelFromKel(allWeather.main.temp)}/>) : 'Preloader'}
        </div>
    )
}
export default WeatherPage;


