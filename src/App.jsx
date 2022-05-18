import React from "react";
import style from './App.module.scss'
import WelcomeWindow from "./components/WelcomePage/WelcomeWindow";
import {Link, Route, Routes} from "react-router-dom";
import WeatherMainPage from "./layout/WeatherPage/WeatherMainPage";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import WeatherFourDays from "./components/WeatherFourDays/WeatherFourDays";
import WeatherSevenDays from "./components/WeatherSevenDays/WeatherSevenDays";

const App = () => {
    return (

        <div className={style.wrapper}>
            <Routes>
                <Route index element={<WelcomeWindow/>}/>
                <Route path="main" element={<WeatherMainPage/>}>
                    <Route path="today" element={<WeatherToday/>}/>
                    <Route path="fourdays" element={<WeatherFourDays/>}/>
                    <Route path="sevendays" element={<WeatherSevenDays/>}/>
                </Route>
            </Routes>
        </div>

    )
}


export default App;
