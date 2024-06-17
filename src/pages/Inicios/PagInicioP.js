import HeaderProfesor from "../../modelos/header/HeaderProfesor.jsx";
import FooterApp from "../../modelos/footer/FooterApp";
import Card from "../../modelos/card/card";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";

export default function PagInicioP() {

    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);

    async function validarSesion() {

        try {
            const sessionId = localStorage.getItem("sessionId");
            const sessionType = localStorage.getItem("sessionType");
            await axios.post("http://localhost:8080/usuario/validar/profesor", {
                "sesionId": sessionId,
                "type": sessionType
            }).then((res) => {
                if (res.data.error === false) {
                    setLogged(true);
                } else {
                    navigate('/login/profesor');
                }
            });
        } catch (error) {
            navigate('/login/profesor');
        }
    }

    const cardData_1 = [
        {
            direction: "vertical",
            width: "324px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: false,
            bt1: "Leer",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "324px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: false,
            bt1: "Leer",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "324px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: false,
            bt1: "Leer",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "324px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: false,
            bt1: "Leer",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "324px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: false,
            bt1: "Leer",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        }
    ];
    const cardData_2 = [
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: true,
            bt1: "Hola",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: true,
            bt1: "Hola",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: true,
            bt1: "Hola",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: true,
            bt1: "Hola",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: true,
            bt1: "Hola",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        }
    ];

    useEffect(() => {
        if (localStorage.getItem("sessionId") === null && localStorage.getItem("sessionType") === null) {
            navigate('/login/alumno');
        } else {
            validarSesion();
        }
    }, []);

    return (

        <>
            <HeaderProfesor/>
            {logged &&
                <div style={{
                    display: "flex",
                    width: "1440px",
                    padding: "var(--M, 48px) var(--XS, 32px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--XS, 32px)"
                }}>
                    <h2>¡Buenos Días!</h2>
                    <div style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "var(--XXXS, 16px"
                    }}>
                        <h3 className="primary brand">Grupos</h3>
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
                            <h3 className="primary brand">Material</h3>
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
                    </div>
                </div>
            }
            <FooterApp/>
        </>
    )
}