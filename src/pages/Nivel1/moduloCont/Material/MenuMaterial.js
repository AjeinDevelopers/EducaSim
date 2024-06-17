import HeaderProfesor from "../../../../modelos/header/HeaderProfesor.jsx"
import Card from "../../../../modelos/card/card.jsx";
import { Link} from "react-router-dom";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import { useState } from "react";
import numeros from '../../../../assets/common/numeros.avif';
import figurasG from '../../../../assets/common/figurasG.webp';
import CDU from '../../../../assets/common/CDU.jpg';

/**corregir modelo de menu ex, ej y este */
  const cardData = [
    {
        direction: "vertical",
        width: "485px",
        header: "Identificando Números",
        linkButton: "/Material/Primero/1",
        actions: true,
        adicional: false,
        bt1: "Ver más" ,
        score: "10.0",
        date: "10/10/2021",
        img: numeros,
        text: "El alumno podrá identificar números de 1 al 10, con figuras."
    },
{
  direction: "vertical",
  width: "485px",
  header: "Reconocimiento",
  linkButton: "/Material/Primero/2",
  actions: true,
  adicional: false,
  bt1: "Ver más",
  score: "10.0",
  date: "10/10/2021",
  img: numeros,
  text: "El alumno podrá practicar el reconocimiento de series básicas y sumas pequeñas."
},
{
  direction: "vertical",
  width: "485px",
  header: "Medidas",
  linkButton: "/Material/Primero/3",
  actions: true,
  adicional: false,
  bt1: "Ver más",
  score: "10.0",
  date: "10/10/2021",
  img: numeros ,
  text: "El alumno va a identificar la diferencia en las medidas de varios objetos.",
},
{
  direction: "vertical",
  width: "485px",
  header: "Cantidades",
  linkButton: "/Material/Primero/4",
  actions: true,
  adicional: false,
  bt1: "Ver más",
  score: "10.0",
  date: "10/10/2021",
  img: numeros,
  text: "El alumno irá identificando cantidades pequeñas mediante objetos. "
}
];
const cardData2 = [
    {
        direction: "vertical",
        width: "300px",
        header: "Identificación Figuras",
        linkButton: "/Material/Segundo/1",
        actions: true,
        adicional: false,
        bt1: "Ver más",
        score: "10.0",
        date: "10/10/2021",
        img: figurasG,
        text: "El alumno identifica las figuras geométricas básicas."
    },
    {
      direction: "vertical",
      width: "300px",
      header: "Figuras Geométricas",
      linkButton: "/Material/Segundo/2",
      actions: true,
      adicional: false,
      bt1: "Ver más",
      score: "10.0",
      date: "10/10/2021",
      img: figurasG,
      text: "Identificar las figuras geométricas y sus lados"
  },
{
  direction: "vertical",
  width: "300px",
  header: "Centenas, decenas y unidades",
  linkButton: "/Material/Segundo/3",
  actions: true,
  adicional: false,
  bt1: "Ver más",
  score: "10.0",
  date: "10/10/2021",
  img: CDU,
  text: "Descomponer en decenas, centenas y unidades"
},
];





export default function MenuMaterial(){
   
    return(
        <>
<HeaderProfesor/>
           <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">Material Imprimible</h2>   
              <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <h3 className="secondary brand">Primer Grado</h3>  
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Identificacion de números del 1 al 100</h5>
                      <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                  
               
                <h3 className="secondary brand">Segundo Grado</h3>

                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Figuras Geométricas</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData2.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div></div></div>
            </div> 
            </div>
           
        
        <FooterApp/>
        </>
    )

}