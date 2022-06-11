import React from "react";
import style from "./HomePage.module.scss";
import weatherIcon from "../../Assets/Icons/sivvus_weather_symbols_2.svg";
import {Link, useNavigate} from "react-router-dom";
import {GiMagnifyingGlass} from "react-icons/gi";
import Search from "../../components/UI/Search/Search";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import ItemFromLocalStorage from "../../components/UI/itemFromLocalStorage/ItemFromLocalStorage";

const HomePage = ({setCurrentCity}) => {
    const [cityList, setCityList] = useLocalStorage('city', [])

    const navigate = useNavigate();
    const relink = () => {
        navigate('/current', {replace: true});
    }

    return (
        <div className={style.container}
             onKeyDown={(e) => {
                 if (e.key === 'Enter') relink()
             }}>
            <Search setCurrentCity={setCurrentCity}>
                <Link to='/current'>
                    <GiMagnifyingGlass/>
                </Link>
            </Search>

            {(cityList.length > 0) ?
                <div className={style.localStorageContainer}>
                    <ItemFromLocalStorage cityList={cityList} setCityList={setCityList} setCurrentCity={setCurrentCity}/>
                </div>
                : <>
                    <div className={style.image}>
                        <img src={weatherIcon} alt=""/>
                    </div>
                    <div className={style.text}>
                        <p><span>Find</span> your weather predictions in your city </p>
                        <p> Easy steps to predict the weather and make your day easier! </p>
                    </div>
                </>
            }
        </div>
    )
};

export default HomePage;