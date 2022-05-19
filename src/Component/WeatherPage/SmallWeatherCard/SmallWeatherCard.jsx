import React from "react";
import style from "./SmallWeatherCard.module.scss";

const SmallWeatherCard = (props) => {
    console.log(props)
    return (
        <div className={style.smallCard}>
            {/*<div className={style.temperature}>{props.temp}&deg;</div>*/}
            {/*<div className={style.cityCountryAndDate}>*/}
            {/*    <div className={style.city}>{props.city},</div>*/}
            {/*    <div className={style.country}>{props.country}</div>*/}
            {/*</div>*/}

            {/*<div className={style.iconAndWeatherName}>*/}
            {/*    <img src={props.icon} alt="" className={style.icon}/>*/}
            {/*    <div className={style.weatherName}>{props.weather}</div>*/}
            {/*</div>*/}
            {/*<div className={style.iconLocation}>*/}
            {/*    <IconContext.Provider value={{className: 'react-icons'}}>*/}
            {/*        <AiOutlineEnvironment size="25px"/>*/}
            {/*    </IconContext.Provider>*/}
            {/*    <span className={style.location}>Add new location</span>*/}
            {/*</div>*/}
        </div>
    );
}
export default SmallWeatherCard;
