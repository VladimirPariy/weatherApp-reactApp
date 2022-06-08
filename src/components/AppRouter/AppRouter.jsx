import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/WeatherPage/HomePage";
import CurrentWeatherPage from "../../pages/CurrentWeatherPage/CurrentWeatherPage";
import WeatherTodayPage from "../../pages/WeatherTodayPage/WeatherTodayPage";
import FourDaysWeather from "../../pages/FourDaysWeatherPage/FourDaysWeatherPage";

const AppRouter = ({...props}) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage setCurrentCity={props.setCurrentCity}/>}/>
            <Route path="current" element={<CurrentWeatherPage {...props}/>}/>
            <Route path="today" element={<WeatherTodayPage {...props}/>}/>
            <Route path="fourdays" element={<FourDaysWeather {...props}/>}/>
            <Route
                path="*"
                element={<HomePage to="/"/>}
                replace
            />
        </Routes>
    );
};

export default AppRouter;