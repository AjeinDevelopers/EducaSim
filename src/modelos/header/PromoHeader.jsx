import React from 'react';
import './Header.css';
import Boton from '../../componentes/boton/boton';
import { Link, NavLink } from "react-router-dom";

export default function PromoHeader() {
  return (
    <header>
        <Link to="/"><h4 className={"secondary brand"}>EducaSim</h4></Link>
        <nav className={"link-container"}>
          <NavLink activeClassName = {"activeStyle"} to="/"><t6>Inicio</t6></NavLink>
          <NavLink activeClassName = {"activeStyle"} to='/nosotros'><t6>Sobre Nosotros</t6></NavLink>
        </nav>
        <Boton estilo={"small secondary"} text={"Iniciar Sesión"} showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} handleClick={click}/>
    </header>
  );
}

function click(){
    
}