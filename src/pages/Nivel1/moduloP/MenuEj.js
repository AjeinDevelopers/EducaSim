import HeaderAlumno from "../../../modelos/header/HeaderAlumno.jsx";
import Card from "../../../modelos/card/card.jsx";
import { useState } from "react";
import { Link} from "react-router-dom";
import FooterApp from "../../../modelos/footer/FooterApp.jsx";
/**quitar boton2 */
  const cardData_1 = [
    {
        direction: "vertical",
        width: "304px",
        header: "Holaa",
        link: true,
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
      link: true,
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
    link: true,
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
  link: true,
  actions: true,
  adicional: true,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];
const cardData_2 = [
  {
      direction: "vertical",
      width: "304px",
      header: "Holaa",
      link: true,
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
    link: true,
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
  link: true,
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
link: true,
actions: true,
adicional: true,
bt1: "Hola",
score: "10.0",
date: "10/10/2021",
img: "si",
text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];
const cardData_3 = [
  {
      direction: "vertical",
      width: "304px",
      header: "Holaa",
      link: true,
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
    link: true,
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
    link: true,
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
  link: true,
  actions: true,
  adicional: true,
  bt1: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
  },
];
const cardData_4 = [
  {
      direction: "vertical",
      width: "304px",
      header: "Holaa",
      link: true,
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
    link: true,
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
  link: true,
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
link: true,
actions: true,
adicional: true,
bt1: "Hola",
score: "10.0",
date: "10/10/2021",
img: "si",
text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];
const cardData_5 = [
{
    direction: "vertical",
    width: "304px",
    header: "Holaa",
    link: true,
    actions: true,
    adicional: true,
    bt1: "Hola",
    bt2: "Hola",
    score: "10.0",
    date: "10/10/2021",
    img: "si",
    text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
{
  direction: "vertical",
  width: "304px",
  header: "Holaa",
  link: true,
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
link: true,
actions: true,
adicional: true,
bt1: "Hola",
bt2: "Hola",
score: "10.0",
date: "10/10/2021",
img: "si",
text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
{
direction: "vertical",
width: "304px",
header: "Holaa",
link: true,
actions: true,
adicional: true,
bt1: "Hola",
score: "10.0",
date: "10/10/2021",
img: "si",
text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
];
const cardData= [
{
    direction: "vertical",
    width: "304px",
    header: "Holaa",
    link: true,
    actions: true,
    adicional: true,
    bt1: "Hola",
    bt2: "Hola",
    score: "10.0",
    date: "10/10/2021",
    img: "si",
    text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
{
  direction: "vertical",
  width: "304px",
  header: "Holaa",
  link: true,
  actions: true,
  adicional: true,
  bt1: "Hola",
  bt2: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
},
{
  direction: "vertical",
  width: "304px",
  header: "Holaa",
  link: true,
  actions: true,
  adicional: true,
  bt1: "Hola",
  bt2: "Hola",
  score: "10.0",
  date: "10/10/2021",
  img: "si",
  text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
}
];

export default function MenuEj(){

    return(
        <>
           <HeaderAlumno/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">Ejercicios</h2>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <h3 className="secondary brand">Tecer Grado</h3>  
            <div style={{display:"flex", width:"100%", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px"}}>
                <h4 className="primary brand">Recomendados</h4>
                <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>                   
                    {cardData_1.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                    </div>
                    </div>
                </div>
                <div style={{ display: "flex", padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 1</h5>
                    <Link to="/">
                      <t6 className="secondary brand">Ver más→ </t6>
                    </Link> 
                  </div>
                  <div style={{gap:"var(--XS, 32px)"}}>
                    {cardData_2.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                <div style={{ display: "flex", padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 2</h5>
                    <Link to="/">
                      <t6 className="secondary brand">Ver más→ </t6>
                    </Link> 
                  </div>
                  <div style={{gap:"var(--XS, 32px)"}}>
                    {cardData_3.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
            
              
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <h3 className="secondary brand">Segundo Grado</h3>  
              <div style={{display:"flex", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex", padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Recomendados</h5>
                    <Link to="/">
                      <t6 className="secondary brand">Ver más→ </t6>
                    </Link> 
                  </div>
                  <div style={{gap:"var(--XS, 32px)"}}>
                    {cardData_4.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div>
                <div style={{ display: "flex", padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Tema 1</h5>
                    <Link to="/">
                      <t6 className="secondary brand">Ver más→ </t6>
                    </Link> 
                  </div>
                  <div style={{gap:"var(--XS, 32px)"}}>
                    {cardData_5.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div>
        </div>
        <FooterApp/>
        </>
    )
}