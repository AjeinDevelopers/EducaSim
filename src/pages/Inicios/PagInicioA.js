import HeaderAlumno from "../../modelos/header/HeaderAlumno";
import BarsChart from './BarsChart';
import FooterApp from "../../modelos/footer/FooterApp";
import Card from "../../modelos/card/card";
import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from "react";


export default function PagInicioA(){

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("sessionId") === null || localStorage.getItem("sessionType") !== "alumno" || localStorage.getItem("sessionType") === null) {
            navigate('/login/alumno');
        }
    }, []);

    const cardData_1 = [
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: false,
            actions: true,
            adicional: false    ,
            bt1: "Leer",
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
          adicional: false,
          bt1: "Leer",
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
        adicional: false,
        bt1: "Leer",
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
      adicional: false,
      bt1: "Leer",
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
    return(

        <>
        <HeaderAlumno/>
        <div style={{display:"flex", width:"calc(100% - 2*var(--XS, 32px))", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">¡Hola!</h2>
            <div style={{display:"flex", width:"100%", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px"}}>
                <h3 className="primary brand">Lecciones Sugeridas</h3>
                <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>                   
                    {cardData_1.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                    </div>
                    <h3 className="primary brand">Ejercicios Sugeridos</h3>
                <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>                   
                    {cardData_2.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                    </div>
            </div>
            </div>
        
        <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
            <div style={{ display: "flex", padding: "padding: var(--XXXS, 16px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h3>Tu Rendimiento</h3>
                    <Link to="/Progreso/Alum">
                      <t6 className="secondary brand">Ver más→ </t6>
                    </Link> 
            </div>
        </div>          
            <div  style={{width:"100%", height:"100%"}}>
                <div style={{width:"calc(100% - 2*var(--L, 64px))", height: "100%", display:"flex",padding:"var(--M, 48px) var(--L, 64px)",justifyContent:"center"}}>
                    
                    <BarsChart/>
                    
                </div>
                </div>
            </div>  
        </div>                  
        <FooterApp/>
        </>

    )

}