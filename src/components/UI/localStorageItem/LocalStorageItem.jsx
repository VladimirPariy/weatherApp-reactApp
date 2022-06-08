import React from 'react';
import style from "./LocalStorageItem.module.scss";
import {TiDeleteOutline} from "react-icons/ti";

const LocalStorageItem = ({cityList, setCityList}) => {

    const removeLocalStorageItem = (target) => {
        setCityList(cityList.filter(item => target.id !== item.id))
        localStorage.setItem('data', cityList)
    }

    return cityList.map(item =>
        <div className={style.cityItem} key={item.id}>
            <button className={style.iconItem}
                    onClick={() => removeLocalStorageItem(item)}>
                <TiDeleteOutline/>
            </button>
            <div className={style.cityNameItem}>{item.city}</div>
        </div>
    )


};

export default LocalStorageItem;