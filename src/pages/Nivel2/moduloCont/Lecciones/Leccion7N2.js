import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import opcFraccBasic1 from '../../../../assets/common/opcFraccBasic1.png';
import opcFraccBasic2 from '../../../../assets/common/opcFraccBasic2.png';
import opcFraccBasic3 from '../../../../assets/common/opcFraccBasic3.png';
import opcFraccBasic4 from '../../../../assets/common/opcFraccBasic4.png';
import opcFraccBasic5 from '../../../../assets/common/opcFraccBasic5.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion7N2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={opcFraccBasic1} alt='opcFracciones'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 7</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>2°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Fracciones Básicas</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
            	                <b>Suma y resta de fracciones</b>
                                <br></br>
                                Con el mismo denominador: Se suman o se restan los numeradores y se mantiene el denominador.
                                </t5>
                                
                                <img style={{display:"flex", width:"20%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={opcFraccBasic2} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"40%", height:"200px", alignItems:"center", justifyContent:"center"}}src={opcFraccBasic3} alt='onnanana'/>
                            <t5>
                            <b>Con distinto denominador</b>
                            <br></br>
                            En primer lugar se reducen los denominadores a común denominador, y se suman o se restan los numeradores de las fracciones equivalentes obtenidas.
                            <br></br>
                            Se determina el denominador común, que será el mínimo común múltiplo de los denominadores.
                            <br></br>
                            Este denominador, común, se divide por cada uno de los denominadores, multiplicándose el cociente obtenido por el numerador correspondiente.
                            <br></br>  
                            Se suman o se restan los numeradores de las fracciones equivalentes obtenidas.
                            <br></br>
                            <b>El m.c.m. de 4 y 6 es 12. Una manera fácil de encontrarlo es la siguiente: 4 = 2 * 2; 6 = 2* 3</b>

                            </t5>
                        </div>
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
            	                <b>Multiplicación de fracciones</b>
                                <br></br>
                                La multiplicación de dos fracciones es otra fracción que tiene por numerador el producto de los numeradores y por denominador el producto de los denominadores.
                                </t5>
                                
                                <img style={{display:"flex", width:"40%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={opcFraccBasic4} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"40%", height:"200px", alignItems:"center", justifyContent:"center"}}src={opcFraccBasic5} alt='onnanana'/>
                            <t5>
                            <b>División de fracciones</b>
                            <br></br>
                            La división de dos fracciones es otra fracción que tiene por numerador el producto de los extremos y por denominador el producto de los medios.

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