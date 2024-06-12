import HeaderApp from "../../modelos/header/HeaderApp";
import registroProf from "../CuentaConf/imagenes/registroProf.svg"
import MultiLinks from "../../componentes/multiboton/multiLinks";
import React, {useState, useEffect} from "react";
import InputEmail from "../../componentes/input/inputEmail";
import InputPassword from "../../componentes/input/inputPassword";
import Input from "../../componentes/input/input";
import Boton from "../../componentes/boton/boton";
import {NavLink, useNavigate} from "react-router-dom";
import FooterApp from "../../modelos/footer/FooterApp.jsx";
import axios from "axios";

export default function RegistroProfe() {
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

    async function validarSesion() {

        try {
            const sessionId = localStorage.getItem("sessionId");
            const sessionType = localStorage.getItem("sessionType");
            await axios.post("http://localhost:8080/usuario/validar/profe", {
                "sesionId": sessionId,
                "type": sessionType
            }).then((res) => {
                if (res.data.error === false) {
                    localStorage.setItem("sessionId", res.data.sessionId);
                    localStorage.setItem("sessionType", "profesor");
                    navigate('/Inicio/Prof');
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

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/usuario/registro/profesor", {
                "correo": correo,
                "contrasena": contrasena,
                "nombre": nombre,
                "apePat": apePat,
                "apeMat": apeMat
            }).then((res) => {
                if (res.data.error === false) {
                    setSendError(false);
                    setSendForm(false);
                    setSendMsg("");
                    localStorage.setItem("sessionId", res.data.sessionId);
                    navigate('/Inicio/Prof');
                } else {
                    setSendMsg(res.data.message);
                    setSendError(true);
                }
            });
        } catch (error) {
            setSendMsg("Hubo un error inesperado, intentelo más tarde");
            setSendError(true);
        }

    }

    useEffect(() => {
        if (!emailError && !passError && !nombreError && !apeMatError && !apePatError) {
            setSendForm(true);
        } else {
            setSendForm(false);
        }
    }, [emailError, passError, nombreError, apeMatError, apePatError]);

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
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


    let handleEmailContent = (content) => {
        setCorreo(content);
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

    let handlePassContent = (content) => {
        setContrasena(content);
    }

    return (
        <>
            <HeaderApp/>
            <div style={{
                display: "flex",
                width: "calc(100% - 2*var(--XXS, 24px))",
                padding: "var(--XXS, 24px)",
                alignItems: "flex-start"
            }}>
                <div style={{
                    display: "flex",
                    padding: "var(--XS, 24px) 0px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--M, 48px)",
                    flex: "1 0 0"
                }}>
                    <h2 className="secondary brand">¡Hola! Bienvenid@</h2>
                    <div style={{
                        display: "flex",
                        padding: "0px var(--XXS, 32px)",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--XXS, 8px)",
                        alignSelf: "stretch"
                    }}>
                        <MultiLinks
                            text1="Estudiante" text2="Profesor/a" show1={true} show2={true}
                            showIcon1={true} showIcon2={false} to1="/registro/Alum" to2="/registro/Profe"
                        />
                        <div style={{
                            display: "flex",
                            padding: "var(--US, 8px) var(--XXXS, 12px)",
                            width: "100%",
                            flexDirection: "column"
                        }}>
                            <InputEmail Style={"primary"} label={"Correo Electrónico"} showLabel={true}
                                        EmailError={handleEmailError} required={true} register={true}
                                        contenido={handleEmailContent}/>
                            <InputPassword label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError}
                                           required={true} register={true} contenido={handlePassContent}/>
                            <Input Style={"primary"} label={"Nombre(s)"} showLabel={true} required={true}
                                   InputError={handleNombreError} contenido={handleNombreContent}/>
                            <Input Style={"primary"} label={"Apellido Paterno"} showLabel={true} required={true}
                                   InputError={handleApePatError} contenido={handleApePatContent}/>
                            <Input Style={"primary"} label={"Apellido Materno"} showLabel={true} required={true}
                                   InputError={handleApeMatError} contenido={handleApeMatContent}/>
                        </div>
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
                                <NavLink to="/login/profesor">
                                    <t6 className={"primary brand"}> Inicia Sesión</t6>
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
                <div style={{width: "40%", position: "sticky", top: "0"}}>
                    <img style={{width: "100%"}} src={registroProf} alt="Profesor con libros"/>
                </div>
            </div>
            <FooterApp/>
        </>

    )

}