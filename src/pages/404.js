import { Link } from "react-router-dom";
import React from "react";


export default function NotFound (){
    return(
        <>
            <h1>404</h1>
            <h2>Not found</h2>
            <Link to={"/"}><t5>Regresar a inicio</t5></Link>
        </>
    )
}