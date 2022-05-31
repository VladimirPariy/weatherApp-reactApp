import React from 'react';
import style from './../../styles/FourDaysWeatherList.module.scss'
import {selectionFourDaysWeather} from "../../services/selectionWeather/selectionWeather";
import {
    getDayOfTheWeek,
    normalizationWeatherArrIndic,
    sortedFourDaysWeather
} from "../../services/normalizationIndicators/normalizationIndicators";

const FourDaysWeatherList = (props) => {
    const weatherFourDays = normalizationWeatherArrIndic(selectionFourDaysWeather(Object.values(props)));
    const sortedWeatherFourDays = Object.values(sortedFourDaysWeather(weatherFourDays))

    console.log(sortedWeatherFourDays)
    return (
        <div>
            {
                sortedWeatherFourDays.map((item) => {
                    const dayNum = new Date(item[0].dt * 1000).getDay()
                    return (
                        <div className={style.wrapper}>
                            <span className={style.dayOfTheWeek}>{getDayOfTheWeek(dayNum)}</span>
                            <div className={style.container}>

                            </div>
                        </div>
                    )
                })
        }

        </div>
    );
};

export default FourDaysWeatherList;