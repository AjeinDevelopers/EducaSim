import './App.css';
import Boton from "./componentes/boton/boton.jsx";
import Input from "./componentes/input/input.jsx"

function App() {
  return (
      <div className="App">
          <h1>Componentes</h1>
          <h3>Botón</h3>
          <Boton estilo={"secondary"} text={"Botón"} showIcon1={true} icon1={"fa-solid fa-right-to-bracket fa-fw"}
                 showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} handleClick={clicksito}/>
          <h3>Input</h3>
          <Input type={"password"} required={true} label={"Hola"} showIcon1={true} icon1={"fa-solid fa-eye fa-fw"} />
      </div>
  );
}

function clicksito(){
    console.log("boton click");
}

export default App;
