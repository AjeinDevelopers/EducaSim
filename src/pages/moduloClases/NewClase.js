import {useState, useEffect} from "react";
import HeadeProfesor from "../../modelos/header/HeaderProfesor.jsx";
import inicioProf from '../../pages/InicioCuentas/imagenes/inicioProf.svg';
import Input from "../../componentes/input/input.jsx";
import Dropdown from "../../componentes/dropdown/dropdown.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import FooterApp from "../../modelos/footer/FooterApp.jsx";

export default function NewClase (){
    const items = [
        {value: 'opc1', label: 'Fase 1'},
        {value: 'opc2', label: 'Fase 2'}
    ];

    const [sendForm, setSendForm] = useState(false);
    const [inputError, setInputError] = useState(true);
    const [dropdownError, setDropdownError] = useState(true);

    const [selector, setSelector] = useState(null);


    useEffect(() => {
        if( !inputError && !dropdownError){
            setSendForm(true);
            console.log("Entra al if error");
        }else{
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [inputError, dropdownError]);

    let handleInputError = (error) => {
        setInputError(error);
    };
    let handleDropdownError = (error) => {
        setDropdownError(error);
    }

    let handleSelector = (value) => {
        setSelector(value);
    }



    return(
        <>
            <HeadeProfesor />
        <div style={{ width: "1440px", height: "692px", display: "flex", alignItems: "center" }}>
            <img src={inicioProf} alt="Profesor con libros" />
            <div style={{ flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)", display: "flex", flex: "1 0 0" }}>
                <h2 className="secondary brand">Crear nueva clase</h2>
                <div style={{ display: "flex", padding: "0px 24px", flexDirection: "column", alignItems: "center", gap: "24px", alignSelf: "stretch" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                    
                        <div style={{ width:"624px",display: "flex", padding: "8px 12px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "8px", alignSelf: "stretch" }}>
                        <Input Style={"primary"} label={"Nombre Clase"}showLabel={true} required={true} InputError={handleInputError}/>
                        
                        <Dropdown label={"Escoge la fase"} items={items} size={"medium"} required={true}
                              DropdownError={handleDropdownError} onChange={handleSelector}/>    

                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "12px", width:"100%" }}>
                            <Boton size = {"small"} style={"primary"} text={"Crear Clase"} showIcon2={true}
                            icon2={"fa-solid fa-right-to-bracket fa-fw"} method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: true })} />
                             </div>    
                                <div style={{display: "flex", justifyContent: "center", textAlign: "center", padding: "0px", width:"100%"}}>
                            
                                </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <FooterApp/>
        </>
    )
}
