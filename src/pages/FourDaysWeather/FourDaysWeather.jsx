import React, {useEffect, useState} from 'react';
import style from "../../styles/FourDaysWeather.module.scss";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import {MdOutlineFmdGood} from "react-icons/md";
import Loader from "../../components/UI/loader/Loader";
import FourDaysWeatherList from "../../components/fourDaysWeatherList/FourDaysWeatherList";
import BookmarkCity from "../../components/UI/bookmarkCity/BookmarkCity";
import Modal from "../../components/UI/modal/Modal";
import Search from "../../components/UI/Search/Search";

const FourDaysWeather = ({currentCity, getCity, visible, setVisible}) => {
    let type = "forecast?";

    const [weatherFiveDays, setWeatherFiveDays] = useState(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherFiveDays(res))
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherFiveDays(res))
    }, [currentCity, type]);
    return (
        <div className={style.wrapper}>
            {weatherFiveDays ?
                <>
                    <Modal visible={visible} setVisible={setVisible}>
                        <Search getCity={getCity}/>
                    </Modal>
                    <button className={style.cityAndCountry} onClick={()=> setVisible(true)}>

                        <MdOutlineFmdGood/>
                        {weatherFiveDays.city.name},
                        <span className={style.countryName}>
                            {weatherFiveDays.city.country}
                        </span>
                    </button>
                    <span className={style.bookmark}><BookmarkCity/></span>
                    <div className={style.container}>
                        <FourDaysWeatherList {...weatherFiveDays.list}/>
                    </div>

                </>
                : <Loader/>}

        </div>
    );
};

export default FourDaysWeather;