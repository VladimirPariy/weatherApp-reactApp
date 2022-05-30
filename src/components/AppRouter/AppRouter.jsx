import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import WeatherPage from "../../pages/WeatherPage/WeatherPage";
import CurrentWeather from "../../pages/CurrentWeather/CurrentWeather";
import WeatherToday from "../../pages/WeatherToday/WeatherToday";
import WeatherForFourDays from "../../pages/WeatherForFourDays/WeatherForFourDays";

const AppRouter = ({getCity, currentCity}) => {


    return (
        <Routes>
            <Route path="/" element={<WeatherPage getCity={getCity}/>}/>
            <Route path="current" element={<CurrentWeather currentCity={currentCity}/>}/>
            <Route path="today" element={<WeatherToday currentCity={currentCity}/>}/>
            <Route path="fourdays" element={<WeatherForFourDays currentCity={currentCity}/>}/>
            <Route
                path="*"
                element={<WeatherPage to="/" replace/>}
            />
        </Routes>
    );
};

export default AppRouter;