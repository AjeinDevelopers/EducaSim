import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import foco from '../../../PromoPage/imagenes/foco.jpg';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import librito from '../../../../assets/common/librito.jpg';

export default function FormatoLeccion(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={librito} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Titulo de Articulo</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>Grado</t5>
                            <h5 className='primary brand'>  Materia:</h5><t5>Materia</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>
                                <t5>Lorem ipsum dolor sit amet consectetur. Massa in sed facilisis lectus massa tortor quis. Sit ipsum facilisis diam posuere eu sed. Velit morbi rutrum leo egestas. Risus neque iaculis sed morbi penatibus eu nisi nisi a. Accumsan vitae eget est pharetra libero sed gravida eleifend id. Eu tempor amet erat volutpat risus leo. Pretium nec non cursus pharetra velit congue. Odio egestas in fermentum lectus massa aliquet quis gravida tempus. Risus nec tellus potenti vulputate dictum feugiat neque adipiscing. Vestibulum urna luctus interdum tortor porttitor faucibus. Pulvinar varius eget luctus leo eget eu diam.</t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={foco} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>Lorem ipsum dolor sit amet consectetur. Massa in sed facilisis lectus massa tortor quis. Sit ipsum facilisis diam posuere eu sed. Velit morbi rutrum leo egestas. Risus neque iaculis sed morbi penatibus eu nisi nisi a. Accumsan vitae eget est pharetra libero sed gravida eleifend id. Eu tempor amet erat volutpat risus leo.</t5>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}