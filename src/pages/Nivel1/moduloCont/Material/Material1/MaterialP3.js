import React from 'react';
import HeaderProfesor from '../../../../../modelos/header/HeaderProfesor';
import Material1_1_1 from '../../../../../assets/common//Material1_1_1.jpg';

export default function MaterialP3() {
    const imprimirPag = (impresion) => {
        var contenido = document.getElementById(impresion).innerHTML;
        var contenidoOriginal = document.body.innerHTML;

        document.body.innerHTML = contenido;
        window.print();
        document.body.innerHTML = contenidoOriginal;
    };

    return (
        <>
            <HeaderProfesor />
            <div style={{display: "flex", padding: "var(--XXS, 24px) var(--L, 64px)", flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)", alignSelf: "stretch"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--XS, 32px)", alignSelf: "stretch"}}>
                    <h2 className="secondary brand">Material Reconocimiento</h2>
                    <div style={{display: "flex", padding: "0px var(--L,64px)", justifyContent: "center", alignItems: "center", gap: "var(--XXXS, 16px)", alignSelf: "stretch"}}>
                        <h5 className="primary brand">Grado:</h5>
                        <t5>1°</t5>
                        <h5 className="primary brand">Tema:</h5>
                        <t5>Identificación medidas </t5>
                    </div>
                </div>
                <div id="impresion">
                    <div style={{display: "flex",width:"100%", height: "100%", padding: "var(--XXXS, 16px)", justifyContent: "center", alignItems: "center", alignSelf: "stretch"}}>
                        <img  style={{width:"772px",height: "1040px"}} src={Material1_1_1} alt="Imagen no disponible"/>
                    </div>
                </div>
                <div>
                    <button onClick={() => imprimirPag('impresion')}>Imprimir</button>
                </div>
            </div>
        </>
    );
}
