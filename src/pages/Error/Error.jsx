import React from 'react';
import HomeLink from "../../components/UI/homeLink/HomeLink";
import style from "./Error.module.scss"

const Error = () => {

    return (
        <div>
            <div className={style.container}>An error has occurred. Try again later or go back to the <span className={style.homeLink}><HomeLink/></span> and try again.</div>
        </div>
    );
};

export default Error;