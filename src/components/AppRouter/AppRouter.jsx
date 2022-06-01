import React from 'react';
import {Route, Routes} from "react-router-dom";
import WeatherPage from "../../pages/WeatherPage/WeatherPage";
import CurrentWeather from "../../pages/CurrentWeather/CurrentWeather";
import WeatherToday from "../../pages/WeatherToday/WeatherToday";
import FourDaysWeather from "../../pages/FourDaysWeather/FourDaysWeather";

const AppRouter = ({getCity, currentCity, visible, setVisible}) => {


    return (
        <Routes>
            <Route path="/" element={<WeatherPage getCity={getCity}/>}/>
            <Route path="current" element={<CurrentWeather currentCity={currentCity} getCity={getCity} visible={visible} setVisible={setVisible}/>}/>
            <Route path="today" element={<WeatherToday currentCity={currentCity} getCity={getCity} visible={visible} setVisible={setVisible}/>}/>
            <Route path="fourdays" element={<FourDaysWeather currentCity={currentCity} getCity={getCity} visible={visible} setVisible={setVisible}/>}/>
            <Route
                path="*"
                element={<WeatherPage to="/" replace/>}
            />
        </Routes>
    );
};

export default AppRouter;