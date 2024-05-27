import React from "react";
import Boton from "../componentes/boton/boton.jsx";
import PromoHeader from "../modelos/header/PromoHeader.jsx";
import InputPassword from "../componentes/input/inputPassword.jsx";
import InputEmail from "../componentes/input/inputEmail.jsx";
import {useState} from "react";
import Multiboton from "../componentes/multiboton/multiboton";

export default function Playground (){

    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(true);

    const handleEmailError = (error) => {
        setEmailError(!error);
        if(!passError){
            setSendForm(!error);
        }
    }

    const handlePasswordError = (error) => {
        setPassError(!error);
        if(!emailError){
            setSendForm(!error);
        }
    };

    return(

        <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <PromoHeader />

            <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}
                action={""} method={"get"}>
                <InputEmail label={"Correo"} type={"email"} EmailError={handleEmailError} required={true} register ={true}/>
                <InputPassword label={"Contraseña"} PasswordError={handlePasswordError} required={true} register = {true}/>
                <Boton size = {"small"} estilo={"secondary"} text={"Iniciar Sesión"} showIcon2={true}
                       icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />
                <Multiboton />
            </form>


        </div>
    )
}