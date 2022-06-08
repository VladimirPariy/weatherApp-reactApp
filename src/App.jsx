import React, {useEffect, useState} from "react";
import style from './App.module.scss'
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";


const App = () => {
    const [currentCity, setCurrentCity] = useState('')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setModal(false)
    }, [currentCity])



    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Navbar/>
                <AppRouter currentCity={currentCity} setCurrentCity={setCurrentCity} visible={modal} setVisible={setModal}/>
            </div>

        </div>
    )
}

export default App;
