import HeaderAlumno from "../../modelos/header/HeaderAlumno";
import InputEmail from "../../componentes/input/inputEmail";
import {useState, useEffect} from "react";
import InputPassword from "../../componentes/input/inputPassword";
import Boton from "../../componentes/boton/boton";
import FooterApp from "../../modelos/footer/FooterApp";
export default function Confi(){
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
    const [sendForm2, setSendForm2] = useState(false);
    const [emailError2, setEmailError2] = useState(true);
    const [passError2, setPassError2] = useState(true);

    useEffect(() => {
        if(!emailError && !passError){
            setSendForm(true);
            console.log("Entra al if error");
        }else{
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [emailError, passError]);

    let handleEmailError2 = (error) => {
        setEmailError(error);
    }

    let handlePasswordError2 = (error) => {
        setPassError(error);
    };
    return(
        <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XS, 32px) var(--M, 48px)", flexDirection:"column", alignItems:"center", gap:" var(--M, 48px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Configuración de la cuenta</h2>
                <div style={{display:"flex", justifyContent:"center", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                
                </div>
                <div style={{display:"flex", padding:"0px var(--XXS, 24px)", flexDirection:"column", alignItems:"center", gap:"var(--S, 36px)", flex:"1 0 0"}}>
                    <h5>Cambio de Contraseña</h5>
                    <div style={{display:"flex",width:"884px" ,padding:"var(--US, 8px) var(--XXXS, 12px)", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", gap:"var(--US, 8px)", alignSelf:"stretch"}}>
                        <InputPassword Style={"primary"} label={"Contraseña Anterior"} showLabel={true} PasswordError={handlePasswordError}
                        required={true} register={false}/>

                        <InputPassword Style={"primary"} label={"Nueva Contraseña"} showLabel={true} PasswordError={handlePasswordError}
                        required={true} register={true}/>
                        <div style={{display:"flex", justifyContent:"center", padding:"var(--XXXS, 12px)",alignItems:"center", gap:"var(--US, 8px)", width:"100%"}}>
                        <Boton size={"small"} Style={"secondary"} text={"Cambiar Contraseña"} showIcon2={false}
                           icon2={""}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />
                        </div>
                    </div>
                    <h5>Cambio de Corre Electrónico</h5>
                    <div style={{display:"flex",width:"884px" ,padding:"var(--US, 8px) var(--XXXS, 12px)", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", gap:"var(--US, 8px)", alignSelf:"stretch"}}>
                        <InputEmail Style={"primary"} label={"Correo Electrónico"} showLabel={true} EmailError={handleEmailError} required={true}
                            register={false}/>
                        <InputEmail Style={"primary"} label={" Nuevo Correo Electrónico"} showLabel={true} EmailError={handleEmailError} required={true}
                            register={false}/>
                        <InputPassword Style={"primary"} label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError}
                        required={true} register={false}/> 
                        <div style={{display:"flex", justifyContent:"center", padding:"var(--XXXS, 12px)",alignItems:"center", gap:"var(--US, 8px)", width:"100%"}}>
                        <Boton size={"small"} Style={"secondary"} text={"Cambiar Contraseña"} showIcon2={false}
                           icon2={""}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />
                        </div>       
                    </div>
                    <h5>Zona de Peligro</h5>
                    <div style={{display:"flex",width:"884px" ,padding:"var(--US, 8px) var(--XXXS, 12px)", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", gap:"var(--US, 8px)", alignSelf:"stretch"}}>
                    <InputPassword Style={"primary"} label={"Contraseña"} showLabel={true} PasswordError={handlePasswordError}
                        required={true} register={true}/>
                    <InputEmail Style={"primary"} label={"Correo Electrónico"} showLabel={true} EmailError={handleEmailError} required={true}
                            register={false}/>    
                        
                    <div style={{display:"flex", justifyContent:"center", padding:"var(--XXXS, 12px)",alignItems:"center", gap:"var(--US, 8px)", width:"100%"}}>
                        <Boton size={"small"} Style={"error"} text={"Eliminar Cuenta"} showIcon2={true}
                           icon2={"fa-solid fa-trash fa-fw"}
                           method={"SUMBIT"} disabled={false} />
                        </div>
                    </div>    
                </div>
            </div>
            <FooterApp/>
        </>
    )/*CORREGIR BOTON*/
}