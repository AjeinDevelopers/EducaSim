import HeaderProfesor from '../../modelos/header/HeaderProfesor.jsx';
import Card from '../../modelos/card/card.jsx';
import FooterApp from '../../modelos/footer/FooterApp.jsx';
import Boton from '../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
export default function Clases(){
    
       
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
      }
    ];
    
    return(
    
        <>
        <HeaderProfesor/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className='secondary brand'>Clases</h2>
            <div style={{display:"flex", width:"100%", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px"}}>
                <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>   
                  <div style={{overflowX:"auto", gap:"var(--XS, 32px)" }}>                   
                    {cardData_1.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                    </div>
                
            </div>
            </div>
            <div style={{display:"flex", padding:"var(--XXXS, 16px)", alignItems:"center", gap:"var(--US, 12px)"}}>
                        <NavLink className={''} to='/Administrar'><Boton size={"small"}
                         Style={"secondary"} text={"Administrar clases"} showIcon2={true} icon2={"fa-solid fa-reply fa-fw"}/></NavLink>
                        </div>
            </div>
            <FooterApp/>
            </>
            )
}