import HeaderAlumno from '../../modelos/header/HeaderAlumno';
import BarsChart from './BarsChart';
import Card from '../../modelos/card/card';
import FooterApp from '../../modelos/footer/FooterApp';
export default function ProgresoAlumP(){
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
      }
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
      }
    ];
    return(
        <>
        <HeaderAlumno/>
        <div style={{display:"flex",flexDirection:"column",padding:"var(--M, 48px) var(--XS, 32px)", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <h2 className='primary brand'>Progreso de [Nombre]</h2>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <div style={{display: "flex",padding: "var(--XXXS, 16px) 0px",justifyContent: "space-between",alignItems:"center",alignSelf: "stretch"}}>
                <h3>Rendimiento general</h3> 
                </div>
                
            </div>
        </div>
        <div style={{display: "flex", width: "1376px", flexDirection: "column", alignItems: "flex-start",gap: "var(--XXXS, 24px)"}}>        
            <div  style={{width:"100%", height:"508px"}}>
                <div style={{width:"100%", height:"100%", display:"flex",padding:"var(--M, 48px) var(--L, 64px)",justifyContent:"center"}}>
                    <form id={"datosProgreso"}>
                        <input type={"hidden"} id={"dato1"}  />
                    </form>
                    <BarsChart/>
                 
                </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", alignSelf:"stretch", gap:"var(--XS, 24px)"}}> 
              
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", gap:"var(--XS, 8px)", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 48px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Ejercicios Recientes</h5>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 24px)" }}>
                    
                    {cardData_1.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div></div></div>
             
                <div style={{display:"flex",padding: "0px", flexDirection:"column", alignItems:"flex-start", alignSelf:"stretch"}}> 
              
              <div style={{display:"flex",gridTemplateColumns:"repeat(auto-fill, minmax(485px, 1fr))", flexDirection:"column", alignSelf:"stretch"}}>   
              <div style={{ display: "flex",  padding: "var(--US, 48px) 0px", justifyContent: "space-between", alignItems: "center", width: "100%" }}> 
                    <h5 className="secondary brand">Examenes Recientes</h5>
                  </div>
                  <div style={{overflowX:"auto", gap:"var(--XS, 24px)" }}>
                    
                    {cardData_2.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div></div></div>
                </div>       
                <FooterApp/>
        </>
    )
}