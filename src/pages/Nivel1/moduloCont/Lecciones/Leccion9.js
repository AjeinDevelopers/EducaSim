import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import angulos from '../../../../assets/common/angulos.png';
import angulos_ej from '../../../../assets/common/angulos_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion9(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={angulos} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion8</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Ángulos</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                El ángulo es la porción del plano comprendida entre dos semirrectas (lados) con un origen común llamado vértice. Los ángulos parten de un punto y tienen dos líneas que salen desde ese punto y que generan una apertura representada por un arco. El grado de apertura de esos arcos (y no su extensión) está representado por el ángulo.<br></br><br></br>
                                Ángulo nulo. Es el que mide 0°.<br></br>
                                Ángulo agudo. Es el que mide entre 0° y 90°.<br></br>
                                Ángulo recto. Es el que mide 90°.<br></br>
                                Ángulo obtuso. Es el que mide entre 90° y 180°.<br></br>
                                Ángulo llano. Es el que mide 180º.<br></br>
                                Ángulo cóncavo. Es el que mide más de 180°.<br></br>
                                Ángulo completo. Es el que mide 360°.<br></br>

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={angulos_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Según la relación con otro ángulo:<br></br>
                            Ángulos suplementarios. Son ángulos que suman 180º.<br></br>
                            Ángulos complementarios. Son ángulos que suman 90°.<br></br><br></br>

                            Según su posición:<br></br>
                            Ángulos consecutivos. Son ángulos que comparten un lado y el vértice.<br></br>
                            Ángulos adyacentes. Son ángulos consecutivos y el lado que no comparten forma parte de la misma recta.<br></br>
                            Ángulos opuestos por el vértice. Son ángulos que comparten el vértice, pero ninguno de los lados.<br></br><br></br>
                            Para medir un ángulo se utiliza un instrumento llamado transportador.
                            </t5>
                        </div>
                        <div style={{display:"flex", padding:"var(--XXXS, 16px)", alignItems:"center", gap:"var(--US, 12px)"}}>
                        <NavLink className={''} to='/menu/Lec'><Boton size={"small"}
                         Style={"secondary"} text={"Volver al menu Lecciones"} showIcon2={true} icon2={"fa-solid fa-reply fa-fw"}/></NavLink>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}