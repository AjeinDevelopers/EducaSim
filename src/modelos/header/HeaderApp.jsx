import React from 'react';
import './Header.css';
import Boton from '../../componentes/boton/boton';
import { Link, NavLink } from "react-router-dom";

export default function HeaderApp() {
  return (
    <header>
       
        <Link to="/"><h4 className={"secondary brand"}>EducaSim</h4></Link>
        
    </header>
  );
}

function click(){
    
}