import React, {useEffect, useState} from "react";
import style from './App.module.scss'
import AppRouter from "./components/AppRouter/AppRouter";
import Nav from "./components/UI/Navbar/Nav";


const App = () => {
    const [currentCity, setCurrentCity] = useState(()=>'Kyiv')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setCurrentCity(currentCity)
        setModal(false)
    }, [currentCity])

    function getCity(city ) {
        setCurrentCity(city)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Nav/>
                <AppRouter currentCity={currentCity} getCity={getCity} visible={modal} setVisible={setModal}/>
            </div>

        </div>
    )
}

export default App;
