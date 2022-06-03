import React from 'react';
import style from './FourDaysWeatherList.module.scss'
import {selectionFourDaysWeather} from "../../services/selectionWeather/selectionWeather";
import {
    determRepeatedWeather,
    getDayOfTheWeek, getMinMaxDayTemp,
    normalizationWeatherArrIndic,
    sortedFourDaysWeather
} from "../../services/normalizationIndicators/normalizationIndicators";
import {FaTemperatureHigh, FaWind} from "react-icons/fa";
import {MdOutlineWaterDrop} from "react-icons/md";
import {HiOutlineEye} from "react-icons/hi";
import {GiBottomRight3DArrow} from "react-icons/gi";
import Slider from "react-slick";
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";

const FourDaysWeatherList = (props) => {
    const weatherFourDays = normalizationWeatherArrIndic(selectionFourDaysWeather(Object.values(props)));
    const sortedWeatherFourDays = Object.values(sortedFourDaysWeather(weatherFourDays))

    return (
        <div className={style.wrapper}>
            {sortedWeatherFourDays.map(item => {

                const dayNum = new Date(item[0].dt * 1000).getDay()
                const minMaxTempToDay = getMinMaxDayTemp(item)
                const repeatedWeatherIcon = determRepeatedWeather(item)
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
                                    <span className={style.dayOfTheWeek}>{getDayOfTheWeek(dayNum)}</span>
                                    <img className={style.icon} src={repeatedWeatherIcon} alt=""/>
                                    <span className={style.temp__minmax}>
                                        <span className={style.temp__max}>{minMaxTempToDay[0]}&deg; </span>
                                        <span className={style.temp__min}>{minMaxTempToDay[1]}&deg;</span>
                                    </span>
                                </div>
                            </summary>
                            <div className={style.elemIcons}>
                                <FaTemperatureHigh/>
                                <FaWind/>
                                <GiBottomRight3DArrow/>
                                <MdOutlineWaterDrop/>
                                <HiOutlineEye/>

                            </div>
                            <div className={style.wrapperElem}>
                                <Slider {...settings}>
                                {item.map(elem => {
                                    return (
                                        <div className={style.containerForElem} key={elem.dt}>
                                                <div className={style.time}>{elem.dt_txt.slice(11, 16)}</div>
                                                <div className={style.temp}>{elem.main.temp}&deg;</div>
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