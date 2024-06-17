import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import Pregunta from "../../../../modelos/pregunta/pregunta.jsx";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//División básica

export default function Ejercicio11N2(){
    const [sendForm, setSendForm] = useState(false);
    const [radButtonError, setRadButtonError] = useState(true);

    let handleContent1 = (value) => {
        setinp1(value)
    }
    let handleContent2 = (value) => (
        setinp2(value)
    )
    let handleContent3 = (value) => (
        setinp3(value)
    )
    let handleContent4 = (value) => (
        setinp4(value)
    )
    let handleContent5 = (value) => (
        setinp5(value)
    )

    const [inp1 , setinp1] = useState(0);
    const [inp2 , setinp2] = useState(0);
    const [inp3 , setinp3] = useState(0);
    const [inp4 , setinp4] = useState(0);
    const [inp5 , setinp5] = useState(0);

    const correctAnswers11 = {
        inp1: '163',
        inp2: '166',
        inp3: '169',
        inp4: '175', 
        inp5: '179'
    };

    /**repuestas correctas: 
     * Pregunta 1: {value: '163', label: '25 cm'}
     * Pregunta 2: {value: '166', label: '24 cm²'}
     * Pregunta 3: {value: '169', label: '12 cm'}
     * Pregunta 4: {value: '175', label: '22 cm'}
     * Pregunta 5: {value: '179', label: '49 cm²'}
    */
    const items = [
        {value: '161', label: '15 cm'},
        {value: '162', label: '20 cm'},
        {value: '163', label: '25 cm'}, 
        {value: '164', label: '30 cm'}

    ];
    const items1 = [
        {value: '165', label: '20 cm²'},
        {value: '166', label: '24 cm²'},
        {value: '167', label: '28 cm²'}, 
        {value: '168', label: '30 cm²'}

    ];
    const items2 = [
        {value: '169', label: '12 cm'},
        {value: '170', label: '10 cm'},
        {value: '171', label: '15 cm'},
        {value: '172', label: '11 cm'}

    ];
    const items3 = [
        {value: '173', label: '16 cm'},
        {value: '174', label: '20 cm'},
        {value: '175', label: '22 cm'},
        {value: '176', label: '24 cm'}

    ];
    const items4 = [
        {value: '177', label: '42 cm²'},
        {value: '178', label: '48 cm²'},
        {value: '179', label: '49 cm²'},
        {value: '180', label: '50 cm²'}

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
    let respTot = 0;
    async function handleSubmit() {
        
        const userAnswers11 = {
            inp1,
            inp2,
            inp3,
            inp4,
            inp5
        };

        let respBuenas11 = 0;
        for (let key in correctAnswers11) {
            if (correctAnswers11[key] === userAnswers11[key]) {
                respBuenas11++;
                respTot++;
            }
        }

        if (respBuenas11 === Object.keys(correctAnswers11).length) {
            alert("¡Todas las respuestas son correctas!");
        } else {
            alert(`Respuestas correctas: ${respBuenas11}/${Object.keys(correctAnswers11).length}`);
        }
    }

    return(
        <>
         <HeaderAlumno/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Perímetro y área</h2>
                <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XS, 32px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Grado: 3°</t5>
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
                                    label={"¿Cuál es el perímetro de un cuadrado con lados de 5 cm?"}
                                     required={true} onChange={handleContent1} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el área de un rectángulo de 4 cm de ancho y 6 cm de largo?"}
                                     required={true} onChange={handleContent2} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"Si un triángulo tiene lados de 3 cm, 4 cm y 5 cm, ¿cuál es su perímetro?"}
                                     required={true} onChange={handleContent3} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el perímetro de un rectángulo que mide 8 cm de largo y 3 cm de ancho?"}
                                     required={true} onChange={handleContent4} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el área de un cuadrado con lados de 7 cm?"}
                                     required={true} onChange={handleContent5} RadButtonError={handleRadButtonError}/>
                </div>
                <div style={{alignItems:"center"}}>
                <Boton size={"small"} Style={"secondary"} text={"Comprobar"} showIcon2={true}
                           icon2={"fa-solid fa-check fa-fw"}
                           handleClick={handleSubmit}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />                
                 </div>
            </div>
         </div>
         <FooterApp/>
        </>
    )

}