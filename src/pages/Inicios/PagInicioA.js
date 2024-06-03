import HeaderApp from "../../modelos/header/HeaderApp";
import BarsChart from './BarsChart';
export default function PagInicioA(){
    return(
        <>
        <HeaderApp/>
        <div style={{display:"flex", width:"1440px", padding:"var(--M, 48px) var(--XS, 32px)", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)"}}>
            <h2 className="secondary brand">¡Hola!</h2>
            <div style={{display:"flex", width:"100%", flexDirection:"column", alignItems:"flex-start", gap:"var(--XXXS, 16px"}}>

            </div>
        </div>
        <div>
            <p className="m-2"><b>Ejemplo</b> Grafica de barras</p>
            <div  style={{width:"450px", height:"250px"}}>
                <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                    <BarsChart/>
                </div>

            </div>
        </div>
        </>

    )

}