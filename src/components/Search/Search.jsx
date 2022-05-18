import React, { useState} from 'react';
import style from "./Search.module.scss";

const Search = () => {
    const [search, setSearch] = useState('')


    return (
        <div className={style.search}>
            <input type="text"
                   placeholder="Search city"
                   onChange={(e)=> {
                       setSearch(e.target.value.toLowerCase())
                   }}
            />
            <button>
                get started
            </button>
        </div>
    );
};

export default Search;