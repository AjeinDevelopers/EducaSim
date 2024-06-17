import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import Pregunta from "../../../../modelos/pregunta/pregunta.jsx";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//División básica

export default function Ejercicio9N2(){
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

    const correctAnswers9 = {
        inp1: '142',
        inp2: '147',
        inp3: '154',
        inp4: '156', 
        inp5: '159'
    };

    /**repuestas correctas: 
     * Pregunta 1: {value: '142', label: '5'}
     * Pregunta 2: {value: '147', label: '6'}
     * Pregunta 3: {value: '154', label: '9'}
     * Pregunta 4: {value: '156', label: '10'}
     * Pregunta 5: {value: '159', label: '9'}
    */
    const items = [
        {value: '141', label: '4'},
        {value: '142', label: '5'},
        {value: '143', label: '6'}, 
        {value: '144', label: '7'}

    ];
    const items1 = [
        {value: '145', label: '4'},
        {value: '146', label: '5'},
        {value: '147', label: '6'}, 
        {value: '148', label: '7'}

    ];
    const items2 = [
        {value: '149', label: '2'},
        {value: '150', label: '3'},
        {value: '151', label: '4'},
        {value: '152', label: '5'}

    ];
    const items3 = [
        {value: '153', label: '11'},
        {value: '154', label: '12'},
        {value: '155', label: '9'},
        {value: '156', label: '10'}

    ];
    const items4 = [
        {value: '157', label: '8'},
        {value: '158', label: '7'},
        {value: '159', label: '9'},
        {value: '160', label: '6'}

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
        
        const userAnswers9 = {
            inp1,
            inp2,
            inp3,
            inp4,
            inp5
        };

        let respBuenas9 = 0;
        for (let key in correctAnswers9) {
            if (correctAnswers9[key] === userAnswers9[key]) {
                respBuenas9++;
                respTot++;
            }
        }

        if (respBuenas9 === Object.keys(correctAnswers9).length) {
            alert("¡Todas las respuestas son correctas!");
        } else {
            alert(`Respuestas correctas: ${respBuenas9}/${Object.keys(correctAnswers9).length}`);
        }
    }
    return(
        <>
         <HeaderAlumno/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">División básica</h2>
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
                                    label={"¿Cuánto es 20 ÷ 4?"}
                                     required={true} onChange={handleContent1} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"Si tienes 30 caramelos y los repartes entre 5 amigos, ¿cuántos caramelos recibe cada amigo?"}
                                     required={true} onChange={handleContent2} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el resultado de 81 ÷ 9?"}
                                     required={true} onChange={handleContent3} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"Si divides 100 entre 10, ¿cuál es el cociente?"}
                                     required={true} onChange={handleContent4} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"¿Cuánto es 45 ÷ 5?"}
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