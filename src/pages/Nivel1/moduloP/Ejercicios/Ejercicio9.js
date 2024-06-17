import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import Pregunta from "../../../../modelos/pregunta/pregunta.jsx";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Ejercicio8(){
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
    
    const [sendForm, setSendForm] = useState(false);
    const [radButtonError, setRadButtonError] = useState(true);
    /**repuestas correctas: 
     * Pregunta 1: {value: '4', label: '125 cm³'}
     * Pregunta 2: {value: '7', label: '192 cm³'},
     * Pregunta 3: {value: '11', label: '113.04 cm³'}
     * Pregunta 4:{value: '16', label: '125.60 cm³'}
     * Pregunta 5: {value: '20', label: '301.44 cm³'}
    */
    const items = [
        {value: '1', label: '15 cm³'},
        {value: '2', label: '25 cm³'},
        {value: '3', label: '75 cm³'}, 
        {value: '4', label: '125 cm³'}

    ];

    const items1 = [
        {value: '5', label: '48 cm³'},
        {value: '6', label: '120 cm³'},
        {value: '7', label: '192 cm³'}, 
        {value: '8', label: '288 cm³'}

    ];

    const items2 = [
        {value: '9', label: '12.56 cm³'},
        {value: '10', label: '25.12 cm³'},
        {value: '11', label: '113.04 cm³'},
        {value: '12', label: '226.08 cm³'}

    ];

    const items3 = [
        {value: '13', label: '12.56 cm³'},
        {value: '14', label: '25.12 cm³'},
        {value: '15', label: '62.80 cm³'},
        {value: '16', label: '125.60 cm³'}

    ];

    const items4 = [
        {value: '17', label: '100.48 cm³'},
        {value: '18', label: '150.72 cm³'},
        {value: '19', label: '200.96 cm³'},
        {value: '20', label: '301.44 cm³'}

    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!radButtonError){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [ radButtonError]);

    let handleValue = (value) => {
        setValue(value);
    }


    let handleRadButtonError = (error) => {
        setRadButtonError(error);
    }


    return(
        <>
         <HeaderAlumno/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Volumen de sólidos 
</h2>
                <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XS, 32px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Grado: 5°</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Reactivos: 5</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)",background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Opcion Multiple</t5>
                    </div>
                </div>
                <div style={{display:"flex", padding:"var(--M, 48px)",flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch",background:"var(--Color-Principales-Claros-Primary, #CAE6FF)", border:"4px solid var(--Color-Principales-Fuertes-Primary, #4BA8FF)", borderRadius:"var(--XXXS, 16px)"}}>
                    <h3>Instrucciones</h3>
                    <t5>Lee con atención las siguientes preguntas y contesta lo que se te solicita, elige solo una opción de las que se muestran en cada caso.</t5>
                </div>
                <div style={{display:"flex",padding:"var(--M, 48px)", width:"1344px", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XXXS, 16px)"}}>
                <h5 className="secondary brand">Pregunta 1</h5>
                <RadButtonGroup items={items} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el volumen de un cubo con una arista de longitud 5 cm?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el volumen de un prisma rectangular con una base de 6 cm por 4 cm y una altura de 8 cm?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"Si el radio de una esfera es de 3 cm, ¿cuál es su volumen aproximado? (Usa π ≈ 3.14)"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el volumen de un cilindro con un radio de 2 cm y una altura de 10 cm? (Usa π ≈ 3.14)"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el volumen de un cono con un radio de 6 cm y una altura de 8 cm? (Usa π ≈ 3.14)"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                </div>
                <div style={{alignItems:"center"}}>
                <Boton size={"small"} Style={"secondary"} text={"Comprobar"} showIcon2={true}
                           icon2={"fa-solid fa-check fa-fw"}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />                
                 </div>
            </div>
         </div>
         <FooterApp/>
        </>
    )

}
