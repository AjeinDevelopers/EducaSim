import React from 'react';
import './Header.css';
import Boton from '../../componentes/boton/boton';
import { Link, NavLink } from "react-router-dom";

export default function PromoHeader() {
    return (
        <header style={{justifyContent: "center"}}>
            <Link to="/"><h4 className={"secondary brand"}>EducaSim</h4></Link>
        </header>
    );
}

function click(){

}