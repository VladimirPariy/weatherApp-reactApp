import React, {useEffect, useRef, useState} from 'react';
import style from "./Search.module.scss";
import SearchButton from "./searchButton/SearchButton";
import SearchInput from "./searchInput/SearchInput";

const Search = ({getCity, children}) => {

    const [search, setSearch] = useState('')
    const inputFocus = useRef(null)

    const searchCity = () => {
        getCity(search)
        setSearch('')
    }
    useEffect(()=> {
        inputFocus.current.focus()
    })

    return (
        <div className={style.search} onKeyDown={(e) => {
            if (e.key === 'Enter') searchCity()
        }}>
            <SearchInput
                ref={inputFocus}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <SearchButton
                onClick={searchCity}>
                {children}
            </SearchButton>
        </div>
    );
};

export default Search;