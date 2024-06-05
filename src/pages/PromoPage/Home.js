import React from "react";
import PromoHeader from "../../modelos/header/PromoHeader.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import nino from "./imagenes/nino.svg"
import {NavLink} from "react-router-dom";
import Card from "../../modelos/card/card.jsx";
import papas from '../../assets/common/papas.jpg';
import FooterPromo from "../../modelos/footer/FooterPromo.jsx";
import foco from './imagenes/foco.jpg';
import ninos from './imagenes/ninos.jpg';




const Home = () => {
    return (

        <>
            <PromoHeader/>
            <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center"}}>
                <div style={{
                    justifyContent: "center",
                    display: "flex",
                    padding: "var(--XXXS, 16px) var(--M, 48px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--XXXS, 16px)",
                    alignSelf: "stretch"
                }}>
                    <div style={{
                        display: "flex",
                        padding: "var(--XXS, 24px) var(--XXXS, 16px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "var(--XS, 32px)"
                    }}>
                        <h1 className="primary brand">EducaSim</h1>
                        <h4 className="secondary brand">Educa sin Límites</h4>
                        <div style={{
                            display: "flex",
                            width: "100",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "var(--XXXS, 16px)"
                        }}>
                            <div style={{
                                display: "flex",
                                width: "100%",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "stretch",
                                gap: "var(--XXXS, 16px)"
                            }}>
                                <t5>Con EducaSim, buscamos mejorar la calidad de la educación en matemáticas en México,
                                    ofreciendo una solución integral y accesible para estudiantes de primaria.
                                </t5>
                                <div style={{
                                    display: "flex",
                                    padding: "var(--XUS, 8px) var(--XXXS, 16px)",
                                    alignItems: "center",
                                    gap: "var(--XXXS, 16px)"
                                }}>
                                    <nav className="link-container">
                                        <NavLink className={''} to='/registro/Alum'><Boton size={"small"}
                                                                                           Style={"secondary"}
                                                                                           text={"Registrarse"}
                                                                                           showIcon2={true}
                                                                                           icon2={"fa-solid fa-user-plus fa-fw"}/></NavLink>
                                        <NavLink className={''} to='/login/alumno'><Boton size={"small"}
                                                                                          Style={"primary"}
                                                                                          text={"Iniciar Sesión"}
                                                                                          showIcon2={true}
                                                                                          icon2={"fa-solid fa-right-to-bracket fa-fw"}/></NavLink>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img style={{width: "50%", top: "0px", alignItems: "center"}} src={nino} alt="nino estudiando"/>
            </div>
            <div style={{
                display: "flex",
                padding: "var(--M, 48px) var(--XXS, 24px)",
                background: "var(--Color-Principales-Claros-Primary, #CAE6FF)",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "calc(100% - 2*var(--XXS, 24px))"
            }}>

                <h2 className="secondary brand">¿Por qué EducaSim?</h2>

                <div style={{
                    display: "flex",
                    padding: "var(--XS, 32px) var(--XXS, 24px)",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch"
                }}>
                    <Card direction={"vertical"} width={"416px"} header={"Aprendizaje Personalizado"} link={false}
                          actions={false} adicional={false}
                          bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={papas}
                          text={"EducaSim permite a los padres crear y administrar cuentas para sus hijos, seleccionando el nivel adecuado y realizando un examen inicial de conocimientos junto con un test psicológico. Este enfoque personalizado asegura que el contenido y los ejercicios se adapten a las necesidades individuales de cada alumno. Al identificar las áreas donde el estudiante necesita más apoyo"}/>

                    <Card direction={"vertical"} width={"416px"} header={"Interactividad y Gamificación"} link={false}
                          actions={false} adicional={false}
                          bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={foco}
                          text={"EducaSim incorpora elementos interactivos y de gamificación en sus lecciones y ejercicios. Los estudiantes pueden aprender matemáticas a través de juegos educativos, desafíos interactivos y actividades prácticas que hacen que el aprendizaje sea divertido y atractivo. Este enfoque lúdico ayuda a mantener el interés de los alumnos y facilita la comprensión de conceptos matemáticos. "}/>

                    <Card direction={"vertical"} width={"416px"} header={"Seguimiento y Reportes Detallados"}
                          link={false} actions={false} adicional={false}
                          bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={ninos}
                          text={"EducaSim ofrece herramientas avanzadas de seguimiento y reportes tanto para padres como para maestros. Los informes detallados proporcionan una visión clara del progreso académico y psicológico de los alumnos, incluyendo áreas de fortaleza y debilidad. Esta información es crucial para tomar decisiones educativas informadas y ajustar las estrategias de enseñanza según sea necesario."}/>
                </div>
            </div>
            <div style={{
                display: "flex",
                padding: "var(--M, 48px) var(--XXL, 80px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--S, 36px)"
            }}>
                <h3 className="secondary brand">¿Listo para impulsar la educación?</h3>
                <div style={{alignSelf: "stretch"}}>
                    <t5>Con su enfoque en el aprendizaje personalizado, la interactividad y gamificación, y las
                        herramientas avanzadas de seguimiento y reportes, EducaSim no solo mejora el rendimiento
                        académico de los estudiantes, sino que también hace que el proceso de aprendizaje sea más
                        atractivo y eficiente.
                    </t5>
                </div>
                <div style={{
                    display: "flex",
                    padding: "var(--XUS, 8px) var(--XXXS, 16px)",
                    alignItems: "center",
                    gap: "var(--XXXS, 16px)"
                }}>
                    <Boton size={"small"} Style={"secondary"} text={"Contáctanos"} showIcon1={true}
                           icon1={"fa-solid fa-phone fa-fw"}/>
                </div>

            </div>
            <FooterPromo/>
        </>
    )
}

export default Home;/**cambiar de lado icono */