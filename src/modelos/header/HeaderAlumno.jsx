import React from 'react';
import './Header.css';
import { Link, NavLink } from "react-router-dom";

export default function HeaderApp() {
    return (
        <header>
            <Link to="/Inicio/Alum"><h4 className={"secondary brand"}>EducaSim</h4></Link>
            <nav className={"link-container"}>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to="/Inicio/Alum" ><t6>Inicio</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/menu/Ejer'><t6>Ejercicios</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/menu/Examen'><t6>Examenes</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/menu/Lec'><t6>Teoria</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/Progreso/Alum'><t6>Progreso</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/Configuracion/Alum'><t6>Cuenta</t6></NavLink>
            </nav>
        </header>
    );
}
