import { Link } from "react-router-dom";
import React from "react";
import PromoHeader from "../modelos/header/PromoHeader.jsx";


export default function NotFound (){
    return(
        <>
            <PromoHeader />
            <h1>404</h1>
            <h2>Not found</h2>
            <Link to={"/"}><t5>Regresar a inicio</t5></Link>
        </>
    )
}