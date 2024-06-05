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
import Card from "../modelos/card/card";
import FooterPromo from "../modelos/footer/FooterPromo";
import FooterApp from "../modelos/footer/FooterApp";
import Pregunta from "../modelos/pregunta/pregunta";
import HeaderApp from "../modelos/header/HeaderApp.jsx";

export default function Playground (){

    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [inputError, setInputError] = useState(true);
    const [dropdownError, setDropdownError] = useState(true);
    const [radButtonError, setRadButtonError] = useState(true);

    const items = [
        {value: 'opc1', label: 'Opc1'},
        {value: 'opc2', label: 'Opc2'},
        {value: 'opc3', label: 'Opc3'},
    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!emailError && !passError && !inputError && !dropdownError && !radButtonError){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [emailError, passError, inputError, dropdownError, radButtonError]);

    let handleValue = (value) => {
        setValue(value);
    }

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handleRadButtonError = (error) => {
        setRadButtonError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleDropdownError = (error) => {
        setDropdownError(error);
    }

    let handleInputError = (error) => {
        setInputError(error);
    };

    let handleSelector = (value) => {
        setSelector(value);
    }

    return(

        <>
            <PromoHeader/>
            <HeaderApp/>
            <div style={{
                width: "calc(100% - (var(--XXS, 24px) * 2))",
                padding: "48px 0px",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px"
            }}>
                <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}
                    action={""} method={"get"}>
                    <MultiLinks text1={"hola"} text2={"hola"} text3={"hola"} show1={true} show2={true} showIcon1={false}
                                showIcon2={false}
                                to1={"/play"} to2={"/"}/>
                    <Input Style={"primary"} label={"Hola buenas"} required={true} InputError={handleInputError}/>
                    <InputEmail Style={"primary"} label={"Correo"} EmailError={handleEmailError} required={true}
                                register={true}/>
                    <InputPassword Style={"primary"} label={"Contraseña"} PasswordError={handlePasswordError}
                                   required={true} register={true}/>
                    <Boton size={"small"} Style={"secondary"} text={"Iniciar Sesión"} showIcon2={true}
                           icon2={"fa-solid fa-right-to-bracket fa-fw"}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />
                    <Dropdown label={"Hola"} items={items} size={"Large"} required={true}
                              DropdownError={handleDropdownError} onChange={handleSelector}/>
                    <RadButtonGroup items={items} size={"large"} estilo={"primary"}
                                    label={"hola"} required={true} onChange={handleValue}
                                    RadButtonError={handleRadButtonError}/>
                    <Pregunta pregunta={"¿Qué es un componente?"} width={"100%"} img={"a"} />
                </form>
                <Pill text={"Holaaa"} size={"large"} showIcon={true} icon={"fa-solid fa-right-to-bracket fa-fw"}/>

                <Card direction={"vertical"} width={"304px"} header={"Holaa"} link={true} actions={true} adicional={true}
                      bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={"si"}
                      text={"Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"}/>
                
            </div>


            <FooterPromo/>
            <FooterApp/>
        </>

    )
}
