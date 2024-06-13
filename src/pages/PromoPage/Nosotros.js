import React from "react";
import PromoHeader from "../../modelos/header/PromoHeader.jsx";
import Pill from "../../componentes/pill/pill.jsx";
import Avatar from "../../assets/common/Avatar.svg";
import FooterPromo from "../../modelos/footer/FooterPromo.jsx";
import May from '../../assets/common/May.jpeg';
import Carlitos from '../../assets/common/Carlitos.jpeg';
import Mariana from '../../assets/common/Mariana.jpeg';
import Uriel from '../../assets/common/Uriel.jpeg';

export default function Nosotros() {

    return (
        <>
            <PromoHeader />
            <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "column", alignItems: "center", background: "var(--Color-Principales-Claros-Primary, #CAE6FF)" }}>
                <div style={{ flexDirection: "row", alignItems: "center" }}>
                    <h3>Sobre &nbsp;</h3><h3 style={{ color: "var(--color-principal)" }} className={"secondary"}> Nosotros</h3>
                </div>
                <div style={{ flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <t5>En EducaSim, estamos comprometidos con la creación de una plataforma de apoyo integral para estudiantes de primaria. Nuestra misión es proporcionar un entorno educativo en línea que se adapte al método de aprendizaje de cada alumno, ofreciendo una amplia gama de recursos y actividades diseñadas para mejorar su experiencia educativa.</t5>
                </div>
            </div>
            <div style={{ width: "calc(100% - 48px)", flexDirection: "column", padding: "var(--M, 48px) var(--XXS, 24px)", gap: "var(--XS, 32px)" }}>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "left", width: "100%" }}>
                            <h2>Mariana Carrillo</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"CEO"} Style={"secondary"} size={"small"} />
                            <Pill text={"Desarrolladora Front-End"} Style={"secondary"} size={"small"} />
                            <Pill text={"Investigadora"} Style={"secondary"} size={"small"} />
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", textAlign: "justify" }}>
                            <t5>¡Hola! Soy estudiante del CECyT 9 “Juan de Dios Bátiz” me gusta la música, el ajedrez y el voleibol. Además, me fascina la programación y entender cómo funcionan las cosas.</t5>
                        </div>
                    </div>
                    <div style={{ flexDirection: "column", alignItems: "right" }}>
                        <img style={{borderRadius:"168px", width: "320px", height: "320px"}}src={Mariana}></img>
                    </div>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ flexDirection: "column", alignItems: "left" }}>
                        <img style={{borderRadius:"168px", width: "320px", height: "320px"}} src={May}></img>
                    </div>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "right", width: "100%" }}>
                            <h2>Maylin Anzures</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"Desarrolladora Front-End"} Style={"secondary"} size={"small"} />
                            <Pill text={"Investigadora"} Style={"secondary"} size={"small"} />
                            <Pill text={"Diseñadora UI/UX"} Style={"secondary"} size={"small"} />
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
                            <Pill text={"Desarrollador Back-End"} Style={"secondary"} size={"small"} />
                            <Pill text={"Desarrollador Front-End"} Style={"secondary"} size={"small"} />
                            <Pill text={"Diseñador de Bases de Datos"} Style={"secondary"} size={"small"}/>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "left", textAlign: "justify" }}>
                            <t5>Soy alumno del CECyT No. 9 “Juan de Dios Batiz”, me agrada mucho la rama de la informática y el desarrollo de software, así mismo me interesan los siguientes campos: el diseño de paginas web y aplicaciones, los videojuegos y la astronomía.</t5>
                        </div>
                    </div>
                    <div style={{ flexDirection: "column", alignItems: "right" }}>
                        <img style={{borderRadius:"168px", width: "320px", height: "320px"}}src={Uriel}></img>
                    </div>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ flexDirection: "column", alignItems: "left" }}>
                        <img style={{borderRadius:"168px", width: "320px", height: "320px"}} src={Carlitos}></img>
                    </div>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "right", width: "100%" }}>
                            <h2>Carlos Marin</h2>
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", width: "100%", gap: "var(--US, 12px)" }}>
                            <Pill text={"Diseñador UI/UX"} Style={"secondary"} size={"small"} />
                            <Pill text={"Desarrollador Back-End"} Style={"secondary"} size={"small"} />
                            <Pill text={"Diseñador de Bases de Datos"} Style={"secondary"} size={"small"} />
                        </div>
                        <div style={{ flexDirection: "row", alignItems: "right", textAlign: "justify" }}>
                            <t5>Estudiante del CECyT 9 “Juan de Dios Bátiz” que le gusta la programación, la música, los videojuegos. Tengo varios intereses como lo son el desarrollo de videojuegos, el diseño, la informática y la producción musical. </t5>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "calc(100% - 192px)", height: "480px", padding: "var(--XS, 32px) var(--XXS, 24px)", flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)"}}>
                <div style={{ flexDirection: "row", alignItems: "center" }}>
                    <h2 style={{ color: "var(--color-principal)"}} className={"secondary"}>Nuestros&nbsp;</h2><h2 style={{ color: "var(--color-principal)" }} className={"primary"}> Colaboradores</h2>
                </div>
                <div style={{ width: "calc(100% - 192px)", height: "240px", padding: "var(--M, 48px) var(--XXXL, 96px)", flexDirection: "row", gap: "var(--M, 48px)", alignItems: "center" }}>
                    <div style={{ width: "100%", flexDirection: "column", gap: "var(--XS, 32px)" }}>
                        <div style={{ flexDirection: "column", alignItems: "left", width: "100%" }}>
                            <h2>Nancy Toriz Vergara</h2>
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
            <div style={{ width: "calc(100% - 192px)", height: "520px", padding: "var(--XS, 32px) var(--XXS, 24px)", flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)"}}>
                <div style={{ flexDirection: "row", alignItems: "center" }}>
                    <h2 style={{ color: "var(--color-principal)"}} className={"secondary"}>Recursos Utilizados</h2>
                </div>
                <div style={{ width: "calc(100% - 192px)", flexDirection: "column", padding: "var(--XS, 32px) var(--L, 64px)", alignItems: "center", gap: "var(--XS, 32px)"}}>
                    <div style={{ flexDirection: "column", alignItems: "center" }}>
                        <h2>StorySet Illustrations</h2>
                    </div>
                    <div style={{ flexDirection: "column", alignItems: "center", width: "calc(100% - 192px)", gap: "var(--US, 12px)" }}>
                        <Pill text={"Ilustraciones"} Style={"secondary"} />
                    </div>
                    <div style={{ flexDirection: "row", alignItems: "left", textAlign: "center" }}>
                        <t5>Las ilustraciones vectoriales de esta plataforma pertenecen a la librería de ilustraciones de StorySet, las cuales están disponibles en <a href={"https://storyset.com/"}>https://storyset.com/</a></t5>
                    </div>
                </div>
            </div>
            <FooterPromo/>
        </>
    )
}