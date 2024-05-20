import React from 'react';
import './input.css'

let show_input = true;

export default function Input(props) {
    return(
        <div className={"container"}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}

            </div>
            <div className={"input-container"}>
                <input type={show_input ? 'text' : 'password'}
                       name='password'
                       id='password'

                />
                {props.showIcon1 && <i id="icon-input" className={props.icon1} onClick={visibility}></i>}
            </div>
        </div>

    )
}

function visibility(){
    show_input = !show_input;
}
