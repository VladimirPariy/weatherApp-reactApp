import React from 'react';
import style from './FiveDaysWeatherItem.module.scss'
import Slider from "react-slick";
import {FaTemperatureHigh, FaWind} from "react-icons/fa";
import {BsCloudSun} from "react-icons/bs";
import {GiBottomRight3DArrow} from "react-icons/gi";
import {MdOutlineWaterDrop} from "react-icons/md";
import {HiOutlineEye} from "react-icons/hi";


const FiveDaysWeatherItem = ({item}) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <>
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
        </>
    )
};

export default FiveDaysWeatherItem;