import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import proporciones from '../../../../assets/common/proporciones.png';
import proporciones_ej from '../../../../assets/common/proporciones_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion14(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={proporciones} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion2</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>5°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Proporciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Se conoce como proporción a la relación de igualdad que existe entre dos razones, es decir, entre dos comparaciones de dos cantidades determinadas. <br></br>
                                O sea: si a/b es una razón, entonces la igualdad a/b = c/d será una proporción. <br></br><br></br>
                                Ejemplos:<br></br>
                                Si un negocio de venta de pizza tiene una ganancia de $15.000 y un gasto de $5.000, podremos decir que la empresa tiene una razón de 3. Del mismo modo, si a este negocio le cuesta $20 elaborar dos pizzas (20/2 = 10), de modo que elaborar cuatro pizzas costaría $40 (40/4 = 10). Si ambas razones se expresan en una fórmula: 20/2 = 40/4. He allí una proporción.<br></br><br></br>
                                
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={proporciones_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Escala de mapas: <br></br>
                            De seguro ya habrás notado que todos los mapas tienen, en una esquina o en la parte inferior, un par de números separados por dos puntos (:). De acuerdo con el tamaño del mapa, esas cifras varían entre 1:10.000, 1:50.000, 1:100.000 o incluso 1:500.000. Esos números indican la escala del mapa, y una escala no es otra cosa que una proporción. <br></br>
                            Por ejemplo, 1:100.000 quiere decir que el territorio representado por el mapa es, en la realidad, 100.000 veces más grande que el mapa que tienes frente a ti
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