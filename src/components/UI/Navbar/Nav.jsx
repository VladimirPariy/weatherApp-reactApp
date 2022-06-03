import React from 'react';
import style from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

const Nav = () => {
    const getClass = ({isActive}) => isActive ? style.active : ""

    return (
        <nav>
            <div className={style.list}>
                <div className={style.item}>
                    <NavLink to="/current" className={getClass}>
                        Now
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/today" className={getClass}>
                        Today
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/fourdays" className={getClass}>
                        4 days
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;