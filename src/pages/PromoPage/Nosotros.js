import React from "react";
import PromoHeader from "../../modelos/header/PromoHeader.jsx";
import Pill from "../../componentes/pill/pill.jsx";
import Avatar from "../../assets/page_sobreNosotros/Avatar.svg";

export default function Nosotros() {

    return (
        <>
            <PromoHeader />
            <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "column", alignItems: "center", background: "var(--Color-Principales-Claros-Primary, #CAE6FF)" }}>
                <div style={{ flexDirection: "row", alignItems: "center" }}>
                    <h3>Sobre</h3><h3 style={{ color: "var(--color-principal)" }} className={"secondary"}> Nosotros</h3>
                </div>
                <div style={{ flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <t5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</t5>
                </div>
            </div>
            <div style={{ width: "calc(100% - 48px)", flexDirection: "column", padding: "var(--M, 48px) var(--XXS, 24px)", gap: "var(--XS, 32px)" }}>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "left", width: "100%" }}>
                            <h2>Mariana Carrillo</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"CEO"} Style={"secondary"} />
                            <Pill text={"Desarrolladora Back-End"} Style={"secondary"} />
                            <Pill text={"Diseñadora de Bases de Datos"} Style={"secondary"} />
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", textAlign: "justify" }}>
                            <t5>¡Hola! Soy estudiante del CECyT 9 “Juan de Dios Bátiz” me gusta la música, el ajedrez y el voleibol. Además, me fascina la programación y entender cómo funcionan las cosas.</t5>
                        </div>
                    </div>
                    <div style={{ flexDirection: "column", alignItems: "right" }}>
                        <img src={Avatar}></img>
                    </div>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ flexDirection: "column", alignItems: "left" }}>
                        <img src={Avatar}></img>
                    </div>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "right", width: "100%" }}>
                            <h2>Maylin Anzures</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"Desarrolladora Back-End"} Style={"secondary"} />
                            <Pill text={"Investigadora"} Style={"secondary"} />
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", textAlign: "justify" }}>
                            <t5>Mucho gusto. Soy alumna del CECyT No. 9 “Juan de Dios Batiz”, disfruto de aprender de cualquier tema de interés especialmente de ciencias, me gusta mucho leer, la música y  la programación. </t5>
                        </div>
                    </div>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "left", width: "100%" }}>
                            <h2>Uriel Cabañas</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"Desarrolladora Back-End"} Style={"secondary"} />
                            <Pill text={"Desarrolladora Front-End"} Style={"secondary"} />
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", textAlign: "justify" }}>
                            <t5>Soy alumno del CECyT No. 9 “Juan de Dios Batiz”, me agrada mucho la rama de la informática y el desarrollo de software, así mismo me interesan los siguientes campos: el diseño de paginas web y aplicaciones, los videojuegos y la astronomía.</t5>
                        </div>
                    </div>
                    <div style={{ flexDirection: "column", alignItems: "right" }}>
                        <img src={Avatar}></img>
                    </div>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ flexDirection: "column", alignItems: "left" }}>
                        <img src={Avatar}></img>
                    </div>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "right", width: "100%" }}>
                            <h2>Carlos Marin</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"Diseñador UI/UX"} Style={"secondary"} />
                            <Pill text={"Desarrolladora Back-End"} Style={"secondary"} />
                            <Pill text={"Diseñador de Bases de Datos"} Style={"secondary"} />
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", textAlign: "justify" }}>
                            <t5>Estudiante del CECyT 9 “Juan de Dios Bátiz” que le gusta la programación, la música, los videojuegos. Tengo varios intereses como lo son el desarrollo de videojuegos, el diseño, la informática y la producción musical. </t5>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--XS, 32px) var(--XXS, 24px)", flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)"}}>
                <div style={{ flexDirection: "row", alignItems: "center" }}>
                    <h2 style={{ color: "var(--color-principal)"}} className={"secondary"}>Nuestros</h2><h2 style={{ color: "var(--color-principal)" }} className={"primary"}> Colaboradores</h2>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "left", width: "100%" }}>
                            <h2>Nancy Toriz Vega</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"Investigacion"} Style={"secondary"} size={"small"}/>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", textAlign: "justify" }}>
                            <t5>Mamá de una integrante del equipo (Anzures Toriz Valeria Maylin), proporcionó información de utilidad para el desarrollo de todo el contenido del proyecto.</t5>
                        </div>
                    </div>
                    <div style={{ flexDirection: "column", alignItems: "right" }}>
                        <img src={Avatar}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
