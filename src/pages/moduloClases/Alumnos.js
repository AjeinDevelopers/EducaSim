import HeaderProfesor from '../../modelos/header/HeaderProfesor';
import AlumnoLista from '../../componentes/AlumnoLista/AlumnoLista.jsx';


export default function Alumnos(){
    return(
    <>
        <HeaderProfesor/>
        <div style={{display: "flex", width: "1440px", padding: "var(--M, 48px) var(--XS, 32px)", flexDirection: "column", alignItems: "center", gap: "var(--M, 48px)"}}>
        <h3 className='secondary brand'>Clase "Nombre"</h3>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--XS, 32px)" ,alignSelf: "stretch"}}>
        <h3>Rendiemiento Malo</h3>
        <AlumnoLista/>
        <AlumnoLista/>
        <AlumnoLista/>
        <h3>Rendiemiento Bueno</h3>
        <AlumnoLista/>
        <AlumnoLista/>
        <AlumnoLista/>
        <h3>Rendimiento Excelente</h3>
        <AlumnoLista/>
        <AlumnoLista/>
        <AlumnoLista/>

       </div>

        </div>
    
    
    </>)
}