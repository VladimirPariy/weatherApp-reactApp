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