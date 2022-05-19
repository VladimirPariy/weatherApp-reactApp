import React from 'react';
import style from "./Nav.module.scss"
import {NavLink, Outlet} from "react-router-dom";
import Search from "../../components/Search/Search";

const Nav = () => {
    const getClass = ({isActive}) => isActive ? style.active : ""

    return (
        <nav>
            <ul className={style.list}>
                <li className={style.item}>
                    <NavLink to="today" className={getClass}>
                        Today
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="fivedays" className={getClass}>
                        5 days
                    </NavLink>
                </li>
            </ul>
            <Search/>
            <Outlet/>
        </nav>
    );
};

export default Nav;