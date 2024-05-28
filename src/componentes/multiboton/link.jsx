import React from "react";
import "./link.css";
import {NavLink} from "react-router-dom";

export default function Link(props) {
    return (
        <NavLink
                className={(navData) => (navData.isActive ? "small multiboton activeNav" : "small multiboton")}
                to = {props.toLink}>
            {props.showIcon1 && <i className={props.icon1}></i>}
            <t5>{props.text}</t5>
        </NavLink>
    );
}