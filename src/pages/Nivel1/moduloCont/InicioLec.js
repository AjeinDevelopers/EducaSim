import HeaderAlumno from "../../../modelos/header/HeaderAlumno.jsx";
import Card from "../../../modelos/card/card.jsx";
import { Link} from "react-router-dom";
import FooterApp from "../../../modelos/footer/FooterApp.jsx";
import MuLTI from "../../../assets/common/MuLTI.jpg";
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

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
    header: "Suma y Resta de Fracciones",
    linkButton: "/Leccion/matematicas/cuarto/fracciones/suma_resta",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "La suma y resta de fracciones consiste en..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Multiplicación de Fracciones",
    linkButton: "/Leccion/matematicas/cuarto/fracciones/multiplicacion",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "La multiplicación de fracciones consiste en..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "División de Fracciones",
    linkButton: "/Leccion/matematicas/cuarto/fracciones/division",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "La división de fracciones consiste en..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Fracciones y Decimales",
    linkButton: "/Leccion/matematicas/cuarto/fracciones/decimales",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Convertir fracciones en decimales y viceversa..."
  }
];

const cardData3 = [
  {
    direction: "vertical",
    width: "485px",
    header: "Ángulos",
    linkButton: "/Leccion/matematicas/cuarto/angulos",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Los ángulos son una figura formada por dos..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Rectas",
    linkButton: "/Leccion/matematicas/cuarto/rectas",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Las rectas son una sucesión continua e indefinida de puntos..."
  }
];

const cardData4 = [
  {
    direction: "vertical",
    width: "485px",
    header: "Áreas",
    linkButton: "/Leccion/matematicas/cuarto/areas",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "El área es una medida de la superficie de una figura..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Perímetros",
    linkButton: "/Leccion/matematicas/cuarto/perimetros",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "El perímetro es la suma de todos los lados de una figura..."
  }
];

const cardData5 = [
  {
    direction: "vertical",
    width: "485px",
    header: "Decimales",
    linkButton: "/Leccion/matematicas/quinto/decimales",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Los números decimales son una extensión de los números enteros..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Proporciones",
    linkButton: "/Leccion/matematicas/quinto/proporciones",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Las proporciones son una comparación entre dos magnitudes..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Porcentajes",
    linkButton: "/Leccion/matematicas/quinto/porcentajes",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Los porcentajes son una forma de expresar una fracción..."
  }
];

const cardData6 = [
  {
    direction: "vertical",
    width: "485px",
    header: "Gráficas",
    linkButton: "/Leccion/matematicas/sexto/graficas",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Las gráficas son una representación visual de datos..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Ecuaciones",
    linkButton: "/Leccion/matematicas/sexto/ecuaciones",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Las ecuaciones son igualdades matemáticas que contienen una o más incógnitas..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Proporcionalidad",
    linkButton: "/Leccion/matematicas/sexto/proporcionalidad",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "La proporcionalidad es una relación entre dos magnitudes..."
  },
  {
    direction: "vertical",
    width: "485px",
    header: "Porcentajes",
    linkButton: "/Leccion/matematicas/sexto/porcentajes",
    actions: true,
    adicional: false,
    bt1: "Leer",
    score: "10.0",
    date: "10/10/2021",
    img: MuLTI,
    text: "Los porcentajes son una forma de expresar una fracción..."
  }
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
                    <h5 className="secondary brand">Ángulos y rectas</h5>
                    <t6 className="secondary brand">Ver más→ </t6>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>
                    
                    {cardData3.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
                </div>
                <h3 className="secondary brand">Quinto Grado</h3>

                <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}> 
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 12px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Áreas</h5>
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
                    <h5 className="secondary brand"> Decimales</h5>
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
                    <h5 className="secondary brand">Sexto</h5>
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