import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import Pregunta from "../../../../modelos/pregunta/pregunta.jsx";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//Operaciones con fracciones basicas

export default function Ejercicio6N2(){
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

    const correctAnswers6 = {
        inp1: '103',
        inp2: '107',
        inp3: '112',
        inp4: '115', 
        inp5: '120'
    };

    /**repuestas correctas: 
     * Pregunta 1: {value: '103', label: '1/2'}
     * Pregunta 2: {value: '107', label: '1/4'}
     * Pregunta 3: {value: '112', label: '3/4'}
     * Pregunta 4: {value: '115', label: '1/2'}
     * Pregunta 5: {value: '120', label: '1/3'}
    */
    const items = [
        {value: '101', label: '1/3'},
        {value: '102', label: '1/4'},
        {value: '103', label: '1/2'}, 
        {value: '104', label: '3/4'}

    ];
    const items1 = [
        {value: '105', label: '1/2'},
        {value: '106', label: '1/3'},
        {value: '107', label: '1/4'}, 
        {value: '108', label: '1/5'}

    ];
    const items2 = [
        {value: '109', label: '1/4'},
        {value: '110', label: '1/2'},
        {value: '111', label: '1/3'},
        {value: '112', label: '3/4'}

    ];
    const items3 = [
        {value: '113', label: '1/3'},
        {value: '114', label: '1/4'},
        {value: '115', label: '1/2'},
        {value: '116', label: '2/3'}

    ];
    const items4 = [
        {value: '117', label: '2/4'},
        {value: '118', label: '2/3'},
        {value: '119', label: '3/4'},
        {value: '120', label: '1/3'}

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
        
        const userAnswers6 = {
            inp1,
            inp2,
            inp3,
            inp4,
            inp5
        };

        let respBuenas6 = 0;
        for (let key in correctAnswers6) {
            if (correctAnswers6[key] === userAnswers6[key]) {
                respBuenas6++;
                respTot++;
            }
        }

        if (respBuenas6 === Object.keys(correctAnswers6).length) {
            alert("¡Todas las respuestas son correctas!");
        } else {
            alert(`Respuestas correctas: ${respBuenas6}/${Object.keys(correctAnswers6).length}`);
        }
    }
    return(
        <>
         <HeaderAlumno/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Fracciones básicas</h2>
                <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XS, 32px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Grado: 2°</t5>
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
                                    label={"¿Cuál es la mitad de un círculo?"}
                                     required={true} onChange={handleContent1} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"¿Qué fracción representa una cuarta parte de un pastel?"}
                                     required={true} onChange={handleContent2} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"Si tienes un chocolate dividido en 4 partes iguales y comes 1 parte, ¿qué fracción del chocolate te queda?"}
                                     required={true} onChange={handleContent3} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"¿Qué fracción representa la parte sombreada si un rectángulo está dividido en 2 partes iguales y una parte está sombreada?"}
                                     required={true} onChange={handleContent4} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"Si divides una pizza en 3 partes iguales y comes 2 partes, ¿qué fracción de la pizza has comido?"}
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