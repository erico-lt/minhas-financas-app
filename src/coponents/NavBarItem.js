import React from "react";

import { NavLink } from "react-router-dom";

export function NavBarItem (props) {

    return(
        <li className="nav-tem">
            <NavLink to={props.to} className={props.className}>
                {props.label}
                {props.children}
            </NavLink>
        </li>
    )
}