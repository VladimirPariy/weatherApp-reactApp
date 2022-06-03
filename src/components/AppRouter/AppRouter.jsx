import React from 'react';
import {Route, Routes} from "react-router-dom";
import WeatherPage from "../../pages/WeatherPage/WeatherPage";
import CurrentWeather from "../../pages/CurrentWeather/CurrentWeather";
import WeatherToday from "../../pages/WeatherToday/WeatherToday";
import FourDaysWeather from "../../pages/FourDaysWeather/FourDaysWeather";

const AppRouter = ({ ...props}) => {
    return (
        <Routes>
            <Route path="/" element={<WeatherPage getCity={props.getCity}/>}/>
            <Route path="current" element={<CurrentWeather {...props}/>}/>
            <Route path="today" element={<WeatherToday {...props}/>}/>
            <Route path="fourdays" element={<FourDaysWeather {...props}/>}/>
            <Route
                path="*"
                element={<WeatherPage to="/" />}
                replace
            />
        </Routes>
    );
};

export default AppRouter;