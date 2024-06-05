import React from 'react';
import './Header.css';
import Boton from '../../componentes/boton/boton';
import { Link, NavLink } from "react-router-dom";

export default function HeaderApp() {
  return (
    <header>
        <Link to="/"><h4 className={"secondary brand"}>EducaSim</h4></Link>
        <nav className={"link-container"}>
          <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to="/" ><t6>Inicio</t6></NavLink>
          <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} activeClassName = {"activeStyle"} to='/nosotros'><t6>Sobre Nosotros</t6></NavLink>
          <NavLink to="/login/alumno"><Boton size = {"small"} Style={"secondary"} text={"Iniciar Sesión"} showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"}/></NavLink>
        </nav>
        
    </header>
  );
}