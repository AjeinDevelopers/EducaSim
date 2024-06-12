import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import multiplicBasic1 from '../../../../assets/common/multiplicBasic1.png';
import multiplicBasic2 from '../../../../assets/common/multiplicBasic2.png';
import multiplicBasic3 from '../../../../assets/common/multiplicBasic3.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion6N2(){
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
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={multiplicBasic1} alt='multiplicBasica'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 6</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>2°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Introducción a las Multiplicaciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>

                                La multiplicación es la operación matemática que consiste en hallar el resultado de sumar un número tantas veces como indique otro.
                                <br></br>
                                <br></br>
                                <b>a · b = c</b>
                                <br></br>
                                <br></br>
                                Los factores (a y b) son los números que se multiplican.
                                <br></br>
                                Al factor a también se le llama multiplicando.
                                <br></br>
                                Al factor b también se le llama multiplicador.
                                <br></br>
                                El producto (c) es el resultado de la multiplicación.
                                <br></br>
                                <br></br>
                                <br></br>
                                <b>1º Multiplicación de dos números de una sola cifra</b>
                                <br></br>
                                La operación se realiza mentalmente una vez que se ha aprendido la tabla de multiplicar:



                                </t5>
                                
                                <img style={{display:"flex", width:"37%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={multiplicBasic2} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"20%", height:"200px", alignItems:"center", justifyContent:"center"}}src={multiplicBasic3} alt='onnanana'/>
                            <t5>
                            <b>2º Multiplicación de un número de varias cifras por otro de una </b>
                            <br></br>
                            Se multiplica el multiplicador por por cada cifra del multiplicando, comenzando por la derecha.
                            <br></br>
                            La cifra de las unidades de cada producto parcial se escribe en el lugar que le corresponde, añadiendo las de decenas de cada producto a las unidades del producto siguiente.

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