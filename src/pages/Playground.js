import React from "react";
import Boton from "../componentes/boton/boton.jsx";
import PromoHeader from "../modelos/header/PromoHeader.jsx";
import InputPassword from "../componentes/input/inputPassword.jsx";
import InputEmail from "../componentes/input/inputEmail.jsx";
import {useState} from "react";

export default function Playground (){
    const [emailError, setEmailError] = useState("");

    const handleEmailError = (error) => {
        setEmailError(error);
    };

    return(

        <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <PromoHeader />

            <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}
                action={""} method={"get"}>
                <InputEmail label={"Correo"} type={"email"} onEmailError={handleEmailError} required={true} />
                <InputPassword label={"Contraseña"} required={true}/>
                <Boton estilo={"small secondary"} text={"Iniciar Sesión"} showIcon2={true}
                       icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"}/>
            </form>

            {/*emailError && <div>{emailError}</div>*/}

        </div>
    )
}
