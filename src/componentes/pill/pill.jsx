import React from "react";

export default function Pill(props) {
    return(
        <div id={"container"} className={props.size + " " + props.Style}>
            <t5>{props.text}</t5>
        </div>
    )
}