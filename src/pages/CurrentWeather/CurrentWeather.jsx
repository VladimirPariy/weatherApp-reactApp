import React, {useEffect, useState} from 'react';
import style from './CurrentWeather.module.scss';
import {fetchingWeather} from "../../services/fetching/fetchingWeather";
import CurrentWeatherList from '../../components/currentWeatherList/CurrentWeatherList';
import Loader from "../../components/UI/loader/Loader";
import BookmarkCity from "../../components/UI/bookmarkCity/BookmarkCity";
import HomeLink from "../../components/UI/homeLink/HomeLink";
import Modal from "../../components/UI/modal/Modal";
import Search from "../../components/UI/Search/Search";
import {MdOutlineFmdGood} from "react-icons/md";
import ButtonForModal from "../../components/UI/buttonForModal/ButtonForModal";
import {GiMagnifyingGlass} from "react-icons/gi";
import Error from "../Error/Error";

const CurrentWeather = ({currentCity, getCity, visible, setVisible}) => {
    let type = "weather?";

    const [error, setError] = useState('');
    const [currentWeather, setCurrentWeather] = useState('');

    useEffect(() => {
        fetchingWeather(currentCity, type).then(res => setCurrentWeather(res)).catch(e => setError(e))
    }, [currentCity, type])

    return (
        <div className={style.wrapper}>
            {currentWeather && !error.message && currentCity.toUpperCase() === currentWeather.name.toUpperCase() ?
                <>
                    <HomeLink/>

                    <Modal
                        visible={visible}
                        setVisible={setVisible}>
                        <Search getCity={getCity}>
                            <GiMagnifyingGlass/>
                        </Search>
                    </Modal>

                    <ButtonForModal setVisible={setVisible}>
                        <MdOutlineFmdGood/>
                        {currentWeather.name},
                        <span className={style.countryName}>
                            {currentWeather.sys.country}
                        </span>
                    </ButtonForModal>

                    <BookmarkCity/>

                    <div className={style.container}>
                        <CurrentWeatherList currentWeather={currentWeather}/>
                    </div>
                </>
                : error.message ? <Error/> : <Loader/>
            }
        </div>
    );
};

export default CurrentWeather;