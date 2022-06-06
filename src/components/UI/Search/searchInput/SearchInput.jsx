import React, {forwardRef} from 'react';

const SearchInput = forwardRef((props, ref) => {
    return (
        <input type="text"
               ref={ref}
               placeholder="Search city"
               {...props}
        />
    );
});

export default SearchInput;