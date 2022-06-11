import React from 'react';
import HomeLink from "../homeLink/HomeLink";
import Modal from "../modal/Modal";
import Search from "../Search/Search";
import {GiMagnifyingGlass} from "react-icons/gi";
import ButtonForCallingModal from "../buttonForCallingModal/ButtonForCallingModal";
import {MdOutlineFmdGood} from "react-icons/md";
import style from "./weatherPageHeader.module.scss";
import BookmarkCity from "../bookmarkCity/BookmarkCity";

const WeatherPageHeader = ({visible, setVisible, setCurrentCity, cityName, country}) => {

    return (
        <>
            <HomeLink/>

            <Modal visible={visible} setVisible={setVisible}>
                <Search setCurrentCity={setCurrentCity}>
                    <GiMagnifyingGlass/>
                </Search>
            </Modal>
            <div className={style.buttonForCallingModal}>
                <ButtonForCallingModal setVisible={setVisible}>
                    <MdOutlineFmdGood/>
                    {cityName},
                    <span className={style.countryName}>
                    {country}
                </span>
                </ButtonForCallingModal>
            </div>


            <BookmarkCity cityName={cityName}/>
        </>
    );
};

export default WeatherPageHeader;