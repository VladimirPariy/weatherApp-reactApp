import React, {useEffect, useState} from "react";
import style from "./WeatherToday.module.scss";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import TodayWeatherList from "../../components/todayWeatherList/TodayWeatherList";
import {MdOutlineFmdGood} from "react-icons/md";
import Loader from "../../components/UI/loader/Loader";
import BookmarkCity from "../../components/UI/bookmarkCity/BookmarkCity";
import Search from "../../components/UI/Search/Search";
import Modal from "../../components/UI/modal/Modal";
import HomeLink from "../../components/UI/homeLink/HomeLink";
import ButtonForModal from "../../components/UI/buttonForModal/ButtonForModal";
import {GiMagnifyingGlass} from "react-icons/gi";
import Error from "../Error/Error";

const WeatherToday = ({currentCity, getCity, visible, setVisible}) => {
    const [error, seError] = useState('')

    let type = "forecast?";

    const [weatherToday, setWeatherToday] = useState(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherToday(res)).catch(e => seError(e))
    });
    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherToday(res)).catch(e => seError(e))
    }, [currentCity, type]);


    return (
        <div className={style.wrapper}>
            {weatherToday && !error.message &&currentCity.toUpperCase() === weatherToday.city.name.toUpperCase()?
                <>
                    <HomeLink/>

                    <Modal visible={visible} setVisible={setVisible}>
                        <Search getCity={getCity}>
                            <GiMagnifyingGlass/>
                        </Search>
                    </Modal>

                    <ButtonForModal setVisible={setVisible}>
                        <MdOutlineFmdGood/>
                        {weatherToday.city.name},
                        <span className={style.countryName}>
                            {weatherToday.city.country}
                        </span>
                    </ButtonForModal>

                    <BookmarkCity/>

                    <div className={style.container}>
                        <TodayWeatherList {...weatherToday.list}/>
                    </div>

                </>
                : error.message ? <Error/> : <Loader/>
            }
        </div>
    );
};

export default WeatherToday;