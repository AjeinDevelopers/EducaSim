import { useState, useEffect } from "react";
import HeaderProfesor from '../../modelos/header/HeaderProfesor.jsx';
import Input from "../../componentes/input/input.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import FooterApp from "../../modelos/footer/FooterApp.jsx";
import AlumnoLista from '../../componentes/AlumnoLista/AlumnoLista.jsx';


export default function AdministrarClase() {
    const [sendForm, setSendForm] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [passError, setPassError] = useState(true);
    const [nombreClase, setNombreClase] = useState("[Clase]");

    useEffect(() => {
        if (!emailError && !passError) {
            setSendForm(true);
            console.log("Entra al if error");
        } else {
            setSendForm(false);
            console.log("Entra al else");
        }
    }, [emailError, passError]);

    let handleEmailError = (error) => {
        setEmailError(error);
    }

    let handlePasswordError = (error) => {
        setPassError(error);
    };

    //<---------------------- Botoncito ----------------------------------->
    const [inputError, setInputError] = useState(true);
    const [dropdownError, setDropdownError] = useState(true);
    const [radButtonError, setRadButtonError] = useState(true);

    const items = [
        { value: 'opc1', label: 'Opc1' },
        { value: 'opc2', label: 'Opc2' },
        { value: 'opc3', label: 'Opc3' },
    ];

    const [value, setValue] = useState(null);
    const [selector, setSelector] = useState(null);

    useEffect(() => {
        if (!emailError && !passError && !inputError && !dropdownError && !radButtonError) {
            setSendForm(true);
        } else {
            setSendForm(false);
        }
    }, [emailError, passError, inputError, dropdownError, radButtonError]);

    let handleValue = (value) => {
        setValue(value);
    }

    let handleRadButtonError = (error) => {
        setRadButtonError(error);
    }

    let handleDropdownError = (error) => {
        setDropdownError(error);
    }

    let handleInputError = (error) => {
        setInputError(error);
    };

    let handleSelector = (value) => {
        setSelector(value);
    }

    return (
        <>
            <HeaderProfesor />

            <div style={{ width: "calc(100% - 192px)", flexDirection: "column", padding: "var(--M, 48px) var(--XS, 32px)", alignItems: "center", gap: "var(--M, 48px)" }}>
                <div style={{ flexDirection: "row", alignItems: "center" }}>
                    <h2 style={{ color: "var(--color-principal)" }} className={"secondary"}>Administrar Clase {nombreClase}</h2>
                </div>
                <div style={{ width: "calc(100%)", flexDirection: "column", padding: "var(--XS, 32px) 0px", alignItems: "center", gap: "var(--XS, 32px)" }}>
                    <div style={{ flexDirection: "row", alignItems: "center" }}>
                        <h5 style={{ color: "var(--color-principal)" }} className={"primary"}> Código Clase </h5>
                    </div>
                    <div style={{ width: "calc(100%)", flexDirection: "column", alignItems: "center" }}>
                        <Input label={"Codigo Clase"} showLabel={true} required={false} register={true} />
                    </div>
                    <div style={{ flexDirection: "row", alingnItems: "center" }}>
                        <Boton size={"small"} Style={"primary"} text={"Regenerar"} showIcon2={false}
                            icon2={"fa-solid fa-trash fa-fw"}
                            method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: false })} />
                    </div>
                    <div style={{ flexDirection: "row", alignItems: "center" }}>
                        <h5 style={{ color: "var(--color-principal)" }} className={"primary"}> Zona de Peligro </h5>
                    </div>
                    <div style={{ flexDirection: "row", alingnItems: "center" }}>
                        <Boton size={"small"} Style={"error"} text={"Eliminar Clase"} showIcon2={true}
                            icon2={"fa-solid fa-trash fa-fw"}
                            method={"SUMBIT"} {...(sendForm ? { disabled: false } : { disabled: false })} />
                    </div>
                    <div style={{display: "flex",padding:"10px", flexDirection:" column",alignItems: "flex-start", gap: "var(--XS, 32px)", alignSelf: "stretch"}}>
                        <h3 className="primary brand">Administrar alumnos</h3>
                        <div style={{width: "100%", flexDirection: "column", gap: ""}}>
                        <AlumnoLista/>
                        <AlumnoLista/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterApp/>
        </>
    )
}