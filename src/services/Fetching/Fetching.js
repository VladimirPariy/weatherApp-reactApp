import axios from "axios";
import {useEffect, useState} from "react";
import React from 'react';
import {useContext} from "react";


const WeatherContext = React.createContext();

export const useWeather = () => {
    return useContext(WeatherContext)
}


export const FetchingProvider = ({children}) => {

    const [city, setCity] = useState('Kyiv')
    const [weatherToday, setWeatherToday] = useState(() => {
        isFetchingWeatherToday(city)
    });
    const [weatherFiveDays, setWeatherFiveDays] = useState(() => {
        isFetchingWeatherFiveDays(city)
    });


    function isFetchingWeatherToday(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50cb39ad20e8cdadfa2c8ce62827d3fa`;
        axios.get(url).then((response) => {
            setWeatherToday(response.data)
        })
    }

    function isFetchingWeatherFiveDays(city) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=50cb39ad20e8cdadfa2c8ce62827d3fa`;
        axios.get(url).then((response) => {
            setWeatherFiveDays(response.data)
        })
    }

    function getCity(city = 'Kyiv') {
        setCity(city)
    }

    useEffect(() => {
        isFetchingWeatherToday(city)
    }, [city])

    useEffect(() => {
        isFetchingWeatherFiveDays(city)
    }, [city])


    return (
        <WeatherContext.Provider value={{
            weatherFiveDays,
            weatherToday,
            getCity
        }}>
            {children}
        </WeatherContext.Provider>
    );
}





