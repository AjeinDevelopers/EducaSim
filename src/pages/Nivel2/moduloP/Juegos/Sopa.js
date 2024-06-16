import SopaLetras from "../../../../componentes/SopaLetras/SopaLetras";
import HeaderAlumno from '../../../../modelos/header/HeaderAlumno';
import FooterApp from '../../../../modelos/footer/FooterApp';

export default function Sopa() {
    return (
        <>
        <HeaderAlumno/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 12px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h3 className="secondary brand">Crucigrama resumen de fase</h3>
                <div style={{display:"flex", padding:"var(--XXS, 16px) var(--XS, 36px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 12px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Fase: 1</t5>
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
                    <t5>Selecciona las palabras que vayas encontrando y presiona el checar palabra.</t5>
                </div>
               </div></div>
               <div style={{display: "flex",padding: "10px var(--M, 32px)",flexDirection: "column", alignItems: "center", gap: "var(--XXS, 24px)",alignSelf: "stretch"}}>
             <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", gap:" var(--XXS, 24px)", alignSelf:" stretch"}}>
             <div style={{display: "flex", padding: "var(--XXXS, 24px)",flexDirection: "column", alignItems:"flex-start", gap: "var(--XXS, 24px)", flex: "1 0 0"}}>
             <h3>Palabras</h3>
             <t5>1.Decenas: "Grupo de diez unidades.".</t5>
             <t5>2. Comparar: "Ver si un número es mayor, menor o igual a otro."</t5>
             <t5>3. Sumar: "Juntar números para hacer uno más grande."</t5>
             <t5>4. Restar: "Quitar una cantidad de otra."</t5>
             <t5>5. Forma: "El contorno de algo, como un círculo o un cuadrado."</t5>
             <t5>3. Longitud: "Qué tan largo es algo."</t5>
             <t5>5. Hora: "Lo que usamos para saber qué momento del día es."</t5>
             <t5>8. Gráfico: "Dibujo que muestra información con barras o imágenes.".</t5>
             </div>
             <div style={{display: "flex",marginTop:"-50px",padding: "var(--XXXS, 120px)",justifyContent:"center", flexDirection: "column", alignItems: "center", gap: "var(--XUS, 20px)"}}>           
             <SopaLetras/>
             </div>
            </div></div>
           <FooterApp/>
            
        
        </>
    );
}

