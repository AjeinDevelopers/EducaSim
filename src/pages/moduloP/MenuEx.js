import HeaderApp from "../../modelos/header/HeaderApp.jsx";
import Card from "../../modelos/card/card.jsx";
import { useState } from "react";
import { Link} from "react-router-dom";

  const cardData = [
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
];

export default function MenuEx(){

    return(
        <>
           <HeaderApp/>
           <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">Examénes</h2>   
              <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <h3 className="secondary brand">Tecer Grado</h3>  
              <div style={{display:"flex", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
                  <div style={{ display: "flex",padding:"var(--US, 12px) 0px", justifyContent:"center", alignItems:"center", alignSelf:"stretch" }}> 
                    <h5 className="secondary brand">Recomendados</h5><Link to="/"><t6 className="secondary brand">Ver más-- </t6></Link> 
                  </div>
                  <div style={{gap:"var(--XS, 32px)"}}>
                    {cardData.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}/*lleva header distinto*/