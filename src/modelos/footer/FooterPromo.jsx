import React from 'react';
import './footer.css';
import {Link} from "react-router-dom";
import logo from "../../assets/common/Logo_Footer.svg";

export default function FooterPromo() {
    return (
        <footer id={"promo"}>
            <div className={"brand-container"}>
                <img src={logo} alt={"Logo educasim"}/>
                <h2>EducaSim</h2>
            </div>
            <div id={"link-menu"}>
                <div id={"empresa"} className={"footer-links"}>
                    <h4>Empresa</h4>
                    <Link id={"footer"} to={"/"}>Inicio</Link>
                    <Link id={"footer"} to={"/nosotros"}>Nosotros</Link>
                </div>
                <div id={"producto"} className={"footer-links"}>
                    <h4>Producto</h4>
                    <Link id={"footer"} to={""}>Portal Alumnos</Link>
                    <Link id={"footer"} to={""}>Portal Profesores</Link>
                    <Link id={"footer"} to={""}>Portal Padres</Link>
                </div>
                <div id={"contacto"} className={"footer-links"}>
                    <h4>Contacto</h4>
                    <div className={"contacto-container"}>
                        <i className={"fa-solid fa-envelope fa-fw"}/>
                        <a id={"footer"} href={"mailto:carlosmarin08@proton.me"}>E-Mail</a>
                    </div>
                    <div className={"contacto-container"}>
                        <i className={"fa-solid fa-phone fa-fw"}/>
                        <a id={"footer"} href={"tel:5583511107"}>Teléfono</a>
                    </div>
                </div>
            </div>
            <t7 style={{textAlign: "right", width: "100%"}}>© Ajeín Developers 2024</t7>
        </footer>
    )
}