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
import MenuEx from './pages/moduloP/MenuEx.js';
import MenuEj from './pages/moduloP/MenuEj.js';
import Examen from './pages/moduloP/Examen.js';
import PagInicioA from './pages/Inicios/PagInicioA.js';
import React from "react";
import InicioLec from './pages/moduloCont/InicioLec.js';


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
                        path='/login_alumno'
                        element={<InicioAlumn/>}
                  />   
                    <Route
                        path='/login_profesor'
                        element={<InicioProfe/>}
                    />
                    <Route
                        path='/login_padre'
                        element={<InicioPadre/>}
                    />
                    <Route
                        path='/registro_Alum'
                        element={<RegistroAlum/>}
                    />
                    <Route
                        path='/registro_Profe'
                        element={<RegistroProfe/>}
                    />
                    <Route
                        path='/Configuracion_Alum'
                        element={<Confi/>}
                    />
                    <Route
                        path='/menu_Examen'
                        element={<MenuEx/>}
                    />
                    <Route
                        path='/menu_Ejer'
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

                   </Routes>
          </Router>
      </>
  );
}

function clicksito() {
    console.log("boton click");
}

export default App;
