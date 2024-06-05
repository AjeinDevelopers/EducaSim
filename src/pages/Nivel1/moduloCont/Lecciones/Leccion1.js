import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import foco from '../../../PromoPage/imagenes/foco.jpg';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import librito from '../../../../assets/common/librito.jpg';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion1(){ 
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={librito} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccionsita 1</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>3°</t5>
                            <h5 className='primary brand'>  Materia:</h5><t5>Multiplicaciones</t5>
                        </div>
                    </div>    
                    <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>
                               <div style={{width:"50%"}}>
                                <t5>Lorem ipsum dolor sit amet consectetur. Massa in sed facilisis lectus massa tortor quis. Sit ipsum facilisis diam posuere eu sed. Velit morbi rutrum leo egestas. Risus neque iaculis sed morbi penatibus eu nisi nisi a. Accumsan vitae eget est pharetra libero sed gravida eleifend id. Eu tempor amet erat volutpat risus leo. Pretium nec non cursus pharetra velit congue. Odio egestas in fermentum lectus massa aliquet quis gravida tempus. Risus nec tellus potenti vulputate dictum feugiat neque adipiscing. Vestibulum urna luctus interdum tortor porttitor faucibus. Pulvinar varius eget luctus leo eget eu diam.</t5>
                                </div>
                                <div style={{width:"50%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                                <img style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={foco} alt='nnanana'/>         
                                </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>Lorem ipsum dolor sit amet consectetur. Massa in sed facilisis lectus massa tortor quis. Sit ipsum facilisis diam posuere eu sed. Velit morbi rutrum leo egestas. Risus neque iaculis sed morbi penatibus eu nisi nisi a. Accumsan vitae eget est pharetra libero sed gravida eleifend id. Eu tempor amet erat volutpat risus leo.</t5>
                            <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                            <img style={{height:"440px", width:"100%", objectFit:"cover" }} src={librito} alt='libro'/>
                            </div>
                            <t5>Lorem ipsum dolor sit amet consectetur. Massa in sed facilisis lectus massa tortor quis. Sit ipsum facilisis diam posuere eu sed. Velit morbi rutrum leo egestas. Risus neque iaculis sed morbi penatibus eu nisi nisi a. Accumsan vitae eget est pharetra libero sed gravida eleifend id. Eu tempor amet erat volutpat risus leo.</t5>
                        </div>
                        <div style={{display:"flex", padding:"var(--XXXS, 16px)", alignItems:"center", gap:"var(--US, 12px)"}}>
                        <Boton size={"small"} Style={"secondary"} text={"Volver a Lecciones"} showIcon1={true}
                           icon1={"fa-solid fa-reply fa-fw"}  link={true} to='/menu_Lec'/>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}