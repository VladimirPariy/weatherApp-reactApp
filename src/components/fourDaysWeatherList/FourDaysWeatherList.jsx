import React from 'react';
import style from './FourDaysWeatherList.module.scss'
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
    selectionFourDaysWeather,
} from "../../services/selectionWeather";
import {FaTemperatureHigh, FaWind} from "react-icons/fa";
import {MdOutlineWaterDrop} from "react-icons/md";
import {HiOutlineEye} from "react-icons/hi";
import {GiBottomRight3DArrow} from "react-icons/gi";
import {BsCloudSun} from "react-icons/bs";
import Slider from "react-slick";
import {
    determinationRepeatedWeather,
    getDayOfTheWeek,
    getMinMaxDayTemp,
    normalizationWeatherArrIndic, normalizeTimeToTimezone,
    sortedFourDaysWeather
} from "../../services/normalizationIndicators";


const FourDaysWeatherList = (props) => {
    const timeZone = props.city.timezone

    const weatherFourDays = selectionFourDaysWeather(props.list, timeZone),
        normalizeWeatherFourDays = normalizationWeatherArrIndic(weatherFourDays, timeZone),
        sortedWeatherFourDays = Object.values(sortedFourDaysWeather(normalizeWeatherFourDays));

    return (
        <div className={style.wrapper}>
            {sortedWeatherFourDays.map(item => {

                const dayOfTheWeek = getDayOfTheWeek(normalizeTimeToTimezone(item[0].dt, timeZone).getDay())
                const minMaxTempToDay = getMinMaxDayTemp(item)
                const repeatedWeatherIcon = determinationRepeatedWeather(item)
                const settings = {
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 3
                };

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
                            <ul className={style.elemIcons}>
                                <li className={style.elemIcon}><FaTemperatureHigh/></li>
                                <li className={style.elemIcon}><BsCloudSun/></li>
                                <li className={style.elemIcon}><FaWind/></li>
                                <li className={style.elemIcon}><GiBottomRight3DArrow/></li>
                                <li className={style.elemIcon}><MdOutlineWaterDrop/></li>
                                <li className={style.elemIcon}><HiOutlineEye/></li>
                            </ul>
                            <div className={style.wrapperElem}>
                                <Slider {...settings}>
                                    {item.map(elem => {
                                        return (
                                            <div className={style.containerForElem} key={elem.dt}>
                                                <div className={style.time}>{elem.dt_txt.slice(11, 16)}</div>
                                                <div className={style.temp}>{elem.main.temp}&deg;</div>
                                                <div className={style.weather}>{elem.weather[0].main}</div>
                                                <div className={style.windSpeed}>{elem.wind.speed} m/s</div>
                                                <div className={style.windDer}>{elem.wind.deg}</div>
                                                <div className={style.humidity}>{elem.main.humidity} %</div>
                                                <div className={style.visibility}>{elem.visibility}</div>

                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </details>
                    </div>
                )
            })
            }
        </div>
    );
};

export default FourDaysWeatherList;