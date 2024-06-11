import React from "react";
import {useState, useEffect} from "react";
import HeaderApp from "../../modelos/header/HeaderApp.jsx";
import inicioAlum from '../../pages/InicioCuentas/imagenes/inicioAlum.svg';
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
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleEmailContent = (content) => {
        setCorreo(content);
    }

    let handlePassContent = (content) => {
        setContrasena(content);
    }



    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/usuario/login/alumno", {
                "correo": correo,
                "contrasena": contrasena
            }).then((res) => {
                if (res.data.error === false) {
                    localStorage.setItem("sessionId", res.data.sessionId);
                    localStorage.setItem("sessionType", "alumno");
                    navigate('/Inicio/Alum');
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
            <div style={{
                padding: "var(--L, 64px), 0",
                width: "calc(100% - 2*var(--L, 64px))",
                height: "calc(100vh - (64px + 80px))",
                gap: "var(--M, 48px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img src={inicioAlum} alt="Nino Estudiandio" width={"40%"}/>
                <div style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--M, 48px)",
                    display: "flex",
                    flex: "1 0 0",
                    padding: "0 var(--M, 48px)",
                    width: "60%"
                }}>
                    <h2 className="secondary brand">¡Hola de Nuevo!</h2>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "24px",
                        alignSelf: "stretch",
                        width: "100%"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            width: "100%"
                        }}>
                            <MultiLinks
                                text1="Estudiante" text2="Profesor/a" show1={true} show2={true}
                                show3={false} showIcon1={true} showIcon2={false} to1="/login/alumno"
                                to2="/login/profesor"
                            />
                            <div style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "8px",
                                alignSelf: "stretch",
                                overflow: "auto"
                            }}>
                                <InputEmail label="Correo Electrónico" showLabel={true} EmailError={handleEmailError}
                                            required={true} register={true} contenido={handleEmailContent}/>
                                <InputPassword label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError}
                                               required={true} register={true} contenido={handlePassContent}/>

                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%"
                                }}>
                                    <div style={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "var(--XXS, 24px)"
                                    }}>
                                        <Boton size={"small"} style={"secondary"} text={"Iniciar Sesion"} showIcon2={true}
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
                                        <NavLink to="/registro/Alum">
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
