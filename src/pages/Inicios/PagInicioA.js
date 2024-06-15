import HeaderAlumno from "../../modelos/header/HeaderAlumno";
import BarsChart from './BarsChart';
import FooterApp from "../../modelos/footer/FooterApp";
import Card from "../../modelos/card/card";
import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import MuLTI from "../../assets/common/MuLTI.jpg";
import SUmAS from "../../assets/common/SUmAS.png";
import Angulos from "../../assets/common/Angulos.avif";
import MyD from '../../assets/common/MyD.jpg';
import Crucigrama from '../../assets/common/Crucigrama.jpg';
import Memorama from '../../assets/common/Memorama.jpg';
import axios from "axios";

export default function PagInicioA() {

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

    const cardData_1 = [
        {
            direction: "vertical",
            width: "304px",
            header: "Multiplicaciones",
            linkButton: "/Leccion/matematicas/cuarto/multiplicaciones",
            actions: true,
            adicional: false,
            bt1: "Leer",
            score: "10.0",
            date: "10/10/2021",
            img: MuLTI,
            text: "La multiplicación es una operación matemática que consiste en encontrar el resultado de multiplicar una cifra por otra..."
        },
        {
          direction: "vertical",
          width: "304px",
          header: "División ",
          linkButton: "/Leccion/matematicas/cuarto/divisiones",
          actions: true,
          adicional: false,
          bt1: "Leer",
          score: "10.0",
          date: "10/10/2021",
          img: MuLTI,
          text: "La división es una operación matemática que consiste en repartir cosas en grupos iguales... "
      },
      {
        direction: "vertical",
        width: "304px",
        header: "Fracciones",
        linkButton: "/Leccion/matematicas/cuarto/fracciones/equivalentes",
        actions: true,
        adicional: false,
        bt1: "Leer",
        score: "10.0",
        date: "10/10/2021",
        img: MuLTI,
        text: "Fracciones equivalentes: son aquellas fracciones que representan la misma cantidad aunque el numerador y el denominador sean diferentes..."
    },
    {
      direction: "vertical",
      width: "304px",
      header: "Fracciones",
      linkButton: "/Leccion/matematicas/cuarto/fracciones/suma_resta",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: SUmAS,
      text: "Fracciones: Es la expresión de una cantidad dividida entre otra cantidad; es decir que representa un cociente no efectuado de números. Suma y resta de fracciones..."
    },
    {
        direction: "vertical",
        width: "304px",
        header: "Ángulos",
        linkButton: "/Leccion/matematicas/cuarto/angulos",
        actions: true,
        adicional: false,
        bt1: "Leer",
        score: "10.0",
        date: "10/10/2021",
        img: Angulos,
        text: "El ángulo es la porción del plano comprendida entre dos semirrectas (lados) con un origen común llamado vértice. Los ángulos parten de un punto..."
      }
    ];
    const cardData_2 = [
        {
            direction: "vertical",
            width: "304px",
            header: "Multiplicaciones y Divisiones",
            linkButton: "/Ejercicio/matematicas/cuarto/m_d",
            actions: true,
            adicional: true,
            bt1: "Resolver",
            score: "xx.x",
            date: "12/06/2024",
            img: MyD,
            text: ""
        },
        {
          direction: "vertical",
          width: "304px",
          header: "Crucigrama",
          linkButton: "/Crucigrama/SF",
          actions: true,
          adicional: true,
          bt1: "Resover",
          score: "xx.x",
          date: "10/10/2021",
          img: Crucigrama,
          text: "Crucigrama de repaso general segunda fase."
      },
      {
        direction: "vertical",
        width: "304px",
        header: "Memorama",
        link: false,
        actions: true,
        adicional: true,
        bt1: "Resolver",
        score: "xx.x",
        date: "10/10/2021",
        img: Memorama,
        text: "Memorama segunda fase."
    },
    {
        direction: "vertical",
        width: "304px",
        header: "Sopa de letras",
        linkButton: "/SopaLetras",
        actions: true,
        adicional: true,
        bt1: "Resolver",
        score: "xx.x",
        date: "12/06/2024",
        img: MyD,
        text: "Sopa de letras de repaso."
    }
    ];

    return (

        <>
            <HeaderAlumno/>
            {logged &&
                <div style={{
                    display: "flex",
                    width: "calc(100% - 2*var(--XS, 32px))",
                    padding: "var(--M, 48px) var(--XS, 32px)",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--XS, 32px)"
                }}>
                    <h2 className="secondary brand">¡Hola!</h2>
                    <div style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--XXXS, 16px"
                    }}>
                        <h3 className="primary brand">Lecciones Sugeridas</h3>
                        <div style={{
                            display: "flex",
                            gridTemplateColumns: "repeat(auto-fill, minmax(485px, 1fr))",
                            flexDirection: "column",
                            gap: "var(--XS, 32px)",
                            alignSelf: "stretch"
                        }}>
                            <div style={{overflowX: "auto", gap: "var(--XS, 32px)"}}>
                                {cardData_1.map((cardProps, index) => (
                                    <Card key={index} {...cardProps} />
                                ))}
                            </div>
                            <h3 className="primary brand">Ejercicios Sugeridos</h3>
                            <div style={{
                                display: "flex",
                                gridTemplateColumns: "repeat(auto-fill, minmax(485px, 1fr))",
                                flexDirection: "column",
                                gap: "var(--XS, 32px)",
                                alignSelf: "stretch"
                            }}>
                                <div style={{overflowX: "auto", gap: "var(--XS, 32px)"}}>
                                    {cardData_2.map((cardProps, index) => (
                                        <Card key={index} {...cardProps} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "var(--XXS, 24px)",
                            alignSelf: "stretch"
                        }}>
                            <div style={{
                                display: "flex",
                                padding: "padding: var(--XXXS, 16px) 0px",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%"
                            }}>
                                <h3>Tu Rendimiento</h3>
                                <Link to="/Progreso/Alum">
                                    <t6 className="secondary brand">Ver más→</t6>
                                </Link>
                            </div>
                        </div>
                        <div style={{width: "100%", height: "100%"}}>
                            <div style={{
                                width: "calc(100% - 2*var(--L, 64px))",
                                height: "100%",
                                display: "flex",
                                padding: "var(--M, 48px) var(--L, 64px)",
                                justifyContent: "center"
                            }}>

                                <BarsChart/>

                            </div>
                        </div>
                    </div>
                </div>}
            <FooterApp/>
        </>

    )

}