import React from 'react';
import style from "./itemFromLocalStorage.module.scss";
import {TiDeleteOutline} from "react-icons/ti";

const ItemFromLocalStorage = ({cityList, setCityList}) => {

    const removeLocalStorageItem = (target) => {
        setCityList(cityList.filter(item => target.id !== item.id))
        localStorage.setItem('city', cityList)
    }

    return cityList.map(item =>
        <div className={style.item} key={item.id}>
            <button className={style.removeIconItem}
                    onClick={() => removeLocalStorageItem(item)}>
                <TiDeleteOutline/>
            </button>
            <div className={style.cityNameItem}>{item.city}</div>
        </div>
    )


};

export default ItemFromLocalStorage;