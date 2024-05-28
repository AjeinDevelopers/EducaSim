import React from "react";
import Boton from "../componentes/boton/boton.jsx";
import PromoHeader from "../modelos/header/PromoHeader.jsx";
import InputPassword from "../componentes/input/inputPassword.jsx";
import InputEmail from "../componentes/input/inputEmail.jsx";
import Input from "../componentes/input/input.jsx"
import {useState} from "react";
import MultiLinks from "../componentes/multiboton/multiLinks";

export default function Playground (){

    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [inputError, setInputError] = useState(true);

    const handleEmailError = (error) => {
        setEmailError(error);
        if(passError === false){
            if(inputError === false){
                if(emailError === false){
                    setSendForm(true);
                    console.log("Entra email");
                }
            }
        }
    }

    const handlePasswordError = (error) => {
        setPassError(error);
        if(passError === false){
            if(inputError === false){
                if(emailError === false){
                    setSendForm(true);
                    console.log("Entra email");
                }
            }
        }
    };

    const handleInputError = (error) => {
        setInputError(error);
        if(passError === false){
            if(inputError === false){
                if(emailError === false){
                    setSendForm(true);
                    console.log("Entra email");
                }
            }
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
                <MultiLinks text1={"hola"} text2={"hola"} text3={"hola"} show1={true} show2={true} showIcon1={false} showIcon2={false}
                            to1={"/play"} to2={"/"}/>
                <Input estilo = {"primary"} label = {"Hola buenas"} required = {true} InputError={handleInputError}/>
            </form>

            {!emailError === false && <p>jsjsjsjsj</p>}
            {!passError === false  && <p>help</p>}
            {!inputError === false  && <p>jugo de manzana</p>}
            {sendForm === true  && <p>siss</p>}


        </div>
    )
}
