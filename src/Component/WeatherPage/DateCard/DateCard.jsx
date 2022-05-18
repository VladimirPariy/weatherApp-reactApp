import React, {useEffect, useMemo, useState} from "react";
import style from "./DateCard.module.scss";
import {getDayOfTheWeek, getMonth, initialDate, initialDay, initialTime} from "./normalizeDate";

const DateCard = () => {

    const [time, setTime] = useState(initialTime());
    const [day, setDay] = useState(getDayOfTheWeek(initialDay()));
    const [dayNum, setDayNum] = useState(initialDate(0));
    const [month, setMonth] = useState(getMonth(initialDate(1)));
    const [year, setYear] = useState(initialDate(2));

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString().slice(0, 5));
            setDay(getDayOfTheWeek(date.getDay()));
            setDayNum(date.toLocaleDateString().split('.')[0]);
        }, 10000)
    }, [])

    return (<div className={style.dateCard}>
        <div className={style.time}>
            <span>{time}</span>
        </div>
        <div className={style.date}>
            <span className={style.day}>{day}</span>,
            <span className={style.dayNum}>{dayNum}</span>
            <span className={style.month}>{month}</span>
            <span className={style.year}>{year}</span>
        </div>
    </div>)

}
export default DateCard;