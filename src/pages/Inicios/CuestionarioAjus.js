import HeaderAlumno from "../../modelos/header/HeaderAlumno.jsx";
import {useState, useEffect} from "react";
import RadButtonGroup from "../../componentes/radbutton/RadButtonGroup.jsx";
import FooterApp from "../../modelos/footer/FooterApp.jsx";
import Boton from "../../componentes/boton/boton.jsx";


export default function CuestionarioAjus(){
    const [sendForm, setSendForm] = useState(false);
    const [radButtonError, setRadButtonError] = useState(true);
    /**repuestas correctas: */
    const items1 = [
        {value: 'opc1', label: 'Opc1'},
        {value: 'opc2', label: 'Opc2'},
        {value: 'opc3', label: 'Opc3'}, 

    ];
    const items2 = [
        {value: '1', label: 'Opc1'},
        {value: '2', label: 'Opc2'},
        {value: '3', label: 'Opc3'}, 

    ];
    const items3 = [
        {value: '4', label: 'Opc1'},
        {value: '5', label: 'Opc2'},
        {value: '6', label: 'Opc3'}, 

    ];
    const items4 = [
        {value: '7', label: 'Opc1'},
        {value: '8', label: 'Opc2'},
        {value: '9', label: 'Opc3'}, 

    ];
    const items5 = [
        {value: '10', label: 'Opc1'},
        {value: '11', label: 'Opc2'},
        {value: '12', label: 'Opc3'}, 

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
                <h2 className="secondary brand">Cuestionario de Ajuste</h2>
                
                
                <div style={{display:"flex",padding:"var(--M, 48px)", width:"1344px", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XXXS, 16px)"}}>
                <h5 className="secondary brand">Pregunta 1</h5>
                <RadButtonGroup items={items1} size={"large"} estilo={"secondary"}
                                    label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo."}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 2</h5>
                <RadButtonGroup items={items2} size={"large"} estilo={"secondary"}
                                    label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo."}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 3</h5>
                <RadButtonGroup items={items3} size={"large"} estilo={"secondary"}
                                    label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo."}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <h5 className="secondary brand">Pregunta 4</h5>
                <RadButtonGroup items={items4} size={"large"} estilo={"secondary"}
                                    label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo."}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/> 
                <h5 className="secondary brand">Pregunta 5</h5>
                <RadButtonGroup items={items5} size={"large"} estilo={"secondary"}
                                    label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo."}
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