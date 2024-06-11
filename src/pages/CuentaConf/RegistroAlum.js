import HeaderApp from "../../modelos/header/HeaderApp";
import registroAlum from "../CuentaConf/imagenes/registroAlum.svg"
import MultiLinks from "../../componentes/multiboton/multiLinks";
import React, {useState, useEffect} from "react";
import InputEmail from "../../componentes/input/inputEmail";
import InputPassword from "../../componentes/input/inputPassword";
import Input from "../../componentes/input/input";
import Boton from "../../componentes/boton/boton";
import {useNavigate, NavLink} from "react-router-dom";
import FooterApp from "../../modelos/footer/FooterApp.jsx";
import axios from "axios";

export default function RegistroAlum(){
    const navigate = useNavigate();
    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [pinError, setPinError] = useState(true);
    const [nombreError, setNombreError] = useState(true);
    const [apeMatError, setApeMatError] = useState(true);
    const [apePatError, setApePatError] = useState(true);
    const [claseError, setClaseError] = useState(true);
    const [sendError, setSendError] = useState(false);
    const [sendMsg, setSendMsg] = useState("");
    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    //################ Variable sdel formulario #####################//

    const [nombre, setNombre] = useState("");
    const [apePat, setApePat] = useState("");
    const [apeMat, setApeMat] = useState("");
    const [correo, setCorreo] = useState("");
    const [pinSeguridad, setPinSeguridad] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [clase, setClase] = useState("");

    //#####################################//

    async function save(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/usuario/registro/alumno",{
                "alumno": {
                    "nombre": nombre,
                    "apePat": apePat,
                    "apeMat": apeMat,
                    "correo": correo,
                    "pinSeguridad": pinSeguridad,
                    "contrasena": contrasena
                },
                "clase": {
                        "id": clase
                }
            }).then((res) => {
                if(res.data.error === false){
                    setSendError(false);
                    setSendForm(false);
                    setSendMsg("");
                    localStorage.setItem("sessionId", res.data.sessionId);
                    localStorage.setItem("sessionType", "alumno");
                    navigate('/Inicio/Alum');
                }else{
                    setSendMsg(res.data.message);
                    setSendError(true);
                }
            });
        }catch(error) {
            setSendMsg("Hubo un error inesperado, intentelo más tarde");
            setSendError(true);
        }

    }

    async function validarSesion() {

        try {
            const sessionId = localStorage.getItem("sessionId");
            const sessionType = localStorage.getItem("sessionType");
            await axios.post("http://localhost:8080/usuario/validar/alumno", {
                "sesionId": sessionId,
                "type": sessionType
            }).then((res) => {
                if (res.data.error === false) {
                    navigate('/Inicio/Alum');
                }
            });
        } catch(error){
        }
    }

    useEffect(() => {
        if(localStorage.getItem("sessionId") != null && localStorage.getItem("sessionType") != null){
            validarSesion();
        }
    }, []);

    let handleEmailContent = (content) => {
        setCorreo(content);
    }

    let handlePinContent = (content) => {
        setPinSeguridad(content);
    }

    let handleNombreContent = (content) => {
        setNombre(content);
    }

    let handleApePatContent = (content) => {
        setApePat(content);
    }

    let handleApeMatContent = (content) => {
        setApeMat(content);
    }

    let handleClaseContent = (content) => {
        setClase(content);
    }

    let handlePassContent = (content) => {
        setContrasena(content);
    }

    useEffect(() => {
        if(!emailError && !passError && !pinError && !nombreError && !apeMatError && !apePatError && !claseError){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [emailError, passError, pinError, nombreError, apeMatError, apePatError, claseError]);

    let handleValue = (value) => {
        setValue(value);
    }

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    }


    let handlePinError = (error) => {
        setPinError(error);
    }

    let handleNombreError = (error) => {
        setNombreError(error);
    }

    let handleApeMatError = (error) => {
        setApeMatError(error);
    }

    let handleApePatError = (error) => {
        setApePatError(error);
    }

    let handleClaseError = (error) => {
        setClaseError(error);
    }

    return(
        <>
            <HeaderApp/>
            <div style={{
                display: "flex",
                width: "calc(100% - 2*var(--XXS, 24px))",
                padding: "var(--XXS, 24px)",
                alignItems: "flex-start"
            }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--M, 48px)",
                    flex: "1 0 0"
                }}>
                    <h2 className="secondary brand">¡Hola! Bienvenid@</h2>
                    <MultiLinks
                        text1="Estudiante" text2="Profesor/a" show1={true} show2={true}
                        showIcon1={true} showIcon2={false} to1="/registro/Alum" to2="/registro/Profe"
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--XXS, 24px)",
                        alignSelf: "stretch"
                    }}>
                        <h5>Padre/Madre/Tutor</h5>
                        <div style={{
                            display: "flex",
                            padding: "var(--US, 8px) var(--XXXS, 12px)",
                            width: "100%",
                            flexDirection: "column"
                        }}>
                            <InputEmail Style={"primary"} label={"Correo Electrónico"} showLabel={true}
                                        EmailError={handleEmailError} required={true} register={true} contenido={handleEmailContent}/>
                            <InputPassword label={"Pin de seguridad"} showLabel={true}
                                           PasswordError={handlePinError} required={true} register={true} contenido={handlePinContent}/>
                        </div>
                        <h5>Alumno</h5>
                        <div style={{
                            display: "flex",
                            padding: "var(--US, 8px) var(--XXXS, 12px)",
                            width: "100%",
                            flexDirection: "column"
                        }}>
                            <InputPassword label={"Contraseña de la cuenta"} showLabel={true}
                                           PasswordError={handlePasswordError} required={true} register={true} contenido={handlePassContent}/>
                            <Input Style={"primary"} label={"Nombre(s)"} showLabel={true} required={true}
                                   InputError={handleNombreError} contenido={handleNombreContent}/>
                            <Input Style={"primary"} label={"Apellido Paterno"} showLabel={true} required={true}
                                   InputError={handleApePatError} contenido={handleApePatContent}/>
                            <Input Style={"primary"} label={"Apellido Materno"} showLabel={true} required={true}
                                   InputError={handleApeMatError} contenido={handleApeMatContent}/>
                            <Input label={"Código de la clase"} showLabel={true}
                                   InputError={handleClaseError} required={true} register={true} contenido={handleClaseContent}/>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "12px",
                                width: "100%"
                            }}>
                                <div style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "var(--XXS, 24px)"
                                }}>
                                    <Boton size={"small"} style={"secondary"} text={"Crear cuenta"} showIcon2={true}
                                           icon2={"fa-solid fa-right-to-bracket fa-fw"}
                                           handleClick={save} {...(sendForm ? {disabled: false} : {disabled: true})}
                                           action={""}
                                           method={""}/>
                                    {sendError ?
                                        <t6 style={{color: "var(--color-error, #FF0000)"}}>{sendMsg}</t6> : null}
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "0px",
                                width: "100%"
                            }}>
                                <t6>¿Ya tienes cuenta?&nbsp;&nbsp;</t6>
                                <nav className={"/"}>
                                    <NavLink to="/login/alumno">
                                        <t6 className={"primary brand"}> Inicia Sesión</t6>
                                    </NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: "40%", position: "sticky", top: "0"}}>
                    <img style={{width: "100%"}} src={registroAlum} alt="Ninos Estudiando"/>
                </div>

        </div>
    <FooterApp/>
</>
)
}