import HeaderAlumno from '../../../../modelos/header/HeaderAlumno';
import CrucigramaSF from '../../../../componentes/crucigrama2/CrucigramaSF.js';
import FooterApp from '../../../../modelos/footer/FooterApp';


export default function CrucigramaApp1() {
    return (
        <>
        <HeaderAlumno/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 12px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h3 className="secondary brand">Crucigrama resumen de fase</h3>
                <div style={{display:"flex", padding:"var(--XXS, 16px) var(--XS, 36px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 12px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Fase: 2</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 12px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Reactivos: 8</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)",background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 12px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Tipo Ejercicio: Crucigrama</t5>
                    </div>
                </div>
                <div style={{display:"flex", padding:"var(--M, 30px)",flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch",background:"var(--Color-Principales-Claros-Primary, #CAE6FF)", border:"4px solid var(--Color-Principales-Fuertes-Primary, #4BA8FF)", borderRadius:"var(--XXXS, 16px)"}}>
                    <h4>Instrucciones</h4>
                    <t5>Escribe las palabras que consideres correctas de acuerdo a las pistas y verifica al completar todos los espacios, si no te marca "correcto", tendrás que revisar tus palabras.</t5>
                </div>
               </div></div>
        
            <div style={{display: "flex",padding: "0px var(--M, 48px)",flexDirection: "column", alignItems: "center", gap: "var(--XXS, 24px)",alignSelf: "stretch"}}>
             <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", gap:" var(--XXS, 24px)", alignSelf:" stretch"}}>
             <div style={{display: "flex", padding: "var(--XXXS, 24px)",flexDirection: "column", alignItems:"flex-start", gap: "var(--XXS, 24px)", flex: "1 0 0"}}>
             <h3>Pistas</h3>
             <h4>Verticales</h4>
             <t5> 1. "Qué tan probable es que ocurra algo.".</t5>
             <t5>2. "Dibujo que muestra datos, como una gráfica de barras."</t5>
             <t5>3. "Espacio que ocupa un objeto, como un cubo."</t5>
              <t5>4. "Número con un punto, como 3.14."</t5>
              <t5>5. "Distancia alrededor de una figura."</t5>
              <h4>Horizontales</h4>
              <t5>6. "Parte de un entero, como 1/2 o 3/4."</t5>
             
              <t5>  7. "Espacio dentro de una figura, como un cuadrado."</t5>
                <t5>8. "Espacio entre dos líneas que se encuentran en un punto."</t5>
             </div>
             <div style={{display: "flex",padding: "var(--XXXS, 24px)", flexDirection: "column", alignItems: "flex-end", gap: "var(--XUS, 8px)"}}>           
             <CrucigramaSF />
             </div>
             </div>
        
             </div>

        <FooterApp/>
        </>
    );
}