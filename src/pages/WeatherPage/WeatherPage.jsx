import React from 'react';
import style from "./WeatherPage.module.scss";
import weatherIcon from "../../Assets/Icons/sivvus_weather_symbols_2.svg";
import {Link, useNavigate} from "react-router-dom";
import {GiMagnifyingGlass} from "react-icons/gi";
import Search from "../../components/UI/Search/Search";


const WeatherPage = ({getCity}) => {
    let navigate = useNavigate();
    const reLink = () => {
        navigate("/current", {replace: true});
    }

    return (
        <div className={style.container} onKeyDown={(e) => {
            if (e.key === 'Enter') reLink()
        }}>
            <Search getCity={getCity} >
                <Link to='/current' >
                    <GiMagnifyingGlass/>
                </Link>
            </Search>
            <div className={style.image}>
                <img src={weatherIcon} alt=""/>
            </div>
            <div className={style.text}>
                <p><span>Find</span> your weather predictions in your city </p>
                <p> Easy steps to predict the weather and make your day easier! </p>
            </div>

        </div>
    )
};

export default WeatherPage;