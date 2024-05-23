import React, {useState} from 'react';
import './input.css'

export default function InputPassword(props){

    const [passwordShown, setPasswordShown] = useState(false);
    const visibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return(
        <container className={props.estilo}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            <input-container className={props.estilo}>
                <input type={passwordShown ? 'text' : 'password'}
                       name={props.name}
                       id={props.id}
                        required={props.required}/>
                {props.showIcon1 &&
                    <div onClick={visibility} className={props.estilo}>
                        {passwordShown && <i className={'fa-solid fa-eye-slash fa-fw'} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
                        {!passwordShown && <i className={"fa-solid fa-eye fa-fw"} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
                    </div>
                }
            </input-container>
            {props.showMessage &&
                <div className={"label-container"}>
                    <t6 className={"label"}>{props.mensaje}</t6>
                </div>
            }
        </container>

    )
}
