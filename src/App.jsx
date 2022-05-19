import React from "react";
import {Route, Routes} from "react-router-dom";
import style from './App.module.scss'
import {FetchingProvider} from "./services/Fetching/Fetching";
import Nav from "./layout/Navbar/Nav";
import WelcomeWindow from "./components/WelcomePage/WelcomeWindow";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import WeatherFiveDays from "./components/WeatherFiveDays/WeatherFiveDays";




const App = () => {

    return (
        <div className={style.wrapper}>
            <FetchingProvider>
                <Routes>
                    <Route index element={<WelcomeWindow/>}/>
                    <Route path="/" element={<Nav/>}>
                        <Route path="today" element={<WeatherToday/>}/>
                        <Route path="fivedays" element={<WeatherFiveDays/>}/>
                    </Route>
                </Routes>
            </FetchingProvider>
        </div>
    )
}


export default App;
