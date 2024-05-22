import './App.css';
import Boton from "./componentes/boton/boton.jsx";
import InputPassword from "./componentes/input/inputPassword.jsx"
import InputText from "./componentes/input/inputText.jsx";
import PromoHeader from "./modelos/header/PromoHeader.jsx";

function App() {
  return (
      <div className="App">
          <h1>Componentes</h1>
          <h3>Botón</h3>
          <Boton estilo={"secondary"} text={"Botón"} showIcon1={true} icon1={"fa-solid fa-right-to-bracket fa-fw"}
                 showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} handleClick={clicksito}/>
          <h3>Input</h3>
          <InputPassword estilo={"primary"} type={"password"} required={true} label={"Hola"} showIcon1={true} mensaje={"probando"}
                         name={"password"} id={"user-password"} showMessage={true}/>
          <InputText estilo={"primary"} type={"password"} required={true} label={"Hola"} showIcon1={true} mensaje={"probando"}
                     name={"campito"} id={"campito"} icon1 = "fa-solid fa-right-to-bracket fa-fw" showMessage={true} />
          <PromoHeader/>
      </div>
  );
}

function clicksito(){
    console.log("boton click");
}

export default App;
