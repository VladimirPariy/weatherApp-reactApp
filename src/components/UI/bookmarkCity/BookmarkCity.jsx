import React from 'react';
import style from './BookmarkCity.module.scss'
import {IoIosAddCircleOutline} from "react-icons/io";

const BookmarkCity = () => {
    return (
        <span className={style.bookmark}>
            <button>
                <IoIosAddCircleOutline/>
            </button>
        </span>
    );
};

export default BookmarkCity;