import React from 'react';
import './input.css'

export default function InputText(props){

    return(
        <container className={props.estilo}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            <input-container className={props.estilo}>
                <input type="text"
                       name={props.name}
                       id={props.id}/>
                {props.showIcon1 && <i className={props.icon1} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
            </input-container>
            {props.showMessage &&
                <div className={"label-container"}>
                    <t6 className={"label"}>{props.mensaje}</t6>
                </div>
            }
        </container>

    )
}
