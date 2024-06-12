import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import volumenes from '../../../../assets/common/volumenes.png';
import volumenes_ej from '../../../../assets/common/volumenes_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion16(){
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);

    async function validarSesion() {

        try {
            const sessionId = localStorage.getItem("sessionId");
            const sessionType = localStorage.getItem("sessionType");
            await axios.post("http://localhost:8080/usuario/validar/alumno", {
                "sesionId": sessionId,
                "type": sessionType
            }).then((res) => {
                if (res.data.error === false) {
                    setLogged(true);
                } else {
                    navigate('/login/alumno');
                }
            });
        } catch(error){
            navigate('/login/alumno');
        }
    }

    useEffect(() => {
        if (localStorage.getItem("sessionId") === null && localStorage.getItem("sessionType") === null) {
            navigate('/login/alumno');
        } else {
            validarSesion();
        }
    }, []);
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={volumenes} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion4</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>5°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Volúmenes</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                El volumen de un objeto es el espacio que ocupa.<br></br>
                                La medida que se utiliza para medir el volumen es el metro cúbico (m3), que es el espacio que ocupa un cubo cuyos lados miden 1 metro.<br></br><br></br>
                                Hay unidades de medidas menores que se utilizan para medir volúmenes más pequeños (el volumen de una lata de refresco, el volumen de jarabe que hay que suministrar con una jeringuilla…).<br></br><br></br>
                                Decímetro cúbico (dm3). Es el volumen que ocupa un cubo cuyos lados miden un decímetro.<br></br>
                                Centímetro cúbico (cm3). Es el volumen que ocupa un cubo cuyos lados miden un centímetro.<br></br>
                                Milímetro cúbico (mm3). Es el volumen que ocupa un cubo cuyos lados miden un milímetro.<br></br><br></br>
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={volumenes_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            La relación con el metro cúbico es:<br></br>
                                1 m3 = 1.000 dm3.<br></br>
                                La relación de las unidades de volumen va de 1.000 en 1.000.<br></br>
                                1 metro cúbico = 1 metro x 1 metro x 1 metro<br></br>
                                1 metro = 10 decímetros<br></br>
                                1 metro cúbico = 10 decímetros x 10 decímetros x 10 decímetros = 1.000 decímetros cúbicos<br></br>
                                1 m3 = 1.000.000 cm3<br></br>
                                1 metro = 100 centímetros
                                1 metro cúbico = 100 centímetros x 100 centímetros x 100 centímetros = 1.000.000 centímetros cúbicos.<br></br>
                                1 m3 = 1.000.000.000 mm3<br></br>
                                1 metro = 1.000 milímetros<br></br>
                                1 metro cúbico = 1.000 milímetros x 1.000 milímetros x 1.000 milímetros = 1.000.000.000 milímetros cúbicos.
                            </t5>
                        </div>
                        <div style={{display:"flex", padding:"var(--XXXS, 16px)", alignItems:"center", gap:"var(--US, 12px)"}}>
                        <NavLink className={''} to='/menu/Lec'><Boton size={"small"}
                         Style={"secondary"} text={"Volver al menu Lecciones"} showIcon2={true} icon2={"fa-solid fa-reply fa-fw"}/></NavLink>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}