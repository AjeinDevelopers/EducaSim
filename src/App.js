import './App.css';
import {
    BrowserRouter as Router, Routes,
    Route, Link, NavLink
} from "react-router-dom"; 
import Home from './pages/PromoPage/Home.js';
import Nosotros from './pages/PromoPage/Nosotros.js'
import NotFound from './pages/404.js';
import Playground from './pages/Playground.js';
import InicioAlumn from './pages/InicioCuentas/InicioAlumn.js'
import InicioProfe from './pages/InicioCuentas/InicioProfe.js'
import InicioPadre from './pages/InicioCuentas/InicioPadre.js'
import RegistroAlum from './pages/CuentaConf/RegistroAlum.js'
import RegistroProfe from './pages/CuentaConf/RegistroProfe.js'
import Confi from './pages/CuentaConf/Confi.js';
import MenuEx from './pages/Nivel1/moduloP/MenuEx.js';
import MenuEj from './pages/Nivel1/moduloP/MenuEj.js';
import Examen from './pages/Nivel1/moduloP/Examen.js';
import PagInicioA from './pages/Inicios/PagInicioA.js';
import React from "react";
import InicioLec from './pages/Nivel1/moduloCont/InicioLec.js';
import FormatoLeccion from './pages/Nivel1/moduloCont/Lecciones/FormatoLeccion.js';
import Leccion1 from './pages/Nivel1/moduloCont/Lecciones/Leccion1.js';


function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route
                      exact
                      path='/'
                      element={<Home/>}
                  />
                  <Route
                      path='/nosotros'
                      element={<Nosotros/>}
                  />


                  <Route
                      path='*'
                      element={<NotFound/>}
                  />
                  <Route
                      path='/play'
                      element={<Playground/>}
                  />
                  <Route
                        path='/login/alumno'
                        element={<InicioAlumn/>}
                  />   
                    <Route
                        path='/login/profesor'
                        element={<InicioProfe/>}
                    />
                    <Route
                        path='/login/padre'
                        element={<InicioPadre/>}
                    />
                    <Route
                        path='/registro/Alum'
                        element={<RegistroAlum/>}
                    />
                    <Route
                        path='/registro/profe'
                        element={<RegistroProfe/>}
                    />
                    <Route
                        path='/Configuracion/Alum'
                        element={<Confi/>}
                    />
                    <Route
                        path='/menu/Examen'
                        element={<MenuEx/>}
                    />
                    <Route
                        path='/menu/Ejer'
                        element={<MenuEj/>}
                    />
                    <Route
                        path='/Examen'
                        element={<Examen/>}
                    />
                    <Route
                        path='/Inicio_Alum'
                        element={<PagInicioA/>}
                    />
                    <Route
                        path='/menu_Lec'
                        element={<InicioLec/>}
                    />
                    <Route
                        path='/Leccion_nom'
                        element={<FormatoLeccion/>}
                    />
                    <Route
                        path='/Leccion_1'
                        element={<Leccion1/>}
                    />

                   </Routes>
          </Router>
      </>
  );
}

function clicksito() {
    console.log("boton click");
}

export default App;
