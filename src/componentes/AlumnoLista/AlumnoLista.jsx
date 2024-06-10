import React from "react";
import {Link} from "react-router-dom";
import avatar from "../../assets/common/Avatar.svg";
import "./AlumnoLista.css";

export default function AlumnoLista(props) {
    return(
        <div id={"alum-lista-container"}>
            <div style={{justifyContent: "center", gap: "var(--XXXS, 16px)", alignItems: "center"}}>
                <div><img src={avatar}  alt={avatar}/></div>
                <t5>{props.nombre}</t5>
            </div>
            <Link to={props.to}>
                Ver Progreso
            </Link>
        </div>
    );
}