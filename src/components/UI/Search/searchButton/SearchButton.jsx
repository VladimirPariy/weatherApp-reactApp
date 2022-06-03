import React from 'react';

const SearchButton = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>

    );
};

export default SearchButton;