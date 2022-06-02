import React, { useEffect, useRef, useState} from 'react';
import style from "../../../styles/Search.module.scss";
import {GiMagnifyingGlass} from "react-icons/gi";

const Search = ({getCity, currentCity}) => {
    const [search, setSearch] = useState(currentCity)
    const input = useRef({search})
    console.log(search)
    useEffect(()=> {
        getCity(search)
    }, [getCity, search])

    return (
        <div className={style.search}>

            <input type="text"
                   placeholder="Search city"
                   ref={input}
            />
                <button onClick={() => {
                    setSearch(input.current.value);
                    getCity(search)
                    input.current.value = ''
                }}>
                    <GiMagnifyingGlass/>
                </button>
        </div>
    );
};

export default Search;