import React, { useEffect, useRef, useState} from 'react';
import style from "../../../styles/Search.module.scss";

const Search = ({getCity}) => {
    const [search, setSearch] = useState('')
    const input = useRef('')

    useEffect(()=> {
        getCity(search)
    }, [search])



    return (
        <div className={style.search}>
            <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path d="M 0 0 Q 500 0 0 0 T 0 0" stroke="black"
                      stroke-linecap="round" stroke-solid="5,10,5" fill="none"/>

            </svg>
            {/*<input type="text"*/}
            {/*       placeholder="Search city"*/}
            {/*       ref={input}*/}
            {/*/>*/}
            {/*    <button onClick={() => {*/}
            {/*        setSearch(input.current.value)*/}
            {/*    }}>*/}
            {/*        get started*/}
            {/*    </button>*/}
        </div>
    );
};

export default Search;