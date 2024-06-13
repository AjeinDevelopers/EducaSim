import React, {useState, useEffect} from "react";
import HeadeProfesor from "../../modelos/header/HeaderProfesor.jsx";
import inicioProf from '../../pages/InicioCuentas/imagenes/inicioProf.svg';
import Input from "../../componentes/input/input.jsx";
import Dropdown from "../../componentes/dropdown/dropdown.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import FooterApp from "../../modelos/footer/FooterApp.jsx";
import axios from "axios";

export default function NewClase() {


    const [sendForm, setSendForm] = useState(false);
    const [nombreError, setNombreError] = useState(true);
    const [faseError, setFaseError] = useState(true);
    const [materiaError, setMateriaError] = useState(true);
    const [mateira, setMateria] = useState("");
    const [fase, setFase] = useState(null);
    const [nombre, setNombre] = useState("");


    useEffect(() => {
        if (!nombreError && !faseError && !materiaError) {
            setSendForm(true);
            console.log("Entra al if error");
        } else {
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [nombreError, faseError, materiaError]);

    let handleNombreError = (error) => {
        setNombreError(error);
    };

    let handleFaseError = (error) => {
        setFaseError(error);
    }

    let handleMateriaError = (error) => {
        setMateriaError(error);
    }

    let handleFase = (value) => {
        setFase(value);
    }

    let handleMateria = (value) => {
        setMateria(value);
    }

    let handleClase = (content) => {
        setNombre(content);
    }

    const [sendError, setSendError] = useState(false);
    const [sendMsg, setSendMsg] = useState("");


    const [materias, setMaterias] = useState([]);
    const [fases, setFases] = useState([]);

    async function obtenerMaterias() {
        try {
            await axios.get("http://localhost:8080/clase/materias").then((res) => {
                const formattedMaterias = res.data.map(materia => ({
                    value: materia.id,
                    label: materia.nombre
                }));
                setMaterias(formattedMaterias);
            });
        } catch (error) {
            console.log("Error al obtener materias");
        }
    }

    async function obtenerFases() {
        try {
            await axios.get("http://localhost:8080/clase/fases").then((res) => {
                const formattedFases = res.data.map(fase => ({
                    value: fase.id,
                    label: fase.nombre
                }));
                setFases(formattedFases);
            });
        } catch (error) {
            console.log("Error al obtener materias");
        }
    }

    async function save(event){
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/clase/registro", {
                "nombre": nombre,
                "fase": fase,
                "materia": mateira,
                "profesor" : localStorage.getItem("sessionId")
            }).then((res) => {
                if (res.data.error === true) {
                    setSendError(true);
                    setSendMsg("Error al crear clase");
                }
            });
        } catch (error) {
            setSendError(true);
            setSendMsg("Error al crear clase");
        }
    }

    useEffect(() => {
        obtenerMaterias();
        obtenerFases();
    }, []);

    return (
        <>
            <HeadeProfesor/>
            <div style={{padding: "64px", width: "calc(100% - 2*64px)", display: "flex", alignItems: "center"}}>
                <img style={{width: "45%"}} src={inicioProf} alt="Profesor con libros"/>
                <div style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--M, 48px)",
                    display: "flex",
                    flex: "1 0 0",
                    width: "55%"
                }}>
                    <h2 className="secondary brand">Crear nueva clase</h2>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "24px",
                        alignSelf: "stretch"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            width: "100%"
                        }}>
                            <div style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "8px",
                                alignSelf: "stretch"
                            }}>
                                <Input Style={"primary"} label={"Nombre Clase"} showLabel={true} required={true}
                                       InputError={handleNombreError} contenido={handleClase}/>
                                <Dropdown label={"Escoge la fase"} items={fases} size={"medium"} required={true}
                                          DropdownError={handleFaseError} onChange={handleFase}/>
                                <Dropdown label={"Materia"} items={materias} size={"medium"} required={true}
                                          DropdownError={handleMateriaError} onChange={handleMateria}/>

                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "12px",
                                    width: "calc(100% - 2*12px)"
                                }}>
                                    <div style={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "var(--XXS, 24px)"
                                    }}>
                                        <Boton size={"small"} style={"secondary"} text={"Crear Clase"}
                                               showIcon2={true}
                                               icon2={"fa-solid fa-right-to-bracket fa-fw"}
                                               handleClick={save} {...(sendForm ? {disabled: false} : {disabled: true})}
                                               action={""}
                                               method={""}/>
                                        {sendError ?
                                            <t6 style={{color: "var(--color-error, #FF0000)"}}>{sendMsg}</t6> : null}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <FooterApp/>
        </>
    )
}
