import React from "react";
import "./pill.css";

export default function Pill(props) {
    return(
        <div id={"Pill-Container"} className={props.size + " " + props.Style}>
            {props.showIcon && <i className={props.icon}></i>}
            <t5>{props.text}</t5>
        </div>
    )
}