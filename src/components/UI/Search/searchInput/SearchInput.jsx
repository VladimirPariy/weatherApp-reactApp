import React, {forwardRef} from 'react';

const SearchInput = forwardRef((props, ref) => {
    console.log(ref)
    return (
        <input type="text"
               ref={ref}
               placeholder="Search city"
               {...props}
        />
    );
});

export default SearchInput;