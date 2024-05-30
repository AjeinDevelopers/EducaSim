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
import React from "react";

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
                   </Routes>
          </Router>
      </>
  );
}

function clicksito() {
    console.log("boton click");
}

export default App;
