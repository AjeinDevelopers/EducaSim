import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import { useState, useEffect } from "react";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Ejercicio1() {
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);
    const [sendForm, setSendForm] = useState(false);
    const [radButtonError, setRadButtonError] = useState(true);

    const correctAnswers = {
        pregunta1: '2',
        pregunta2: '8',
        pregunta3: '11',
        pregunta4: '15',
        pregunta5: '19'
    };

    const [answers, setAnswers] = useState({
        pregunta1: null,
        pregunta2: null,
        pregunta3: null,
        pregunta4: null,
        pregunta5: null
    });

    async function validarSesion() {
        try {
            const sessionId = localStorage.getItem("sessionId");
            const sessionType = localStorage.getItem("sessionType");
            const res = await axios.post("http://localhost:8080/usuario/validar/alumno", {
                sesionId: sessionId,
                type: sessionType
            });
            if (res.data.error === false) {
                setLogged(true);
            } else {
                navigate('/login/alumno');
            }
        } catch (error) {
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

    useEffect(() => {
        const allAnswered = Object.values(answers).every(answer => answer !== null);
        setSendForm(allAnswered && !radButtonError);
    }, [answers, radButtonError]);

    const handleValue = (question, value) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [question]: value
        }));
    };

    const handleRadButtonError = (error) => {
        setRadButtonError(error);
    };

    const handleSubmit = () => {
        let count = 0;
        Object.keys(answers).forEach(question => {
            if (answers[question] === correctAnswers[question]) {
                count++;
            }
        });
        alert(`Aciertos: ${count} de 5`);
    };

    const items = [
        { value: '1', label: '13,834' },
        { value: '2', label: '13,824' },
        { value: '3', label: '13,424' },
        { value: '4', label: '13,842' }
    ];
    const items1 = [
        { value: '5', label: '450' },
        { value: '6', label: '400' },
        { value: '7', label: '484' },
        { value: '8', label: '500' }
    ];
    const items2 = [
        { value: '9', label: '335,754' },
        { value: '10', label: '335,514' },
        { value: '11', label: '335,784' },
        { value: '12', label: '335,584' }
    ];
    const items3 = [
        { value: '13', label: '380' },
        { value: '14', label: '382' },
        { value: '15', label: '383' },
        { value: '16', label: '384' }
    ];
    const items4 = [
        { value: '17', label: '252' },
        { value: '18', label: '250' },
        { value: '19', label: '251' },
        { value: '20', label: '253' }
    ];

    return (
        <>
            <HeaderAlumno />
            <div style={{ display: "flex", width: "1440px", padding: "var(--M, 48px) var(--XS, 32px)", flexDirection: "column", alignItems: "flex-start", gap: "var(--XS, 32px)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--XXS, 24px)", alignSelf: "stretch" }}>
                    <h2 className="secondary brand">Multiplicaciones y divisiones</h2>
                    <div style={{ display: "flex", padding: "var(--XXS, 24px) var(--XS, 32px)", justifyContent: "center", alignItems: "center", gap: "var(--XXXS, 16px)", alignSelf: "stretch" }}>
                        <div style={{ display: "flex", color: "var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius: "var(--XUS, 8px)", background: "var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding: "var(--XXS, 16px) var(--XS, 24px)", justifyContent: "center", alignItems: "center", gap: "var(--XXXS, 8px)", flex: "1 0 0" }}>
                            <t5>Grado: 4°</t5>
                        </div>
                        <div style={{ display: "flex", color: "var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius: "var(--XUS, 8px)", background: "var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding: "var(--XXS, 16px) var(--XS, 24px)", justifyContent: "center", alignItems: "center", gap: "var(--XXXS, 8px)", flex: "1 0 0" }}>
                            <t5>Reactivos: 5</t5>
                        </div>
                        <div style={{ display: "flex", color: "var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius: "var(--XUS, 8px)", background: "var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding: "var(--XXS, 16px) var(--XS, 24px)", justifyContent: "center", alignItems: "center", gap: "var(--XXXS, 8px)", flex: "1 0 0" }}>
                            <t5>Opcion Multiple</t5>
                        </div>
                    </div>
                    <div style={{ display: "flex", padding: "var(--M, 48px)", flexDirection: "column", alignItems: "center", gap: "var(--XXS, 24px)", alignSelf: "stretch", background: "var(--Color-Principales-Claros-Primary, #CAE6FF)", border: "4px solid var(--Color-Principales-Fuertes-Primary, #4BA8FF)", borderRadius: "var(--XXXS, 16px)" }}>
                        <h3>Instrucciones</h3>
                        <t5>Lee con atención las siguientes preguntas y contesta lo que se te solicita, elige solo una opción de las que se muestran en cada caso.</t5>
                    </div>
                    <div style={{ display: "flex", padding: "var(--M, 48px)", width: "1344px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "var(--XXXS, 16px)" }}>
                        <h5 className="secondary brand">Pregunta 1</h5>
                        <RadButtonGroup
                            items={items}
                            size={"large"}
                            estilo={"secondary"}
                            label={"Si multiplicas 3,456 por 4, ¿cuál es el resultado?"}
                            required={true}
                            onChange={(value) => handleValue('pregunta1', value)}
                            RadButtonError={handleRadButtonError}
                        />
                        <h5 className="secondary brand">Pregunta 2</h5>
                        <RadButtonGroup
                            items={items1}
                            size={"large"}
                            estilo={"secondary"}
                            label={"¿Cuál es el resultado de dividir 8,000 entre 16?"}
                            required={true}
                            onChange={(value) => handleValue('pregunta2', value)}
                            RadButtonError={handleRadButtonError}
                        />
                        <h5 className="secondary brand">Pregunta 3</h5>
                        <RadButtonGroup
                            items={items2}
                            size={"large"}
                            estilo={"secondary"}
                            label={"¿Cuánto es 9,876 x 34?"}
                            required={true}
                            onChange={(value) => handleValue('pregunta3', value)}
                            RadButtonError={handleRadButtonError}
                        />
                        <h5 className="secondary brand">Pregunta 4</h5>
                        <RadButtonGroup
                            items={items3}
                            size={"large"}
                            estilo={"secondary"}
                            label={"¿Cuál es el cociente de 8,436 dividido entre 22?"}
                            required={true}
                            onChange={(value) => handleValue('pregunta4', value)}
                            RadButtonError={handleRadButtonError}
                        />
                        <h5 className="secondary brand">Pregunta 5</h5>
                        <RadButtonGroup
                            items={items4}
                            size={"large"}
                            estilo={"secondary"}
                            label={"¿Cuál es el cociente de 6,789 dividido entre 27?"}
                            required={true}
                            onChange={(value) => handleValue('pregunta5', value)}
                            RadButtonError={handleRadButtonError}
                        />
                    </div>
                    <div style={{ alignItems: "center" }}>
                        <Boton
                            size={"small"}
                            Style={"secondary"}
                            text={"Comprobar"}
                            showIcon2={true}
                            icon2={"fa-solid fa-check fa-fw"}
                            method={"SUMBIT"}
                            handleClick={handleSubmit}
                            {...(sendForm ? { disabled: false } : { disabled: true })}
                        />
                    </div>
                </div>
            </div>
            <FooterApp />
        </>
    );
}
