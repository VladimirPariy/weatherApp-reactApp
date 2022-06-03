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
                : <Loader/>}

        </div>
    );
};

export default FourDaysWeather;