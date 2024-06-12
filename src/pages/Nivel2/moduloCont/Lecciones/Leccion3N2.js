import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import figGeometB from '../../../../assets/common/figGeometB.png';
import figuritasBasic from '../../../../assets/common/figuritasBasic.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion3N2(){
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
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={figGeometB} alt='figuritas'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 3</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>1°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Formas geométricas básicas</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Se trata de aquellas superficies planas delimitadas por líneas que pueden ser curvas o rectas. Las formas geométricas básicas incluyen: el círculo, el cuadrado, el rectángulo, el triángulo y el óvalo.
                                <br></br>
                                <br></br>
                                <b>Nombres de los cuerpos geométricos:</b>
                                <br></br>
                                    •	Círculo. Se trata de una figura geométrica que no posee ni vértices, ni tampoco los lados, ni una región interior.
                                    <br></br>
                                    •	Cuadrado. Esta forma geométrica se encuentra formada por cuatro lados iguales. Y también cuenta con cuatro vértices.
                                    <br></br>
                                    •	Triángulo. Posee tres lados, y además tiene dos vértices. Es muy versátil dado que puede no tener sus lados iguales. Esto dependerá del tamaño de las líneas que lo conforma.
                                    <br></br>
                                    •	Rectángulo. El rectángulo posee cuatro vértices y cuatro lados, pero estos últimos no son iguales.
                                    <br></br>
                                    •	Pentágono. Se trata de un polígono con 5 lados y ángulos iguales.
                                    <br></br>
                                    •	Hexágono. El hexágono es un polígono con 6 lados y ángulos iguales.
                                    <br></br>
                                    •	Heptágono. Polígono con 7 lados y ángulos iguales.
                                    <br></br>
                                    •	Octógono. Es un polígono con 8 lados y ángulos iguales.
                                    <br></br>
                                    •	Óvalo. Esta figura geométrica tiene forma convexa y redondeada.
                                    <br></br>



                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={figuritasBasic} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        
                            <t5>
                            <br></br>
                            <b>¿Qué características tienen las figuras geométricas básicas?</b>
                            <br></br>
                            Las formas geométricas tienen diferentes características según la figura que sea. Las características básicas para reconocer los cuerpos geométricos son:
                            <br></br>
                                o	Número de ángulos
                                <br></br>
                                o	Área de la superficie
                                <br></br>
                                o	Longitud de los vértices
                                <br></br>
                                o	Radio de los ángulos
                                <br></br>
                                <br></br>
                            Si observamos dos figuras geométricas distintas, como el cuadrado y el rectángulo, podemos ver que ambos tienen cuatro lados, pero el cuadrado los tiene iguales y el rectángulo tiene dos pares de lados iguales.
                            <br></br>



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