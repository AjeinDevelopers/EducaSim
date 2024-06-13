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
import MenuMaterial from './pages/Nivel1/moduloCont/Material/MenuMaterial.js';

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
import Leccion9 from './pages/Nivel1/moduloCont/Lecciones/Leccion9.js';
import Leccion10 from './pages/Nivel1/moduloCont/Lecciones/Leccion10.js';
import Leccion11 from './pages/Nivel1/moduloCont/Lecciones/Leccion11.js';
import Leccion12 from './pages/Nivel1/moduloCont/Lecciones/Leccion12.js';
import Leccion13 from './pages/Nivel1/moduloCont/Lecciones/Leccion13.js';
import Leccion14 from './pages/Nivel1/moduloCont/Lecciones/Leccion14.js';
import Leccion15 from './pages/Nivel1/moduloCont/Lecciones/Leccion15.js';
import Leccion16 from './pages/Nivel1/moduloCont/Lecciones/Leccion16.js';
import Leccion17 from './pages/Nivel1/moduloCont/Lecciones/Leccion17.js';
import Leccion18 from './pages/Nivel1/moduloCont/Lecciones/Leccion18.js';
import Leccion19 from './pages/Nivel1/moduloCont/Lecciones/Leccion19.js';
import Leccion20 from './pages/Nivel1/moduloCont/Lecciones/Leccion20.js';
import Leccion21 from './pages/Nivel1/moduloCont/Lecciones/Leccion21.js';

import Ejercicio1 from './pages/Nivel1/moduloP/Ejercicios/Ejercicio1.js';

import Leccion1N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion1N2.js';
import Leccion2N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion2N2.js';
import Leccion3N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion3N2.js';
import Leccion4N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion4N2.js';
import Leccion5N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion5N2.js';
import Leccion6N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion6N2.js';
import Leccion7N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion7N2.js';
import Leccion8N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion8N2.js';
import Leccion9N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion9N2.js';
import Leccion10N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion10N2.js';
import Leccion11N2 from './pages/Nivel2/moduloCont/Lecciones/Leccion11N2.js';

import Ejercicio1N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio1N2.js';
import Ejercicio2N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio2N2.js';
import Ejercicio3N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio3N2.js';
import Ejercicio4N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio4N2.js';
import Ejercicio5N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio5N2.js';
import Ejercicio6N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio6N2.js';
import Ejercicio7N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio7N2.js';
import Ejercicio8N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio8N2.js';
import Ejercicio9N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio9N2.js';
import Ejercicio10N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio10N2.js';
import Ejercicio11N2 from './pages/Nivel2/moduloP/Ejercicios/Ejercicio11N2.js';


import Clases from './pages/moduloClases/Clases.js';
import Administrar from './pages/moduloClases/Administrar.js';
import CrucigramaApp from './pages/Nivel2/moduloP/Juegos/CrucigramaApp.js';
import Sopa from './pages/Nivel2/moduloP/Juegos/Sopa.js';
import MaterialP1 from './pages/Nivel1/moduloCont/Material/Material1/MaterialP1.js';
import MaterialP2 from './pages/Nivel1/moduloCont/Material/Material1/MaterialP2.js';
import Memo from './pages/Nivel2/moduloP/Juegos/Memo.js';
import MaterialP3 from './pages/Nivel1/moduloCont/Material/Material1/MaterialP3.js';
import MaterialP4 from './pages/Nivel1/moduloCont/Material/Material1/MaterialP4.js';
import CrucigramaApp1 from './pages/Nivel1/moduloP/Juegos1/CrucigramaApp1.js';
import Memorama1 from './pages/Nivel1/moduloP/Juegos1/Memorama1.js';
import Ejercicio2 from './pages/Nivel1/moduloP/Ejercicios/Ejercicio2.js';
import Ejercicio3 from './pages/Nivel1/moduloP/Ejercicios/Ejercicio3.js';
import Ejercicio4 from './pages/Nivel1/moduloP/Ejercicios/Ejercicio4.js';


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
                        path='/Material_num'
                        element={<FormatoMaterial/>}
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
                        path='/Clases'
                        element={<Clases/>}
                    />
                    <Route
                        path='/NuevaClase'
                        element={<NewClase/>}
                    />
                    <Route
                        path='/menu/Material'
                        element={<MenuMaterial/>}
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


                    <Route
                        path='/Leccion/matematicas/primero/Numeros1al100'
                        element={<Leccion1N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/SumaRestaBasica'
                        element={<Leccion2N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/FigurasGeometricasBasicas'
                        element={<Leccion3N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/SumaAvanzada'
                        element={<Leccion4N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/RestaAvanzada'
                        element={<Leccion5N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/MultiplicacionBasica'
                        element={<Leccion6N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/OpcFraccionesBasicas'
                        element={<Leccion7N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/FigurasGeométricas2D'
                        element={<Leccion8N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/DivisionBasica'
                        element={<Leccion9N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/MultiplicacionesNivel2'
                        element={<Leccion10N2/>}

                    />
                    <Route
                        path='/Leccion/matematicas/primero/PerimetroyArea'
                        element={<Leccion11N2/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/Numeros1al100'
                        element={<Ejercicio1N2/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/SumaRestaBasica'
                        element={<Ejercicio2N2/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/FigurasGeometricasBasicas'
                        element={<Ejercicio3N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/SumaResta3Digitos'
                        element={<Ejercicio4N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/IntroMultiplic'
                        element={<Ejercicio5N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/FraccionesBasic'
                        element={<Ejercicio6N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/FigurasGeom2D'
                        element={<Ejercicio7N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/Multiplicacion3Digitos'
                        element={<Ejercicio8N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/DivisionBasic'
                        element={<Ejercicio9N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/FraccionesBasic2'
                        element={<Ejercicio10N2/>}
                    />
                    <Route
                        path='/Ejercicio/matematicas/primero/PerimetroArea'
                        element={<Ejercicio11N2/>}
                    />

                    <Route
                        path='/Leccion/matematicas/cuarto/angulos'
                        element={<Leccion9/>}

                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/rectas'
                        element={<Leccion10/>}

                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/areas'
                        element={<Leccion11/>}

                    />
                    <Route
                        path='/Leccion/matematicas/cuarto/perimetros'
                        element={<Leccion12/>}

                    />
                    <Route
                        path='/Leccion/matematicas/quinto/decimales'
                        element={<Leccion13/>}

                    />
                    <Route
                        path='/Leccion/matematicas/quinto/proporciones'
                        element={<Leccion14/>}

                    />
                    <Route
                        path='/Leccion/matematicas/quinto/porcentajes'
                        element={<Leccion15/>}

                    />
                    <Route
                        path='/Leccion/matematicas/quinto/volumenes'
                        element={<Leccion16/>}

                    />
                    <Route
                        path='/Leccion/matematicas/quinto/coordenadas'
                        element={<Leccion17/>}

                    />
                    <Route
                        path='/Leccion/matematicas/sexto/graficas'
                        element={<Leccion18/>}

                    />
                    <Route
                        path='/Leccion/matematicas/sexto/ecuaciones'
                        element={<Leccion19/>}

                    />
                    <Route
                        path='/Leccion/matematicas/sexto/proporcionalidad'
                        element={<Leccion20/>}

                    />
                    <Route
                        path='/Leccion/matematicas/sexto/porcentajes'
                        element={<Leccion21/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/ejemplo/ejercicio'
                        element={<Ejercicio/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/cuarto/m_d'
                        element={<Ejercicio1/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/cuarto/FyOB'
                        element={<Ejercicio2/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/cuarto/FyD'
                        element={<Ejercicio3/>}

                    />
                    <Route
                        path='/Ejercicio/matematicas/cuarto/AyL'
                        element={<Ejercicio4/>}

                    />
                    <Route
                      path='/Administrar'
                      element={<Administrar/>}
                    />
                    <Route
                      path='/Crucigrama/PF'
                      element={<CrucigramaApp/>}
                    />
                    <Route
                      path='/Crucigrama/SF'
                      element={<CrucigramaApp1/>}
                    />
                    <Route
                      path='/Memorama/SF'
                      element={<Memorama1/>}
                    />
                    <Route
                      path='/SopaLetras'
                      element={<Sopa/>}
                    />
                   
                   <Route
                      path='/Material/Primero/1'
                      element={<MaterialP1/>}
                    />
                    <Route
                      path='/Material/Primero/2'
                      element={<MaterialP2/>}
                    />
                    <Route
                        path='/Material/Primero/3'
                        element={<MaterialP3/>}
                    />
                    <Route
                        path='/Material/Primero/4'
                        element={<MaterialP4/>}
                    />
                    <Route
                      path='/Memorama/PF'
                      element={<Memo/>}
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
