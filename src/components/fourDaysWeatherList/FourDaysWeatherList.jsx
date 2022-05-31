import React from 'react';
import style from './../../styles/FourDaysWeatherList.module.scss'
import {selectionFourDaysWeather} from "../../services/selectionWeather/selectionWeather";
import {
    determRepeatedWeather,
    getDayOfTheWeek, getMinMaxDayTemp,
    normalizationWeatherArrIndic,
    sortedFourDaysWeather
} from "../../services/normalizationIndicators/normalizationIndicators";

const FourDaysWeatherList = (props) => {
    const weatherFourDays = normalizationWeatherArrIndic(selectionFourDaysWeather(Object.values(props)));
    const sortedWeatherFourDays = Object.values(sortedFourDaysWeather(weatherFourDays))

    console.log(sortedWeatherFourDays)
    return (
        <div className={style.wrapper}>
            {sortedWeatherFourDays.map(item => {

                const dayNum = new Date(item[0].dt * 1000).getDay()
                const minMaxTempToDay = getMinMaxDayTemp(item)
                const repeatedWeatherIcon = determRepeatedWeather(item)

                return (
                    <div className={style.item} key={item[0].dt}>
                        <details>
                            <summary>
                                <div className={style.container}>
                                    <span className={style.dayOfTheWeek}>{getDayOfTheWeek(dayNum)}</span>
                                    <img className={style.icon} src={repeatedWeatherIcon} alt=""/>
                                    <span className={style.temp__minmax}>
                                        <span className={style.temp__max}>{minMaxTempToDay[0]}&deg; </span>
                                        <span className={style.temp__min}>{minMaxTempToDay[1]}&deg;</span>
                                    </span>
                                </div>
                            </summary>

                        </details>
                    </div>
                )
            })
            }
        </div>
    );
};

export default FourDaysWeatherList;