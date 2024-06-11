import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import p_p from '../../../../assets/common/p_p.png';
import p_p_ej from '../../../../assets/common/p_p_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion20(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={p_p} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion3</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>6°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Proporcionalidad</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Proporcion:<br></br>
                                Es una relación constante entre 2 magnitudes.<br></br><br></br>
                                A continuación, veamos un ejemplo: <br></br><br></br>
                                11 obreros laboran un campo rectangular de 220m de largo y 48m de ancho en 6 días.<br></br>
                                ¿Cuántos obreros serán necesarios para labrar otro campo de 300m de largo por 56m de ancho en 5 días?
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={p_p_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            
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