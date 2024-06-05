import React from "react";
import {useState, useEffect} from "react";
import HeaderApp from "../../modelos/header/HeaderApp.jsx";
import inicioProf from '../../pages/InicioCuentas/imagenes/inicioProf.svg';
import MultiLinks from '../../componentes/multiboton/multiLinks';
import InputEmail from "../../componentes/input/inputEmail.jsx";
import InputPassword from "../../componentes/input/inputPassword.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import {NavLink} from "react-router-dom";
import FooterApp from "../../modelos/footer/FooterApp.jsx";

export default function InicioAlumn (){
    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);

    useEffect(() => {
        if(!emailError && !passError){
            setSendForm(true);
            console.log("Entra al if error");
        }else{
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

    return(
        <>
            <HeaderApp />
        <div style={{ width: "1440px", height: "692px", display: "flex", alignItems: "center" }}>
            <img src={inicioProf} alt="Profesor con libros" />
            <div style={{ flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)", display: "flex", flex: "1 0 0" }}>
                <h2 className="secondary brand">¡Hola de Nuevo!</h2>
                <div style={{ display: "flex", padding: "0px 24px", flexDirection: "column", alignItems: "center", gap: "24px", alignSelf: "stretch" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                        <MultiLinks
                            text1="Estudiante" text2="Profesor/a" show1={true} show2={true}
                            show3={false}  showIcon1={true}  showIcon2={false} to1="/login/alumno"  to2="/login/profesor"
                        />
                        <div style={{ width:"624px",display: "flex", padding: "8px 12px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "8px", alignSelf: "stretch" }}>
                            <InputEmail label="Correo Electrónico" showLabel={true} EmailError={handleEmailError} required={true} register={true} />
                            <InputPassword label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError} required={true} register = {true}/>

                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", width:"100%" }}>
                            <Boton size = {"small"} style={""} text={"Iniciar Sesión"} showIcon2={true}
                            icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />
                             </div>    
                                <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0px", width:"100%"}}>
                                <t6>¿Aún no tienes cuenta?&nbsp;&nbsp;</t6>
                                <nav className={"/"}>
                                <NavLink to="/registro/Profe" ><t6 className={"primary brand"}> ¡Registrate ahora!</t6></NavLink>
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
