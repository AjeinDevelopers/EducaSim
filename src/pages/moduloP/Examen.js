import HeaderApp from "../../modelos/header/HeaderApp"
import {useState, useEffect} from "react";
import Pregunta from "../../modelos/pregunta/pregunta";
import RadButtonGroup from "../../componentes/radbutton/RadButtonGroup.jsx";


export default function Examen(){
    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [inputError, setInputError] = useState(true);
    const [dropdownError, setDropdownError] = useState(true);
    const [radButtonError, setRadButtonError] = useState(true);

    const items = [
        {value: 'opc1', label: 'Opc1'},
        {value: 'opc2', label: 'Opc2'},
        {value: 'opc3', label: 'Opc3'},
    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if(!emailError && !passError && !inputError && !dropdownError && !radButtonError){
            setSendForm(true);
        }else{
            setSendForm(false);
        }
    }, [emailError, passError, inputError, dropdownError, radButtonError]);

    let handleValue = (value) => {
        setValue(value);
    }

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handleRadButtonError = (error) => {
        setRadButtonError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    let handleDropdownError = (error) => {
        setDropdownError(error);
    }

    let handleInputError = (error) => {
        setInputError(error);
    };

    let handleSelector = (value) => {
        setSelector(value);
    }




    return(
        <>
         <HeaderApp/>
         <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Titulo Ejercicio</h2>
                <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XS, 32px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)",borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Grado: X°</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)", background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Reactivos: N</t5>
                    </div>
                    <div style={{display:"flex", color:"var(--Color-Principales-Fuertes-Text_Alt, #F0F8FF)", borderRadius:"var(--XUS, 8px)",background:"var(--Color-Principales-Fuertes-Secondary, #00BB9A)", padding:"var(--XXS, 16px) var(--XS, 24px)", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 8px)", flex:"1 0 0"}}>
                        <t5>Tipo Ejercicio</t5>
                    </div>
                </div>
                <div style={{display:"flex", padding:"var(--M, 48px)",flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch",background:"var(--Color-Principales-Claros-Primary, #CAE6FF)", border:"4px solid var(--Color-Principales-Fuertes-Primary, #4BA8FF)", borderRadius:"var(--XXXS, 16px)"}}>
                    <h3>Instrucciones</h3>
                    <t5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.</t5>
                </div>
                <div style={{display:"flex",padding:"var(--M, 48px)", width:"1344px", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XXXS, 16px)"}}>
                <h5 className="secondary brand">Pregunta 1</h5>
                <RadButtonGroup items={items} size={"large"} estilo={"secondary"}
                                    label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo."}
                                     required={true} onChange={handleValue} RadButtonError={handleRadButtonError}/>
                <Pregunta pregunta={"¿Qué es un componente?"} width={"100%"} img={"a"} />
                </div>
            </div>
         </div>
        </>
    )

}