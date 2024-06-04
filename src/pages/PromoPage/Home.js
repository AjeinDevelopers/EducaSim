import React from "react";
import PromoHeader from "../../modelos/header/PromoHeader.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import nino from "./imagenes/nino.svg"
import { NavLink} from "react-router-dom";
import Card from "../../modelos/card/card.jsx";


const Home = () =>{
    return(
        <>
            <PromoHeader />
            <div style={{display:"flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                <div style={{display:"flex", padding:"var(--XXXS, 16px) var(--M, 48px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XXXS, 16px)", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
                    <h1 className="primary brand">EducaSim</h1>
                    <h4 className="secondary brand">Educa sin Límites</h4>
                    <div style={{display:"flex", width:"100", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                        <div style={{display:"flex", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center",alignSelf:"stretch", gap:"var(--XXXS, 16px)"}}>
                            <t5>Con EducaSim, buscamos mejorar la calidad de la educación en matemáticas en México, ofreciendo una solución integral y accesible para estudiantes de primaria.</t5>
                            <div style={{display:"flex", padding:"var(--XUS, 8px) var(--XXXS, 16px)", alignItems:"center", gap:"var(--XXXS, 16px)" }}>
                            <nav className="link-container">
                            <NavLink className={''} to='/registro_Alum'><Boton size = {"small"} Style={"secondary"} text={"Registrarse"} showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} /></NavLink>
                            <NavLink className={''} to='/login_alumno'><Boton size = {"small"} Style={"primary"} text={"Iniciar Sesión"} showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} /></NavLink>
                            </nav> 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <img style={{ width:"100%", top: "0px", alignItems:"center"}} src={nino} alt="nino estudiando"/> 
                </div>
                <div style={{display:"flex", padding:"var(--M, 48px) var(--XXS, 24px)",background:"var(--Color-Principales-Claros-Primary, #CAE6FF);" , justifyContent:"center", alignItems:"center"}}>
                    <h2 className="secondary brand">¿Por qué EducaSim?</h2>
                   
                    <div style={{display:"flex", padding:"var(--XS, 32px) var(--XXS, 24px)", justifyContent:"space-between", alignItems:"center", alignSelf:"stretch"}}>
                    <Card direction={"vertical"} width={"304px"} header={"Holaa"} link={true} actions={true} adicional={true}
                      bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={"si"}
                      text={"Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"}/>
                    
                     <Card direction={"vertical"} width={"304px"} header={"Holaa"} link={true} actions={true} adicional={true}
                      bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={"si"}
                      text={"Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"}/> 

                     <Card direction={"vertical"} width={"304px"} header={"Holaa"} link={true} actions={true} adicional={true}
                      bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={"si"}
                      text={"Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"}/>
                    </div> 
                </div>
        
        </>
    )
}

export default Home;