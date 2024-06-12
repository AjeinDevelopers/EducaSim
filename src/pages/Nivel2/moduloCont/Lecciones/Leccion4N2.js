import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import sumaAvanzada from '../../../../assets/common/sumaAvanzada.png';
import sumaTresUnid from '../../../../assets/common/SumaTresUnid.png';
import resulSumAvanz from '../../../../assets/common/resulSumAvanz.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion4N2(){
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
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={sumaAvanzada} alt='sumaAvanzada'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 4</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>2°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Suma de números de 3 dígitos</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>

                                Sabemos que dependiendo del lugar que ocupen los dígitos en una cifra, podrán representar unidades, decenas, centenas, unidades de mil, etc.  De lo que se trata este método es de sumar unidades con unidades, decenas con decenas, centenas con centenas y así sucesivamente.  Veamos cómo realizar la siguiente suma: 514 + 123.
                                <br></br><br></br>
                                <b>Paso 1:</b>
                                <br></br>
                                Primero debemos ubicar los sumandos uno debajo del otro, puedes imaginar líneas verticales que forman casillas.  En la primera casilla de derecha a izquierda deben estar las unidades, en la segunda las decenas, en la tercera las centenas y así sucesivamente.

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={sumaTresUnid} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"30%", height:"350px", alignItems:"center", justifyContent:"center"}}src={resulSumAvanz} alt='onnanana'/>
                            <t5>
                                
                            <br></br>
                            <b>Paso 2:</b>
                            <br></br>
                            Ahora sumamos los dígitos que están en una misma columna, empezamos por las unidades: 4 + 3 = 7. Ponemos este resultado en la casilla de las unidades de la respuesta, que estará ubicada bajo una línea horizontal.
                            <br></br>
                            <br></br>
                            <b>Paso 3:</b>
                            <br></br>
                            Seguimos con las decenas: 1 + 2 = 3, ubicamos esta suma en el lugar de las decenas de la respuesta.
                            <br></br>
                            <br></br>
                            <b>Paso 4:</b>
                            <br></br>
                            Finalmente operamos 5 + 1 = 6, poniendo ese número en la casilla reservada para las centenas de la respuesta final.
                            Por lo tanto, el resultado de la suma es seiscientos treinta y siete.

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