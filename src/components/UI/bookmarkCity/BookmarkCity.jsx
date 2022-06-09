import React from 'react';
import style from './BookmarkCity.module.scss'
import {IoIosAddCircleOutline} from "react-icons/io";

const BookmarkCity = ({cityName}) => {

    const handlerSetLocalStorageData = (city) => {
        const localStorageData = JSON.parse(localStorage.getItem('city'))

        if (localStorageData.length < 1) {
            localStorage.setItem('city', JSON.stringify([{city: city, id: Date.now()}]))
            return;
        }

        const cityExistsInLS = localStorageData.find(elem => {
            return elem.city.toUpperCase() === city.toUpperCase()
        })

        !cityExistsInLS
            ? localStorage.setItem('city', JSON.stringify([...localStorageData, {city: city, id: Date.now()}]))
            : localStorage.setItem('city', JSON.stringify([...localStorageData]))

    }


    return (
        <button className={style.bookmark} onClick={() => handlerSetLocalStorageData(cityName)}>
            <IoIosAddCircleOutline/>
        </button>
    );
};

export default BookmarkCity;