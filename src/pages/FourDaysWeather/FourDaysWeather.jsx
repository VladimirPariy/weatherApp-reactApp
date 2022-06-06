import React, {useEffect, useState} from 'react';
import style from "./FourDaysWeather.module.scss";
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import {MdOutlineFmdGood} from "react-icons/md";
import Loader from "../../components/UI/loader/Loader";
import FourDaysWeatherList from "../../components/fourDaysWeatherList/FourDaysWeatherList";
import BookmarkCity from "../../components/UI/bookmarkCity/BookmarkCity";
import Modal from "../../components/UI/modal/Modal";
import Search from "../../components/UI/Search/Search";
import HomeLink from "../../components/UI/homeLink/HomeLink";
import ButtonForModal from "../../components/UI/buttonForModal/ButtonForModal";
import {GiMagnifyingGlass} from "react-icons/gi";
import Error from "../Error/Error";

const FourDaysWeather = ({currentCity, getCity, visible, setVisible}) => {
    const [error, seError] = useState('')
    let type = "forecast?";

    const [weatherFiveDays, setWeatherFiveDays] = useState(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherFiveDays(res)).catch(e => seError(e))
    });

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setWeatherFiveDays(res)).catch(e => seError(e))
    }, [currentCity, type]);
    return (
        <div className={style.wrapper}>
            {weatherFiveDays && !error.message &&currentCity.toUpperCase() === weatherFiveDays.city.name.toUpperCase()?
                <>
                    <HomeLink/>
                    <BookmarkCity/>

                    <Modal visible={visible} setVisible={setVisible}>
                        <Search getCity={getCity}>
                            <GiMagnifyingGlass/>
                        </Search>
                    </Modal>

                    <ButtonForModal setVisible={setVisible}>
                        <MdOutlineFmdGood/>
                        {weatherFiveDays.city.name},
                        <span className={style.countryName}>
                            {weatherFiveDays.city.country}
                        </span>
                    </ButtonForModal>

                    <div className={style.container}>
                        <FourDaysWeatherList {...weatherFiveDays.list}/>
                    </div>

                </>
                : error.message ? <Error/> : <Loader/>
            }
        </div>
    );
};

export default FourDaysWeather;