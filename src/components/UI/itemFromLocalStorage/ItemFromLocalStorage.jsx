import React from 'react';
import style from "./itemFromLocalStorage.module.scss";
import {TiDeleteOutline} from "react-icons/ti";
import {Link} from "react-router-dom";

const ItemFromLocalStorage = ({cityList, setCityList, setCurrentCity}) => {

    const removeLocalStorageItem = (target) => {
        setCityList(cityList.filter(item => target.id !== item.id))
        localStorage.setItem('city', cityList)
    }

    const relinkByLSItem = (e) => {

        setCurrentCity(e.target.innerText)

    }

    return cityList.map(item =>
        <div className={style.container} key={item.id}>
            <button className={style.removeIconItem}
                    onClick={() => removeLocalStorageItem(item)}>
                <TiDeleteOutline/>
            </button>
            <Link to='/current'>
                <div className={style.item} onClick={(e) => {
                    relinkByLSItem(e)
                }}>
                    <div className={style.cityNameItem}>{item.city}</div>
                </div>
            </Link>
        </div>
    )


};

export default ItemFromLocalStorage;