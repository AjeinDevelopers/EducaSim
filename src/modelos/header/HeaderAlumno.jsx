import React from 'react';
import './Header.css';
import { Link, NavLink } from "react-router-dom";

export default function HeaderApp() {
    return (
        <header>
            <Link to="/"><h4 className={"secondary brand"}>EducaSim</h4></Link>
            <nav className={"link-container"}>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to="/Inicio_Alum" ><t6>Inicio</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/menu_Ejer'><t6>Ejercicios</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/menu_Examen'><t6>Examenes</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/menu_Lec'><t6>Teoria</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to=''><t6>Progreso</t6></NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to='/Configuracion_Alum'><t6>Cuenta</t6></NavLink>
            </nav>
        </header>
    );
}
