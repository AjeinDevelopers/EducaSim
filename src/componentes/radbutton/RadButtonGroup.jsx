import React, {useEffect} from "react";
import {useState} from 'react';
import "./radbutton.css";

export default function RadButtonGroup(props){

    const [valor, setValor] = useState(null);
    const [estilo, setEstilo] = useState(props.estilo);

    useEffect(() => {
        props.onChange(valor);
        if(props.required) {
            if (valor === null) {
                setEstilo(setEstilo("error"));
                props.RadButtonError(true);
            } else {
                setEstilo(props.estilo);
                props.RadButtonError(false);
            }
        }
    }, [valor]);


    return(
        <>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            {props.items.map(item => {
                return (
                    <div className={props.size + " " + estilo + " rad-container"}>
                        <input className={estilo} id={item.value} name={item.name} value={item.value}
                               checked={valor === item.value}
                               onChange={e => setValor(e.target.value)} type="radio"/>
                        <label className={estilo} htmlFor={item.value} id={"label-radio"}>
                            <t5>{item.label}</t5>
                        </label>
                    </div>
                )
            })}
        </>
    );
}