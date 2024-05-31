import React, {useEffect} from "react";
import "./dropdown.css";
import {useState} from "react";

export default function Dropdown(props) {

    const [estilo, setEstilo] = useState(props.estilo);
    const [valor, setValor] = useState(null);

    useEffect(() => {
        props.onChange(valor);
    }, [valor]);



    return(
        <div className={props.size + " " + estilo} id={"container"}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            <div className={"select-container"}>
                <select name={props.name} id={props.id} style={estilo} value={valor}
                        onChange={e => setValor(e.target.value)}>
                    <option disabled selected value>~~ Elige una opción ~~</option>
                    {props.items.map(item => {
                        return (
                            <option value={item.value}
                            >
                                {item.label}
                            </option>
                        );
                    })}
                </select>
                <div className={"select-arrow"}>
                <i className={"fa-solid fa-caret-down fa-fw"}></i>
                </div>
            </div>
        </div>
    )
}