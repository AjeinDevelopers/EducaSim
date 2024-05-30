import React from "react";
import PromoHeader from "../../modelos/header/PromoHeader.jsx";

export default function Nosotros (){

    return(
        <>
            <PromoHeader />
            <div style={{width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "column", alignItems: "center", background:"var(--Color-Principales-Claros-Primary, #CAE6FF)"}}>
                <div style={{flexDirection: "row", alignItems: "center"}}>
                    <h3>Sobre</h3><h3 style={{color: "var(--color-principal)"}}  className={"secondary"}> Nosotros</h3>
                </div>
                <div style={{flexDirection: "column", alignItems: "center", textAlign:"center"}}>
                    <t5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</t5>
                </div>
            </div>
            <div style={{width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "column", alignItems: "center"}}>
                <div style={{flexDirection: "column", alignItems: "left", width: "100%"}}>
                    <h2>Mariana Carrillo</h2>
                </div>
            </div>
        </>
    )
}
