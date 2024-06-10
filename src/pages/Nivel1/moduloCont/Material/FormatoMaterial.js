import HeaderProfesor from "../../../../modelos/header/HeaderProfesor";
import noImg from '../../../../assets/common/noImg.png';
export default function FormatoMaterial(){
    return(
        <>
        <HeaderProfesor/>
        <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:" var(--XS, 32px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Titulo del Material</h2>
                <div style={{display:"flex",padding:"0px var(--L,64px)",justifyContent:"center",alignItems:"center", gap:" var(--XXXS, 16px)", alignSelf:"stretch"}}>
                    <h5 className="primary brand">Grado:</h5><t5>Grado</t5>
                    <h5 className="primary brand">Materia:</h5><t5>Materia</t5>
                </div>
            </div>
            <div style={{display:"flex", height:"100%", padding:"var(--XXXS, 16px)", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}}>
                <img src={noImg} alt="jajaja"/>
            </div>

        </div>

        </>
    )

}