import React from 'react';
import style from './FourDaysWeatherList.module.scss'
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import {selectionFourDaysWeather,} from "../../services/selectionWeather";
import {
    determinationRepeatedWeather,
    getDayOfTheWeek,
    getMinMaxDayTemp,
    normalizationWeatherArrIndic,
    normalizeTimeToTimezone,
    sortedFourDaysWeather
} from "../../services/normalizationIndicators";
import FourDaysWeatherItem from "./fourDaysWeatherItem/FourDaysWeatherItem";


const FourDaysWeatherList = (props) => {
    const timeZone = props.city.timezone

    const normalizeWeatherFourDays = normalizationWeatherArrIndic(props.list, timeZone);
    const sortedWeatherFourDays = Object.values(sortedFourDaysWeather(normalizeWeatherFourDays));

    const weatherWithoutLastFullArray = sortedWeatherFourDays.at(-1).length < 8 ? sortedWeatherFourDays.slice(0, -1) : sortedWeatherFourDays

    return (
        <div className={style.wrapper}>
            {weatherWithoutLastFullArray.map(item => {
                const dayOfTheWeek = getDayOfTheWeek(new Date(normalizeTimeToTimezone(item[0].dt, timeZone)).getDay())

                const minMaxTempToDay = getMinMaxDayTemp(item)
                const repeatedWeatherIcon = determinationRepeatedWeather(item)

                return (
                    <div className={style.item} key={item[0].dt}>
                        <details>
                            <summary>
                                <div className={style.container}>
                                    <span className={style.dayOfTheWeek}>{dayOfTheWeek}</span>
                                    <img className={style.icon} src={repeatedWeatherIcon} alt=""/>
                                    <span className={style.temp__minmax}>
                                        <span className={style.temp__max}>{minMaxTempToDay[0]}&deg; </span>
                                        <span className={style.temp__min}>{minMaxTempToDay[1]}&deg;</span>
                                    </span>
                                </div>
                            </summary>

                            <FourDaysWeatherItem item={item}/>
                        </details>
                    </div>
                )
            })
            }
        </div>
    );
};

export default FourDaysWeatherList;