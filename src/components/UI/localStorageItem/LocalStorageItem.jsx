import React from 'react';
import style from "./LocalStorageItem.module.scss";
import {TiDeleteOutline} from "react-icons/ti";

const LocalStorageItem = ({localStorageItem}) => {
    console.log(localStorageItem)
    return localStorageItem.map(item => {
        return (
            <div className={style.cityItem} key={item.id}>
                <div className={style.iconItem}><TiDeleteOutline/></div>
                <div className={style.cityNameItem}>{item.city}</div>
            </div>
        )
    })

};

export default LocalStorageItem;