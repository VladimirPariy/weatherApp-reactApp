import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import WelcomeWindow from "../../pages/WelcomePage/WelcomeWindow";
import WeatherPage from "../../pages/WeatherPage/WeatherPage";
import CurrentWeather from "../../pages/CurrentWeather/CurrentWeather";
import WeatherToday from "../../pages/WeatherToday/WeatherToday";
import WeatherForFiveDays from "../../pages/WeatherForFiveDays/WeatherForFiveDays";

const AppRouter = () => {
    const [currentCity, setCurrentCity] = useState('Kyiv')

    useEffect(() => {
        setCurrentCity(currentCity)
    }, [currentCity])

    function getCity(city = 'Kyiv') {
        setCurrentCity(city)
    }

    return (
        <Routes>
            <Route path="/" element={<WeatherPage getCity={getCity}/>}>
                <Route path="current" element={<CurrentWeather  currentCity={currentCity} />}/>
                <Route path="today" element={<WeatherToday currentCity={currentCity}/>}/>
                <Route path="fivedays" element={<WeatherForFiveDays currentCity={currentCity}/>}/>
            </Route>
            <Route
                path="*"
                element={<WelcomeWindow to="/" replace/>}
            />
        </Routes>
    );
};

export default AppRouter;