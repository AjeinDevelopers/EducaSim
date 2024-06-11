import React from 'react';
import {useState, useCallback} from 'react';
import './input.css'

export default function InputEmail(props){

    const [isEmail, setIsEmail] = useState(true);
    const [errorcito, setError] = useState("");
    const [estilo, setEstilo] = useState(props.Style);

    const EMAIL_REGEX = new RegExp(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    );


    const handleEmail = useCallback((event) => {
        const newEmail = event.target.value;

        if (newEmail.trim() === '' && props.required) {
            setError("El correo no puede estar vacio");
            props.EmailError(true);
            setEstilo("error");
            setIsEmail(false);
            return;
        }

        if (!EMAIL_REGEX.test(newEmail) && props.register) {
            setError("Correo inválido");
            props.EmailError(true);
            setEstilo("error");
            setIsEmail(false);
        } else {
            props.EmailError(false);
            props.contenido(newEmail.trim());
            setIsEmail(true);
            setEstilo(props.Style);
        }
    }, [props.EmailError]);

    return(
        <div id={"Input-container"} className={estilo}>
            {props.showLabel && <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>}
            <input-container className={props.estilo}>
                <input type= "email"
                       name={props.name}
                       id={props.id}
                       placeholder={props.placeholder}
                       {...(props.register ? {onChange: handleEmail} : {})}
                       required={props.required}
                       value={props.value}/>
                {props.showIcon1 && <i className={props.icon1} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
            </input-container>
            {!isEmail &&
                <div className={"label-container"}>
                    <t6 className={"label"}>{errorcito}</t6>
                </div>
            }
        </div>

    )
}
