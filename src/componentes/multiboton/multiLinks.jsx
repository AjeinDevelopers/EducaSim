import React from 'react';
import './multiLinks.css';
import Link from './link.jsx';

/*
*
* Propiedades Multi Links
*
* show1: Booleano que indica si se muestra el link 1
* show2: Booleano que indica si se muestra el link 2
* show3: Booleano que indica si se muestra el link 3
*
* text1: Texto del link 1
* text2: Texto del link 2
* text3: Texto del link 3
*
* icon1: Icono del link 1
* icon2: Icono del link 2
* icon3: Icono del link 3
*
* showIcon1: Booleano que indica si se muestra el icono 1
* showIcon2: Booleano que indica si se muestra el icono 2
* showIcon3: Booleano que indica si se muestra el icono 3
*
* to1: Ruta del link 1
* to2: Ruta del link 2
* to3: Ruta del link 3
*
* */

export default function MultiLinks(props){
    return(
        <nav className={"multi-links-container"}>
            {props.show1 && <Link text={props.text1} showIcon1={props.showIcon1} icon1={props.icon1} toLink = {props.to1}/>}
            {props.show2 && <Link text={props.text2} showIcon2={props.showIcon2} icon2={props.icon1} toLink = {props.to2}/>}
            {props.show3 && <Link text={props.text3} showIcon3={props.showIcon3} icon3={props.icon1} toLink = {props.to3}/>}
        </nav>
    )
}