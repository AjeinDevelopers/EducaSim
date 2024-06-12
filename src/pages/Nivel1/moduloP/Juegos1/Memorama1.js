import Memorama from "../../../../componentes/Memo/Memorama"
import HeaderAlumno from "../../../../modelos/header/HeaderAlumno"
import FooterApp from "../../../../modelos/footer/FooterApp"

export default function Memorama1(){
    return(
        <>
        <HeaderAlumno/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 12px) var(--XS, 32px)", flexDirection:"column", alignItems:"flex-start", gap:"var(--XS, 32px)"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XXS, 24px)", alignSelf:"stretch"}}>
                <h2 className="secondary brand">Memorama 1er año</h2>
                
               </div></div>
        
        <Memorama/>
        <FooterApp/>
        </>
    )
}