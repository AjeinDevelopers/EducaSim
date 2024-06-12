import HeaderAlumno from "../../../modelos/header/HeaderAlumno.jsx"
import Card from "../../../modelos/card/card.jsx";
import { Link} from "react-router-dom";
import FooterApp from "../../../modelos/footer/FooterApp.jsx";
import MuLTI from "../../../assets/common/MuLTI.jpg";
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

/**corregir modelo de menu ex, ej y este */
  const cardData = [
    {
        direction: "vertical",
        width: "485px",
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
      width: "485px",
      header: "Divisiones",
      linkButton: "/Leccion/matematicas/cuarto/divisiones",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "La división es una operación matemática que consiste en repartir cosas en grupos iguales..."
  }
];
const cardData2 = [
    {
        direction: "vertical",
        width: "485px",
        header: "Holaa",
        link: false,
        actions: true,
        adicional: false,
        bt1: "Hola",
        score: "10.0",
        date: "10/10/2021",
        img: "si",
        text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
    },
    {
      direction: "vertical",
      width: "485px",
      header: "Holaa",
      link: false,
      actions: true,
      adicional: false,
      bt1: "Hola",
      score: "10.0",
      date: "10/10/2021",
      img: "si",
      text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
  },
{
  direction: "vertical",
  width: "485px",
  header: "Holaa",
  link: false,
  actions: true,
  adicional: false,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},{
  direction: "vertical",
  width: "485px",
  header: "Holaa",
  link: false,
  actions: true,
  adicional: false,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},{
  direction: "vertical",
  width: "485px",
  header: "Holaa",
  link: false,
  actions: true,
  adicional: false,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
}
];
const cardData3 = [
    {
        direction: "vertical",
        width: "485px",
        header: "Holaa",
        link: false,
        actions: true,
        adicional: false,
        bt1: "Hola",
        score: "10.0",
        date: "10/10/2021",
        img: "si",
        text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
    },
    {
      direction: "vertical",
      width: "485px",
      header: "Holaa",
      link: false,
      actions: true,
      adicional: false,
      bt1: "Hola",
      score: "10.0",
      date: "10/10/2021",
      img: "si",
      text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
  },
{
  direction: "vertical",
  width: "485px",
  header: "Holaa",
  link: false,
  actions: true,
  adicional: false,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];
const cardData4 = [
  {
      direction: "vertical",
      width: "485px",
      header: "Holaa",
      link: false,
      actions: true,
      adicional: false,
      bt1: "Hola",
      score: "10.0",
      date: "10/10/2021",
      img: "si",
      text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Holaa",
    link: false,
    actions: true,
    adicional: false,
    bt1: "Hola",
    score: "10.0",
    date: "10/10/2021",
    img: "si",
    text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
{
direction: "vertical",
width: "485px",
header: "Holaa",
link: false,
actions: true,
adicional: false,
bt1: "Hola",
score: "10.0",
date: "10/10/2021",
img: "si",
text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];

const cardData5 = [
    {
        direction: "vertical",
        width: "485px",
        header: "Holaa",
        link: false,
        actions: true,
        adicional: false,
        bt1: "Hola",
        score: "10.0",
        date: "10/10/2021",
        img: "si",
        text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
    },
    {
      direction: "vertical",
      width: "485px",
      header: "Holaa",
      link: false,
      actions: true,
      adicional: false,
      bt1: "Hola",
      score: "10.0",
      date: "10/10/2021",
      img: "si",
      text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
  },
{
  direction: "vertical",
  width: "485px",
  header: "Holaa",
  link: false,
  actions: true,
  adicional: false,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];
const cardData6 = [
    {
        direction: "vertical",
        width: "485px",
        header: "Holaa",
        link: false,
        actions: true,
        adicional: false,
        bt1: "Hola",
        score: "10.0",
        date: "10/10/2021",
        img: "si",
        text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
    },
    {
      direction: "vertical",
      width: "485px",
      header: "Holaa",
      link: false,
      actions: true,
      adicional: false,
      bt1: "Hola",
      score: "10.0",
      date: "10/10/2021",
      img: "si",
      text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
  },
{
  direction: "vertical",
  width: "485px",
  header: "Holaa",
  link: false,
  actions: true,
  adicional: false,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];





export default function InicioLec(){

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
   
    return(
        <>
<HeaderAlumno/>
           <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">Lecciones</h2>   
              <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <h3 className="secondary brand">Cuarto Grado</h3>  
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Operaciones Básicas </h5>
                      <t6 className="secondary brand">  </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Fracciones</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData2.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div>
                  
                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 3</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData3.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div>
                <h3 className="secondary brand">Segundo Grado</h3>

                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 1</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData4.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div></div></div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 2</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData5.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div></div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 3</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData6.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div></div>
            </div> 
            </div>
           </div>
        </div>
        <FooterApp/>
        </>
    )

}