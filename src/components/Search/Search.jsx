import React, {useEffect, useRef, useState} from 'react';
import style from "./Search.module.scss";
import {NavLink} from "react-router-dom";
import {useWeather} from "../../services/Fetching/Fetching";


const Search = () => {
    const [search, setSearch] = useState('')

    const input = useRef('')

    const {getCity} = useWeather()

    useEffect(() => {
        getCity(search)
    }, [search])

    return (
        <div className={style.search}>
            <input type="text"
                   placeholder="Search city"
                   ref={input}
            />
            <NavLink to='today'>
                <button onClick={() => {
                    setSearch(input.current.value)
                }}>
                    get started
                </button>
            </NavLink>
        </div>
    );
};

export default Search;