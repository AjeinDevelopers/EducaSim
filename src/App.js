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
import Examen from './pages/Nivel1/moduloP/Examenes/Examen.js';
import PagInicioA from './pages/Inicios/PagInicioA.js';
import React from "react";
import InicioLec from './pages/Nivel1/moduloCont/InicioLec.js';
import FormatoLeccion from './pages/Nivel1/moduloCont/Lecciones/FormatoLeccion.js';
import Leccion1 from './pages/Nivel1/moduloCont/Lecciones/Leccion1.js';

import FormatoMaterial from './pages/Nivel1/moduloCont/Material/FormatoMaterial.js';
import Ejercicio from './pages/Nivel1/moduloP/Ejercicios/Ejercicio.js';
import Progreso from './pages/Inicios/Progreso.js';
import ProgresoAlumP from './pages/Inicios/ProgresoAlumP.js';
import CuestionarioAjus from './pages/Inicios/CuestionarioAjus.js';
import NewClase from './pages/moduloClases/NewClase.js';
import ConfiP from './pages/CuentaConf/ConfiP.js';
import PagInicioP from './pages/Inicios/PagInicioP.js';
import Leccion2 from './pages/Nivel1/moduloCont/Lecciones/Leccion2.js';
import Leccion3 from './pages/Nivel1/moduloCont/Lecciones/Leccion3.js';
import Leccion4 from './pages/Nivel1/moduloCont/Lecciones/Leccion4.js';
import Leccion5 from './pages/Nivel1/moduloCont/Lecciones/Leccion5.js';
import Leccion6 from './pages/Nivel1/moduloCont/Lecciones/Leccion6.js';
import Leccion7 from './pages/Nivel1/moduloCont/Lecciones/Leccion7.js';
import Leccion8 from './pages/Nivel1/moduloCont/Lecciones/Leccion8.js';



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
                        path='/Configuracion/Profe'
                        element={<ConfiP/>}
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
                        path='/Inicio/Alum'
                        element={<PagInicioA/>}
                    />
                    <Route
                        path='/Inicio/Prof'
                        element={<PagInicioP/>}
                    />
                    <Route
                        path='/menu/Lec'
                        element={<InicioLec/>}
                    />
                    <Route
                        path='/Leccion_nom'
                        element={<FormatoLeccion/>}
                    />
                    <Route
                        path='/Leccion/matematicas/tercero/multiplicaciones'
                        element={<Leccion1/>}
                    />
                    <Route
                        path='/Material_num'
                        element={<FormatoMaterial/>}
                    />
                    <Route
                        path='/Ejercicio_1'
                        element={<Ejercicio/>}
                    />
                    <Route
                        path='/Progreso/Alum'
                        element={<Progreso/>}
                    />
                    <Route
                        path='/Progreso/Prof'
                        element={<ProgresoAlumP/>}
                    />
                    <Route
                        path='/Cuestionario/Ajuste'
                        element={<CuestionarioAjus/>}
                    />
                    <Route
                        path='/NuevaClase'
                        element={<NewClase/>}
                    />
                    <Route    
                        path='/Leccion/matematicas/cuarto/multiplicaciones'
                        element={<Leccion2/>}
                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/divisiones'
                        element={<Leccion3/>}
                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/fracciones/equivalentes'
                        element={<Leccion4/>}
                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/fracciones/suma_resta'
                        element={<Leccion5/>}
                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/fracciones/multiplicacion'
                        element={<Leccion6/>}
                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/fracciones/division'
                        element={<Leccion7/>}
                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/fracciones/decimales'
                        element={<Leccion8/>}

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
