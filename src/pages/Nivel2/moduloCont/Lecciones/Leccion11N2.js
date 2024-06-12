import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import areaPerimetro1 from '../../../../assets/common/areaPerimetro1.png';
import multiplicacion_ej from '../../../../assets/common/multiplicacion_ej.png';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion11N2(){ 
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
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>                   <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={areaPerimetro1} alt='leccion'/>
                </div>
                    <h3 className='secondary brand'>Leccion11</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>3°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Perímetro y Área</t5>
                        </div>
                    </div>    
                    <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>  

                    <t5>
                        <b>Perímetro</b>
                        <br></br>
                        Concepto:
                        <br></br>
                        El perímetro es la medida total de la longitud de los bordes de una figura plana. En otras palabras, es la suma de las longitudes de todos los lados de la figura.
                        <br></br>
                        Fórmulas comunes:
                        <br></br>
                        Cuadrado: P=4a (donde a es la longitud de un lado)
                        <br></br>
                        Rectángulo: P=2(l+w) (donde l es la longitud y w es el ancho)
                        <br></br>
                        Triángulo: P=a+b+c (donde a, b, y c son las longitudes de los lados)
                        <br></br>
                        Círculo: P=2πr o C=πd (donde r es el radio y d es el diámetro)
                        <br></br>
                        <br></br>
                        <br></br>

                        <b>Área</b>
                        <br></br>
                        Concepto:
                        <br></br>
                        El área es la medida de la superficie encerrada dentro de una figura plana. Es la cantidad de espacio bidimensional contenida dentro de los límites de la figura.
                        <br></br>
                        Fórmulas comunes:
                        <br></br>
                        Cuadrado: A = a2 (donde a es la longitud de un lado)
                        <br></br>
                        Rectángulo: A = lw (donde l es la longitud y w es el ancho)
                        <br></br>
                        Triángulo: 1/2 bh (donde b es la base y h la altura)
                        <br></br>
                        Círculo: A = πr2 (donde r es el radio)

                    </t5>
                                
                    </div>
                    <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <t5>Si el multiplicador es de tres cifras, el resultado de la multiplicación de las centenas se escribirá desplazado dos posiciones hacia la izquierda.</t5>
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