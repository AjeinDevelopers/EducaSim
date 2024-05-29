import React from "react";
import "./dropdown.css";
import {useState} from "react";

export default function Dropdown(props) {

    const [estilo, setEstilo] = useState(props.estilo);

    return(
        <div className={estilo} id={"container"}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            <select name={props.name} id={props.id} style={estilo}>

            </select>
        </div>
    )
}