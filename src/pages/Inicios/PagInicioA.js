import HeaderApp from "../../modelos/header/HeaderApp";
export default function PagInicioA(){
    return(
        <>
        <HeaderApp/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">¡Hola!</h2>
            <div style={{display:"flex", width:"1376px", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px"}}>

            </div>
        </div>
        
        </>

    )

}