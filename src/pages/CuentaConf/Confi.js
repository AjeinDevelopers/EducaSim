import HeaderAlumno from "../../modelos/header/HeaderAlumno";
import React, {useState, useEffect} from "react";
import InputPassword from "../../componentes/input/inputPassword";
import Boton from "../../componentes/boton/boton";
import FooterApp from "../../modelos/footer/FooterApp";
import Input from "../../componentes/input/input";

export default function Confi() {

    const [sendCambioClase, setSendCambioClase] = useState(false);
    const [sendEliminarCuenta, setEliminarCuenta] = useState(false);
    const [claseError, setClaseError] = useState(true);
    const [pinCodigoError, setPinCodigoError] = useState(true);
    const [pinEliminarError, setPinEliminarError] = useState(true);
    const [claseContent, setClaseContent] = useState("");
    const [pinCodigoContent, setPinCodigoContent] = useState("");
    const [pinEliminarContent, setPinEliminarContent] = useState("");

    let handleClaseError = (error) => {
        setClaseError(error);
    }

    let handlePinCodigoError = (error) => {
        setPinCodigoError(error);
    }

    let handlePinEliminarError = (error) => {
        setPinEliminarError(error);
    }

    let handleClaseContent = (content) => {
        setClaseContent(content);
    }

    let handlePinCodigoContent = (content) => {
        setPinCodigoContent(content);
    }

    let handlePinEliminarContent = (content) => {
        setPinEliminarContent(content);
    }

    useEffect(() => {
        if (!claseError && !pinCodigoError) {
            setSendCambioClase(true);
        } else {
            setSendCambioClase(false);
        }
    }, [claseError, pinCodigoError]);

    useEffect(() => {
        if (!pinEliminarError) {
            setEliminarCuenta(true);
        } else {
            setEliminarCuenta(false);
        }
    }, [pinEliminarError]);

    async function cerrarSesion() {
        localStorage.removeItem("sessionId");
        localStorage.removeItem("sessionType");
    }

    return (
        <>
            <HeaderAlumno/>
            <div style={{
                display: "flex",
                padding: "var(--XS, 32px) var(--M, 48px)",
                flexDirection: "column",
                alignItems: "center",
                gap: " var(--M, 48px)",
                alignSelf: "stretch"
            }}>
                <h2 className="secondary brand">Configuración de la cuenta</h2>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--S, 36px)",
                    alignSelf: "stretch"
                }}>

                </div>
                <div style={{
                    display: "flex",
                    padding: "0px var(--XXS, 24px)",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--S, 36px)",
                    flex: "1 0 0"
                }}>
                    <h5>Cambio de Clase</h5>
                    <div style={{
                        display: "flex",
                        width: "884px",
                        padding: "var(--US, 8px) var(--XXXS, 12px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "var(--US, 8px)",
                        alignSelf: "stretch"
                    }}>
                        <Input label={"Código de la clase"} showLabel={true} InputError={handleClaseError}
                               required={true} register={false} contenido={handleClaseContent}
                               maxLength={6}/>
                        <InputPassword Style={"primary"} label={"Pin de seguridad"} showLabel={true}
                                       required={true} register={false} PasswordError={handlePinCodigoError}
                                       contenido={handlePinCodigoContent}/>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "var(--XXXS, 12px)",
                            alignItems: "center",
                            gap: "var(--US, 8px)",
                            width: "100%"
                        }}>
                            <Boton size={"small"} Style={"secondary"} text={"Cambiar Clase"} showIcon2={false}
                                   icon2={""}
                                   method={""} {...(sendCambioClase ? {disabled: false} : {disabled: true})} />
                        </div>
                    </div>
                    <h5>Zona de Peligro</h5>
                    <div style={{
                        display: "flex",
                        width: "884px",
                        padding: "var(--US, 8px) var(--XXXS, 12px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--US, 8px)",
                        alignSelf: "stretch"
                    }}>
                        <h6>Cerrar Sesion</h6>
                        <Boton size={"small"} Style={"warning"} text={"Cerrar Sesión"} showIcon2={true}
                               icon2={"fa-solid fa-trash fa-fw"}
                               method={""} disabled={false} onClick={cerrarSesion}/>
                    </div>
                    <div style={{
                        display: "flex",
                        width: "884px",
                        padding: "var(--US, 8px) var(--XXXS, 12px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--US, 8px)",
                        alignSelf: "stretch"
                    }}>
                        <h6>Eliminar cuenta</h6>
                        <InputPassword Style={"primary"} label={"Pin de seguridad"} showLabel={true}
                                       PasswordError={handlePinEliminarError}
                                       required={true} register={false} contenido={handlePinEliminarContent}/>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "var(--XXXS, 12px)",
                            alignItems: "center",
                            gap: "var(--US, 8px)",
                            width: "100%"
                        }}>
                            <Boton size={"small"} Style={"error"} text={"Eliminar Cuenta"} showIcon2={true}
                                   icon2={"fa-solid fa-trash fa-fw"}
                                   method={""} {...(sendEliminarCuenta ? {disabled: false} : {disabled: true})}/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterApp/>
        </>
    )/*CORREGIR BOTON*/
}