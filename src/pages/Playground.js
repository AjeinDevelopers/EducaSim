import React from "react";
import Boton from "../componentes/boton/boton.jsx";
import PromoHeader from "../modelos/header/PromoHeader.jsx";
import InputPassword from "../componentes/input/inputPassword.jsx";
import InputEmail from "../componentes/input/inputEmail.jsx";
import Input from "../componentes/input/input.jsx"
import {useState, useEffect} from "react";
import MultiLinks from "../componentes/multiboton/multiLinks";
import Pill from "../componentes/pill/pill.jsx";
import RadButtonGroup from "../componentes/radbutton/RadButtonGroup.jsx";
import Dropdown from "../componentes/dropdown/dropdown";

export default function Playground (){

    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [inputError, setInputError] = useState(true);

    const items = [
        {value: 'opc1', label: 'Opc1'},
        {value: 'opc2', label: 'Opc2'},
        {value: 'opc3', label: 'Opc3'},
    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!emailError && !passError && !inputError){
            setSendForm(true);
            console.log("Entra al if error");
        }else{
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [emailError, passError, inputError]);

    let handleValue = (value) => {
        setValue(value);
    }

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleInputError = (error) => {
        setInputError(error);
    };

    let handleSelector = (value) => {
        setSelector(value);
    }

    return(

        <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <PromoHeader />
            <div style={{width: "100%", flexDirection: "column", alignItems:"center", gap:"24px"}}>
                <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}
                    action={""} method={"get"}>
                    <MultiLinks text1={"hola"} text2={"hola"} text3={"hola"} show1={true} show2={true} showIcon1={false} showIcon2={false}
                                to1={"/play"} to2={"/"}/>
                    <Input Style={"primary"} label = {"Hola buenas"} required = {true} InputError={handleInputError}/>
                    <InputEmail Style={"primary"}  label={"Correo"} EmailError={handleEmailError} required={true} register ={true}/>
                    <InputPassword Style={"primary"} label={"Contraseña"} PasswordError={handlePasswordError} required={true} register = {true}/>
                    <Boton size = {"small"} Style={"secondary"} text={"Iniciar Sesión"} showIcon2={true}
                        icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />
                </form>
                <Pill text={"Holaaa"} size={"large"} showIcon={true} icon={"fa-solid fa-right-to-bracket fa-fw"}/>
                <Dropdown label={"Hola"} items={items} size={"Large"} onChange={handleSelector}/>
                <RadButtonGroup items={items} size={"large"} onChange={handleValue}/>
                <t5>{selector}</t5>
            </div>
        </div>

    )
}
