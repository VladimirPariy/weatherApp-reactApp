import React from 'react';
import style from "./../../../styles/Loader.module.scss"
import loader from "../../../Assets/Icons/Spinner-2s-200px.svg"

const Loader = () => {
    return (
        <div className={style.loader}>
            <span>Loading...</span>
            <img src={loader} alt="" className={style.img}/>
        </div>
    );
};

export default Loader;