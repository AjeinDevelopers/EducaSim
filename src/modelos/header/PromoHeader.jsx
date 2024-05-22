import React from 'react';
import './Header.css';
import Boton from '../../componentes/boton/boton';
export default function PromoHeader() {
  return (
    <header>
        <h4 className={"secondary brand"}>EducaSim</h4>
        <div className={"link-container"}>
            <t6><a>Inicio</a></t6>
            <t6><a>Sobre Nosotros</a></t6>
        </div>
        <Boton estilo={"small secondary"} text={"Botón"} showIcon1={true} icon1={"fa-solid fa-right-to-bracket fa-fw"}
               showIcon2={true} icon2={"fa-solid fa-right-to-bracket fa-fw"} handleClick={click}/>
    </header>
  );
}

function click(){

}