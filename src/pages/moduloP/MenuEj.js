import HeaderApp from "../../modelos/header/HeaderApp.jsx";
import InputEmail from "../../componentes/input/inputEmail.jsx";
import Boton from "../../componentes/boton/boton.jsx";
import Card from "../../modelos/card/card.jsx";
import {useState, useEffect} from "react";
import FooterPromo from "../../modelos/footer/FooterPromo.jsx";

export default function MenuEj(){
    const cardData = [
        {
            direction: "vertical",
            width: "304px",
            header: "Holaa",
            link: true,
            actions: false,
            adicional: true,
            bt1: "Hola",
            bt2: "Hola",
            score: "10.0",
            date: "10/10/2021",
            img: "si",
            text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
        },
        {
          direction: "vertical",
          width: "404px",
          header: "Funciones",
          link: false,
          actions: false,
          adicional: false,
          bt1: "Hola",
          bt2: "Hola",
          score: "10.0",
          date: "10/10/2021",
          img: "si",
          text: "ahjasidagdkjSKJAHDAHJBLadhalksj    d"
      },
      {
        direction: "vertical",
        width: "304px",
        header: "Holaa",
        link: true,
        actions: true,
        adicional: true,
        bt1: "Hola",
        bt2: "Hola",
        score: "10.0",
        date: "10/10/2021",
        img: "si",
        text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"
    },];
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
                <InputEmail Style={"primary"} label={"Teodiox2"} showLabel={true} EmailError={handleEmailError} required={true}
                                register={true}/>

                <Boton size={"small"} Style={"secondary"} text={"Teodio"} showIcon2={true}
                           icon2={"fa-solid fa-right-to-bracket fa-fw"}
                           method={"SUMBIT"} {...(sendForm ? {disabled: false} : {disabled: true})} /> 
                           <div style={{gap:"var(--XS, 32px)"}}>
                    {cardData.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div> 
                <FooterPromo/>              
            </>
        )

}