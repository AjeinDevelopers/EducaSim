import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import restAvanz1 from '../../../../assets/common/restAvanz1.png';
import restAvanz2 from '../../../../assets/common/restAvanz2.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion5N2(){
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
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={restAvanz1} alt='restaAvanzada'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 5</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>2°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Resta de números de 3 dígitos</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>

                                Restar dos números de tres dígitos (por ejemplo 423 - 147) se requiere varios pasos.
                                <br></br>
                                <br></br>
                                Resta los dígitos correspondientes a las unidades (3 - 7). Pero no se puede ya que 3 es menor que 7, entonces pides prestado una decena al 2, por lo que colocas 13 sobre la columna de las unidades y coloca 1 encima de la columna de las decenas.
                                <br></br>
                                <br></br>
                                Ahora como el número que quedo en la columna de las decenas es un 1 se resta con el 4 (1 - 4). Pero como 1 es menor que 4, pides prestado una centena al 4, lo que convierte al 1 en 11 y restas 11 – 4 = 7.
                                <br></br>
                                <br></br>
                                Ahora el 3 de las centenas que dio prestado 1, quedo convertido en 3, realiza la resta de  3 – 1 = 2.
                                <br></br>
                                <br></br>
                                La diferencia es 276.

                                </t5>
                                
                                <img style={{display:"flex", width:"70%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={restAvanz2} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        
                            <t5>
                                
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