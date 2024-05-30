import React, {useCallback, useState} from 'react';
import './input.css'

export default function InputPassword(props){

    const [passwordShown, setPasswordShown] = useState(false);
    const visibility = () => {
        setPasswordShown(!passwordShown);
    };

    const [isPassword, setIsPassword] = useState(true);
    const [errorcito, setError] = useState("");
    const [estilo, setEstilo] = useState(props.Style);

    const PASSWORD_REGEX = new RegExp(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/
    );


    const handlePassword = useCallback((event) => {
        const newEmail = event.target.value;

        if (newEmail.trim() === '' && props.required) {
            setError("La contraseña no puede estar vacia");
            props.PasswordError(true);
            setEstilo("error");
            setIsPassword(false);
            return;
        }

        if (!PASSWORD_REGEX.test(newEmail) && props.register) {
            setError("La contraseña debe tener al minimo 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial");
            props.PasswordError(true);
            setEstilo("error");
            setIsPassword(false);
        } else {
            props.PasswordError(false);
            setIsPassword(true);
            setEstilo(props.Style);
        }
    }, [props.PasswordError]);

    return(
        <div id={"Input-container"} className={estilo}>
            <div className={"label-container"}>
                <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>
            <input-container className={estilo}>
                <input type={passwordShown ? 'text' : 'password'}
                       name={props.name}
                       id={props.id}
                        required={props.required}
                       {...(props.register ? {onChange: handlePassword} : {})}
                        maxLength={20}/>
                <div onClick={visibility} className={props.estilo}>
                    {passwordShown && <i className={'fa-solid fa-eye-slash fa-fw'} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
                    {!passwordShown && <i className={"fa-solid fa-eye fa-fw"} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
                </div>
            </input-container>
            {!isPassword &&
                <div className={"label-container"}>
                    <t6 className={"label"}>{errorcito}</t6>
                </div>
            }
        </div>

    )
}
