import React from 'react';
import {useState, useCallback} from 'react';
import './input.css'

export default function Input(props){

    const [lleno, setLleno] = useState(false);
    const [error, setError] = useState("");
    const [estilo, setEstilo] = useState(props.estilo);

    const handleInput = useCallback((event) => {
        const newInput = event.target.value;

        if (newInput.trim() === '') {
            setError("El correo no puede estar vacio");
            props.InputError(true);
            setLleno(false);
            setEstilo("error");
            return;
        }else {
            props.InputError(false);
            setLleno(true);
            setEstilo("primary");
        }
    }, [props.onEmailError]);

    return(

        <container className={estilo}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            <input-container className={props.estilo}>
                <input type= "email"
                       name={props.name}
                       id={props.id}
                       onChange={handleInput}
                       required={props.required}/>
                {props.showIcon1 && <i className={props.icon1} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
            </input-container>
            {!lleno &&
                <div className={"label-container"}>
                    <t6 className={"label"}>{error}</t6>
                </div>
            }
        </container>

    )
}