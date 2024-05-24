import React from "react";
import Boton from "../componentes/boton/boton.jsx";
import PromoHeader from "../modelos/header/PromoHeader.jsx";
import InputPassword from "../componentes/input/inputPassword.jsx";
import InputEmail from "../componentes/input/inputEmail.jsx";
import {useState} from "react";

export default function Playground (){

    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState("");

    /*const handleEmailError = (error) => {
        setSendForm(!error);
    };*/

    const handleEmailError = (error) => {
        setEmailError(!error);
        setSendForm(!error);
    }

    const handlePasswordError = (error) => {
        setPassError(!error);
        setSendForm(!error);
    };

    return(

        <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <PromoHeader />

            <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}
                action={""} method={"get"}>
                <InputEmail label={"Correo"} type={"email"} EmailError={handleEmailError} required={true} register ={true}/>
                <InputPassword label={"Contraseña"} PasswordError={handlePasswordError} required={true} register = {true}/>
                <Boton estilo={"small secondary"} text={"Iniciar Sesión"} showIcon2={true}
                       icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />
            </form>

            {emailError && <div>adsasdsa</div>}

            {passError && <div>jejejjeje</div>}

            {sendForm && <div>juas juas jaus</div>}

        </div>
    )
}
