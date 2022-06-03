import React from 'react';

const SearchInput = ({...props}) => {

    return (
        <input type="text"
               placeholder="Search city"
               {...props}
        />
    );
};

export default SearchInput;