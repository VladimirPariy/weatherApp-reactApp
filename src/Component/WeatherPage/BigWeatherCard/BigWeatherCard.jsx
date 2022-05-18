import React from 'react';
import style from './BigWeatherCard.module.scss'
import {WiStrongWind, WiWindDeg, WiHumidity, WiThermometer, WiBarometer} from "react-icons/wi";
import {MdRemoveRedEye} from "react-icons/md";
import {IconContext} from "react-icons";
import {getDirOfTheWind, getVisibilityKm} from "./normalizeWeather";


const BigWeatherCard = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.cell}>
                <div>
                    <IconContext.Provider value={{className: 'react-icons', style: { verticalAlign: 'middle'}}}>
                        <WiStrongWind size="30px"/>
                    </IconContext.Provider>
                    <span> Wind speed: </span>
                    <span>{props.windSpeed}</span>
                    <span> m/s</span>
                </div>
            </div>
            <div className={style.cell}>
                <div>
                    <IconContext.Provider value={{className: 'react-icons', style: { verticalAlign: 'middle'}}}>
                        <WiWindDeg size="30px"/>
                    </IconContext.Provider>
                    <span> Direction of the wind:  </span>
                    <span>{getDirOfTheWind(props.dirWind)}</span>
                </div>
            </div>
            <div className={style.cell}>
                <div>
                    <IconContext.Provider value={{className: 'react-icons', style: { verticalAlign: 'middle'}}}>
                        <MdRemoveRedEye size="30px"/>
                    </IconContext.Provider>
                    <span> Visibility: </span>
                    <span>{getVisibilityKm(props.visibility)}</span>

                </div>
            </div>
            <div className={style.cell}>
                <div>
                    <IconContext.Provider value={{className: 'react-icons', style: { verticalAlign: 'middle'}}}>
                        <WiHumidity size="30px"/>
                    </IconContext.Provider>
                    <span> Humidity: </span>
                    <span>{props.humidity}</span>
                    <span>%</span>
                </div>
            </div>
            <div className={style.cell}>
                <div>
                    <IconContext.Provider value={{className: 'react-icons', style: { verticalAlign: 'middle'}}}>
                        <WiBarometer size="30px"/>
                    </IconContext.Provider>
                    <span> Pressure: </span>
                    <span>{props.pressure}</span>
                    <span> hPa</span>
                </div>
            </div>
            <div className={style.cell}>
                <div>
                    <IconContext.Provider value={{className: 'react-icons', style: { verticalAlign: 'middle'}}}>
                        <WiThermometer size="30px"/>
                    </IconContext.Provider>
                    <span> Temp feels like: </span>
                    <span>{props.tempFeelsLike}</span>
                    <span>&deg; C</span>
                </div>
            </div>




        </div>
    );
};

export default BigWeatherCard;