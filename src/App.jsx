import React, {useEffect, useState} from "react";
import style from './App.module.scss'
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {data} from './localStorage'

const App = () => {
    const [currentCity, setCurrentCity] = useState('')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setModal(false)
    }, [currentCity])

    useEffect(()=> {
        localStorage.setItem('data', JSON.stringify(data))
    }, [])

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Navbar/>
                <AppRouter currentCity={currentCity} setCurrentCity={setCurrentCity} visible={modal} setVisible={setModal} data={data}/>
            </div>

        </div>
    )
}

export default App;
