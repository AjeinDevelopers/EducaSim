import HeaderAlumno from "../../../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import Pregunta from "../../../../modelos/pregunta/pregunta.jsx";
import RadButtonGroup from "../../../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../../../modelos/footer/FooterApp.jsx";
import Boton from "../../../../componentes/boton/boton.jsx";


export default function Ejercicio1(){
    const [sendForm, setSendForm] = useState(false);
    const [radButtonError, setRadButtonError] = useState(true);
    /**1: 13,824. 2:500. 3:335,784. 4:383. 5:251 */
    const items1 = [
        {value: 'opc1', label: '12,428'},
        {value: 'opc2', label: '13,824'},
        {value: 'opc3', label: '12,483'},
        {value: 'opc4', label: '13,284'},

    ];
    const items2 = [
        {value: 'opc1', label: '450'},
        {value: 'opc2', label: '484'},
        {value: 'opc3', label: '500'},
        {value: 'opc4', label: '480'},

    ];
    const items3 = [
        {value: 'opc1', label: '335,784'},
        {value: 'opc2', label: '334,874'},
        {value: 'opc3', label: '387,784'},
        {value: 'opc4', label: '335,874'},

    ];
    const items4 = [
        {value: 'opc1', label: '384'},
        {value: 'opc2', label: '382'},
        {value: 'opc3', label: '385'},
        {value: 'opc4', label: '383'},

    ];
    const items5 = [
        {value: 'opc1', label: '250'},
        {value: 'opc2', label: '252'},
        {value: 'opc3', label: '251'},
        {value: 'opc4', label: '254'},

    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!radButtonError){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [ radButtonError]);

    let handleValue = (value) => {
        setValue(value);
    }


    let handleRadButtonError = (error) => {
        setRadButtonError(error);
    }


    return(
        <>
         <HeaderAlumno/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Multiplicación y división</h2>
                <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XS, 32px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Grado: 4°</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Reactivos: 5</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)",background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Tipo: Opción múltiple</t5>
                    </div>
                </div>
                <div style={{display:"flex", padding:"var(--M, 48px)",flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch",background:"var(--Color-Principales-Claros-Primary, #CAE6FF)", border:"4px solid var(--Color-Principales-Fuertes-Primary, #4BA8FF)", borderRadius:"var(--XXXS, 16px)"}}>
                    <h3>Instrucciones</h3>
                    <t5>Lee con atención las siguientes y preguntas y contesta lo mejor que puedas. Éxito!</t5>
                </div>
                <div style={{display:"flex",padding:"var(--M, 48px)", width:"1344px", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XXXS, 16px)"}}>
                <h5 className="secondary brand">Pregunta 1</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"Si multiplicas 3,456 por 4, ¿cuál es el resultado?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el resultado de dividir 8,000 entre 16?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"¿Cuánto es 9,876 x 34?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el cociente de 8,436 dividido entre 22?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items5} size={"large"} estilo={"secondary"}
                                    label={"¿Cuál es el cociente de 6,789 dividido entre 27?"}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                </div>
                <div style={{alignItems:"center"}}>
                <Boton size={"small"} Style={"secondary"} text={"Comprobar"} showIcon2={true}
                           icon2={"fa-solid fa-check fa-fw"}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} />                
                 </div>
            </div>
         </div>
         <FooterApp/>
        </>
    )

}
