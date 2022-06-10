import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CurrentWeatherPage from "../../pages/CurrentWeatherPage/CurrentWeatherPage";
import FourDaysWeather from "../../pages/FiveDaysWeatherPage/FiveDaysWeatherPage";

const AppRouter = ({...props}) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage setCurrentCity={props.setCurrentCity}/>}/>
            <Route path="current" element={<CurrentWeatherPage {...props}/>}/>
            <Route path="fivedays" element={<FourDaysWeather {...props}/>}/>
            <Route
                path="*"
                element={<HomePage to="/"/>}
                replace
            />
        </Routes>
    );
};

export default AppRouter;