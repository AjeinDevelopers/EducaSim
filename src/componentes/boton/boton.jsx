import React from 'react';
import './boton.css';

/*
*
* Propiedades Boton
*
* size: Tamaño del boton
* Style: Estilo del boton
* text: Texto del boton
* showIcon1: Booleano que indica si se muestra el icono 1
* showIcon2: Booleano que indica si se muestra el icono 2
* icon1: Icono del boton 1
* icon2: Icono del boton 2
* handleClick: Funcion que se ejecuta al hacer click en el boton
* action: Accion del boton
* method: Metodo del boton
* disabled: Booleano que indica si el boton esta deshabilitado
* plano: Booleano que indica si el boton es plano (sin redondear bordes)
*
* */


export default function Boton (props) {
    return(
        <button style={{...(props.plano ? {borderRadius: "0"} : {})}} className={props.disabled ? (props.size + " disabled") : (props.size + " " + props.Style)} onClick={props.handleClick} formAction={props.action} formMethod={props.method} disabled={props.disabled}>
            {props.showIcon1 && <i className={props.icon1}></i>}
            <t5>{props.text}</t5>
            {props.showIcon2 && <i className={props.icon2}></i>}
        </button>
    )
}