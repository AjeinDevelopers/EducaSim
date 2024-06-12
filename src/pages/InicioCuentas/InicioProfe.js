import React from "react";
import {useState, useEffect} from "react";
import HeaderApp from "../../modelos/header/HeaderApp.jsx";
import inicioProf from '../../pages/InicioCuentas/imagenes/inicioProf.svg';
import MultiLinks from '../../componentes/multiboton/multiLinks';
import InputEmail from "../../componentes/input/inputEmail.jsx";
import InputPassword from "../../componentes/input/inputPassword.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import FooterApp from "../../modelos/footer/FooterApp.jsx";
import axios from "axios";

export default function InicioAlumn() {
    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [sendError, setSendError] = useState(false);
    const [sendMsg, setSendMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!emailError && !passError) {
            setSendForm(true);
            console.log("Entra al if error");
        } else {
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [emailError, passError]);

    let handleEmailError = (error) => {
        setEmailError(error);
    };

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleEmailContent = (content) => {
        setCorreo(content);
    }

    let handlePassContent = (content) => {
        setContrasena(content);
    }

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
            await axios.post("http://localhost:8080/usuario/login/profesor/", {
                "correo": correo,
                "contrasena": contrasena
            }).then((res) => {
                if (res.data.error === false) {
                    localStorage.setItem("sessionId", res.data.sessionId);
                    localStorage.setItem("sessionType", "profesor");
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

    return (
        <>
            <HeaderApp/>
            <div style={{width: "1440px", height: "692px", display: "flex", alignItems: "center"}}>
                <img src={inicioProf} alt="Profesor con libros"/>
                <div style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--M, 48px)",
                    display: "flex",
                    flex: "1 0 0"
                }}>
                    <h2 className="secondary brand">¡Hola de Nuevo!</h2>
                    <div style={{
                        display: "flex",
                        padding: "0px 24px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "24px",
                        alignSelf: "stretch"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px"
                        }}>
                            <MultiLinks
                                text1="Estudiante" text2="Profesor/a" show1={true} show2={true}
                                show3={false} showIcon1={true} showIcon2={false} to1="/login/alumno"
                                to2="/login/profesor"
                            />
                            <div style={{
                                width: "624px",
                                display: "flex",
                                padding: "8px 12px",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "8px",
                                alignSelf: "stretch"
                            }}>
                                <InputEmail label="Correo Electrónico" showLabel={true} EmailError={handleEmailError}
                                            required={true} register={true} contenido={handleEmailContent}/>
                                <InputPassword label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError}
                                               required={true} register={true} contenido={handlePassContent}/>

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
                                        <Boton size={"small"} style={"secondary"} text={"Iniciar Sesion"}
                                               showIcon2={true}
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
                                    <t6>¿Aún no tienes cuenta?&nbsp;&nbsp;</t6>
                                    <nav className={"/"}>
                                        <NavLink to="/registro/Profe">
                                            <t6 className={"primary brand"}> ¡Registrate ahora!</t6>
                                        </NavLink>
                                    </nav>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <FooterApp/>
        </>
    )
}
