import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import areas from '../../../../assets/common/areas.png';
import areas_ej from '../../../../assets/common/areas_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Leccion11(){
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
                    <h3 className='secondary brand'>Leccion10</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Áreas compuestas</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Las figuras compuestas son formas geométricas que se crean mediante la combinación de dos o más figuras simples o básicas. <br></br>Estas figuras pueden ser resultado de la unión, superposición, o intersección de elementos geométricos más simples como triángulos, cuadrados, círculos, rectángulos, entre otros. <br></br><br></br>
                                Para sacar el área de figuras compuestas, sacamos el área individual de cada figura y se suma.<br></br><br></br>
                                A continuación, veamos un ejemplo.
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={areas_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Observa que la figura está compuesta por tres formas geométricas básicas: un cuadrado, un triángulo y un semicírculo.<br></br><br></br>
                            Primero, calcula el área de cada una de las figuras.<br></br>
                            A1 = Área del cuadrado: L x L = 20 x 20  = 400 m²<br></br>
                            A2 = Área del triángulo: (b x h)/2 = (17 x 20)/2 = 170 m²<br></br>
                            A3 = Área del semicírculo: (𝝅r²)/2 = [𝝅(10)²]/2=𝝅(100)/2 ≈ 157 m²<br></br><br></br>
                            NOTAS:<br></br>
                            El área de un círculo completo es: 𝝅r²<br></br>
                            El área de un semicírculo es: (𝝅r²)/2<br></br>
                            Dado que el diámetro del semicírculo es un lado del cuadrado, el diámetro es de 20 m,  por lo tanto, el radio es de 10 m.  <br></br>
                            La altura del triángulo es un lado del cuadrado, por lo tanto, la altura es de 20 m.<br></br>
                            Para obtener el área total de la figura sombreada, se suma el área del cuadrado, el área del triángulo y el área del semicírculo, es decir:<br></br>
                            A1 + A2 + A3 = 400 m² + 170 m² + 157 m² = 727 m²

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