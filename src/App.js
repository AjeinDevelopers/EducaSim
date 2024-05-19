import './App.css';
import Boton from "./componentes/boton/boton.jsx";

function App() {
  return (
      <div className="App">
          <h1>Componentes</h1>
          <br/>
          <br/>
          <h3>Botón</h3>
          <br/>
          <Boton estilo={"secondary"} text={"Botón"} showIcon1={true} icon1={"fa-solid fa-right-to-bracket fa-fw"}
                 showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} handleClick={clicksito}/>
          <br/>
          <h3>Input</h3>
          <br/>
      </div>
  );
}

function clicksito(){
    window.alert("Hola");
}

export default App;
