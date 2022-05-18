import React from 'react';
import style from "./Nav.module.scss"
import { NavLink, Outlet} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className={style.ul}>
                <li className={style.item}>
                    <NavLink to="today">
                        Today
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="fourdays">
                        4 days
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="sevendays" >
                        7 days
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
};

export default Nav;