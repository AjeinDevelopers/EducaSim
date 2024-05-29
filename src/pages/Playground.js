import React from "react";
import Boton from "../componentes/boton/boton.jsx";
import PromoHeader from "../modelos/header/PromoHeader.jsx";
import InputPassword from "../componentes/input/inputPassword.jsx";
import InputEmail from "../componentes/input/inputEmail.jsx";
import Input from "../componentes/input/input.jsx"
import {useState, useEffect} from "react";
import MultiLinks from "../componentes/multiboton/multiLinks";
//import Dropdown from "../componentes/dropdown/dropdown";

export default function Playground (){

    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [inputError, setInputError] = useState(true);

    useEffect(() => {
        if(!emailError && !passError && !inputError){
            setSendForm(true);
            console.log("Entra al if error");
        }else{
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [emailError, passError, inputError]);

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleInputError = (error) => {
        setInputError(error);
    };

    return(

        <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <PromoHeader />

            <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}
                action={""} method={"get"}>
                <MultiLinks text1={"hola"} text2={"hola"} text3={"hola"} show1={true} show2={true} showIcon1={false} showIcon2={false}
                            to1={"/play"} to2={"/"}/>
                <Input Style={"primary"} label = {"Hola buenas"} required = {true} InputError={handleInputError}/>
                <InputEmail label={"Correo"} EmailError={handleEmailError} required={true} register ={true}/>
                <InputPassword label={"Contraseña"} PasswordError={handlePasswordError} required={true} register = {true}/>
                <Boton size = {"small"} Style={"secondary"} text={"Iniciar Sesión"} showIcon2={true}
                       icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />

            </form>
        </div>

    )
}
