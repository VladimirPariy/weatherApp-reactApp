import React from "react";
import style from './styles/App.module.scss'
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <AppRouter/>
            </div>

        </div>
    )
}

export default App;
