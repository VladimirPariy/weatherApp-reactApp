import React, {useEffect, useState} from "react";
import style from './styles/App.module.scss'
import AppRouter from "./components/AppRouter/AppRouter";
import Nav from "./components/UI/Navbar/Nav";


const App = () => {
    const [currentCity, setCurrentCity] = useState('Kyiv')

    useEffect(() => {
        setCurrentCity(currentCity)
    }, [currentCity])

    function getCity(city = 'Kyiv') {
        setCurrentCity(city)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Nav />
                <AppRouter currentCity={currentCity} getCity={getCity}/>
            </div>

        </div>
    )
}

export default App;
