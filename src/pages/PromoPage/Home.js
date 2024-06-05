import React from "react";
import PromoHeader from "../../modelos/header/PromoHeader.jsx";
import nino from "./imagenes/nino.svg"

const Home = () =>{
    return(
        <>
            <PromoHeader />
            <div style={{display:"flex", width:"1440px", height:"956px", justifyContent:"center", alignItems:"center"}}>
                <div style={{display:"flex", padding:"var(--XXXS, 16px) var(--M, 48px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <div style={{display:"flex", padding:"var(--XXS, 24px) var(--XXXS, 16px)", flexDirection:"column",justifyContent:"center", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
                    <h1 className="primary brand">EducaSim</h1>
                    <h4 className="secondary brand">Educa sin Límites</h4>
                    <div style={{display:"flex", width:"608px", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"var(--XXXS, 16px)"}}>

                    </div>
                    </div>
                </div>
                <img src={nino} alt="nino"/>
            </div>

        
        </>
    )
}

export default Home;