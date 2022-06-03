import React, {useState} from 'react';
import style from "./Search.module.scss";
import SearchButton from "./searchButton/SearchButton";
import SearchInput from "./searchInput/SearchInput";

const Search = ({getCity, children}) => {

    const [search, setSearch] = useState('')


    const searchCity = () => {
        getCity(search)
        setSearch('')
    }

    return (
        <div className={style.search}>
            <SearchInput
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