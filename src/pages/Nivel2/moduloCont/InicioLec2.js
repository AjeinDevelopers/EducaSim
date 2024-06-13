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
      header: "Conteo y reconocer números del 0 al 100",
      linkButton: "/Leccion/matematicas/primero/Numeros1al100",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "En la primera serie de números, del 1 al 30, las decenas y las unidades se expresan en una sola palabra..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "Suma y Resta simple",
      linkButton: "/Leccion/matematicas/primero/SumaRestaBasica",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "Llamamos suma a la acción de añadir, juntar o agregar elementos, cuando realizamos esta acción estamos uniendo..."
  }
];

const cardData2 = [
  {
      direction: "vertical",
      width: "485px",
      header: "Formas geométricas básicas",
      linkButton: "/Leccion/matematicas/primero/FigurasGeometricasBasicas",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "Se trata de aquellas superficies planas delimitadas por líneas que pueden ser curvas..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "Suma avanzada",
      linkButton: "/Leccion/matematicas/primero/SumaAvanzada",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "La suma avanzada incluye sumas con múltiples dígitos y puede implicar llevar números de una columna a otra..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "Resta avanzada",
      linkButton: "/Leccion/matematicas/primero/RestaAvanzada",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "La resta avanzada incluye restas con múltiples dígitos y puede implicar pedir prestado entre columnas..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "Multiplicación básica",
      linkButton: "/Leccion/matematicas/primero/MultiplicacionBasica",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "La multiplicación básica es la operación de combinar varias cantidades del mismo tamaño..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "Fracciones básicas",
      linkButton: "/Leccion/matematicas/primero/OpcFraccionesBasicas",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "Las fracciones básicas representan partes de un todo y son fundamentales en las matemáticas..."
  }
];

const cardData3 = [
  {
      direction: "vertical",
      width: "485px",
      header: "Figuras geométricas 2D",
      linkButton: "/Leccion/matematicas/primero/FigurasGeométricas2D",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "Las figuras geométricas 2D incluyen formas como círculos, cuadrados y triángulos, esenciales en geometría..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "División básica",
      linkButton: "/Leccion/matematicas/primero/DivisionBasica",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "La división básica consiste en repartir un número en partes iguales, un concepto clave en matemáticas..."
  },
  {
      direction: "vertical",
      width: "485px",
      header: "Multiplicaciones nivel 2",
      linkButton: "/Leccion/matematicas/primero/MultiplicacionesNivel2",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "Las multiplicaciones de nivel 2 implican operar con números más grandes y desarrollar una comprensión más profunda..."
  }
];

const cardData4 = [
  {
      direction: "vertical",
      width: "485px",
      header: "Perímetro y área",
      linkButton: "/Leccion/matematicas/primero/PerimetroyArea",
      actions: true,
      adicional: false,
      bt1: "Leer",
      score: "10.0",
      date: "10/10/2021",
      img: MuLTI,
      text: "El perímetro es la medida del contorno de una figura, mientras que el área es la medida de la superficie que ocupa..."
  }];

export default function InicioLec2(){

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
              <h3 className="secondary brand">Primer Grado</h3>  
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Operaciones Básicas</h5>
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
                    <h5 className="secondary brand">Figuras Geometricas</h5>
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
                
            </div> 
            </div>
           </div>
        </div>
        <FooterApp/>
        </>
    )

}