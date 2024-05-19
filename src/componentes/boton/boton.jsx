import React from 'react';
import './boton.css';
export default function Instructions(props) {
    return(
        <button className={props.estilo} onClick={props.handleClick}>
            {props.showIcon1 && <i className={props.icon1}></i>}
            <t5>{props.text}</t5>
            {props.showIcon2 && <i className={props.icon2}></i>}
        </button>
    )
}