import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import coordenadas from '../../../../assets/common/coordenadas.png';
import coordenadas_ej from '../../../../assets/common/coordenadas_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion17(){
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
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={coordenadas} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion4</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>5°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Coordenadas</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Coordenadas cartesianas es el nombre que se da al sistema para localizar un punto en el espacio. En las enseñanzas obligatorias trabajamos las coordenadas cartesianas en espacios de dos dimensiones, los planos, pero podemos dar coordenadas cartesianas en espacios de tres o más dimensiones.<br></br><br></br>
                                Un sistema de coordenadas cartesianas está formado por dos rectas perpendiculares graduadas a las que llamamos ejes de coordenadas. Se suele nombrar como X el eje horizontal e Y al eje vertical. Estos dos ejes se cortan en un punto al que se le denomina origen de coordenadas, O. <br></br><br></br>
                                Otro nombre que reciben los ejes de coordenadas es el de abscisas para el eje X (horizontal)  y ordenadas para el eje Y (vertical).

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={coordenadas_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Cuando queremos saber cuáles son las coordenadas de un determinado punto (al que nombramos generalmente con letras mayúsculas P, Q, R… o A, B, C…  debemos tener en cuenta que se colocan así: (abscisa, ordenada).<br></br><br></br>
                            Así que si decimos que el punto P tiene coordenadas (3,5) estamos diciendo que se encuentra sobre el 3 del eje horizontal a altura 5.<br></br>
                            En algunos casos también es posible que se otorguen números negativos, pero funciona exactamente igual (x,y) simplemente prestando atención a la dirección hacia la que te tienes que desplazar.

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