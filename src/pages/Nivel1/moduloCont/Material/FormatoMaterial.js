import HeaderProfesor from "../../../../modelos/header/HeaderProfesor";
export default function FormatoMaterial(){
    return(
        <>
        <HeaderProfesor/>
        <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:" var(--XS, 32px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Titulo del Material</h2>
                <div style={{justifyContent:"center", gap:" var(--S, 36px)"}}>
                    <h3>Grado: </h3><t5>grado</t5>
                </div>
            </div>

        </div>

        </>
    )

}