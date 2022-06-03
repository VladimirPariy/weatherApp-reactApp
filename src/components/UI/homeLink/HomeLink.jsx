import React from 'react';
import style from './HomeLink.module.scss'
import {AiOutlineHome} from "react-icons/ai";
import {Link} from "react-router-dom";

const HomeLink = () => {
    return (
        <Link to="/" className={style.home}>
            <AiOutlineHome/>
        </Link>
    );
};

export default HomeLink;