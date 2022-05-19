import axios from "axios";
import {useState} from "react";
import React from 'react';

export const WeatherContext = React.createContext();

export const FetchingProvider = ({children}) => {
    const apiKey = '50cb39ad20e8cdadfa2c8ce62827d3fa';

    const [weatherToday, setWeatherToday] = useState(() => {
        isFetchingWeatherToday('Kyiv', apiKey)
    });
    const [weatherFiveDays, setWeatherFiveDays] = useState(() => {
        isFetchingWeatherFiveDays('Kyiv',apiKey)
    });


    const isFetchingWeatherFiveDays=(string = 'Kyiv')=> {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${string}&appid=${apiKey}`;
        axios.get(url).then((response) => {
            setWeatherFiveDays(response.data)
        })
    };

    const isFetchingWeatherToday=(string = 'Kyiv')=> {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${string}&appid=${apiKey}`;
        axios.get(url).then((response) => {
            setWeatherToday(response.data)
        })
    };


    return (
        <WeatherContext.Provider value={{
            weatherFiveDays,
            weatherToday
        }}>
            {children}
        </WeatherContext.Provider>
    );
}





