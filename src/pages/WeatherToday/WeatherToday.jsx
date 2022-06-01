import React, {useEffect, useState} from "react";
import style from "../../styles/TodayWeather.module.scss";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import TodayWeatherList from "../../components/todayWeatherList/TodayWeatherList";

import {MdOutlineFmdGood} from "react-icons/md";
import Loader from "../../components/UI/loader/Loader";
import BookmarkCity from "../../components/UI/bookmarkCity/BookmarkCity";
import Search from "../../components/UI/Search/Search";
import Modal from "../../components/UI/modal/Modal";

const WeatherToday = ({currentCity, getCity, visible, setVisible}) => {

    let type = "forecast?";

    const [weatherToday, setWeatherToday] = useState(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherToday(res))
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherToday(res))
    }, [currentCity, type]);



    return (
        <div className={style.wrapper}>
            {weatherToday ?
                <>
                    <Modal visible={visible} setVisible={setVisible}>
                        <Search getCity={getCity}/>
                    </Modal>
                    <button className={style.cityAndCountry} onClick={()=> setVisible(true)}>
                            <MdOutlineFmdGood/>
                            {weatherToday.city.name},
                        <span className={style.countryName}>
                            {weatherToday.city.country}
                        </span>

                    </button>
                    <span className={style.bookmark}><BookmarkCity/></span>
                    <div className={style.container}>
                        <TodayWeatherList {...weatherToday.list}/>
                    </div>

                </>
                : <Loader/>}

        </div>
    );
};

export default WeatherToday;