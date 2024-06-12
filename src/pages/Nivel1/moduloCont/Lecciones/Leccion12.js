import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import areas from '../../../../assets/common/areas.png';
import perimetros from '../../../../assets/common/perimetros.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion12(){
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
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={areas} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion11</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Áreas compuestas</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Las figuras compuestas son formas geométricas que se crean mediante la combinación de dos o más figuras simples o básicas. <br></br>Estas figuras pueden ser resultado de la unión, superposición, o intersección de elementos geométricos más simples como triángulos, cuadrados, círculos, rectángulos, entre otros. <br></br><br></br>
                                Para sacar el perímetro de figuras compuestas, sacamos el perímetro individual de cada figura y se suma pero solo la parte exterior.<br></br><br></br>
                                A continuación, veamos un ejemplo.
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={perimetros} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Para calcular el perímetro de la figura, se suman todos sus lados: 16 + 18 + 16 + 3 + 7 = 60 cm. <br></br>Sin embargo, es importante tener en cuenta que falta considerar la medida del perímetro del semicírculo. <br></br>Para obtenerlo, se requiere el diámetro, el cual se calculará a partir de las medidas que se encuentran en la figura. <br></br><br></br>
                            Rojo: El largo del rectángulo es de 18 cm.<br></br>
                            Azul: Las longitudes 7 cm y 3 cm son segmentos (partes) de 18 cm.<br></br>
                            Entonces, para obtener la longitud que falta (el diámetro), se siguen estos pasos:<br></br>
                            1.- Primero, suma 7 + 3 = 10 cm.<br></br>
                            2.- Después, resta 18 – 10 = 8 cm.<br></br>
                            Por lo tanto, la longitud que faltaba es de 8 cm, que corresponde al diámetro del semicírculo. <br></br>
                            Perímetro del semicírculo: (𝜋d)/2 = 𝜋(8)/2 = 12.56 cm. <br></br>
                            Y, finalmente, el perímetro de la figura compuesta es: P = 16 + 18 + 16 + 3 + 12.56 + 7 = 72.56 cm.

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