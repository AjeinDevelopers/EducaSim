import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import ecuaciones from '../../../../assets/common/ecuaciones.png';
import ecuaciones_ej from '../../../../assets/common/ecuaciones_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion19(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={ecuaciones} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion2</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>6°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Ecuaciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                ¿Qué es una ecuación?<br></br>
                                Una ecuación es una proposición que dos expresiones son iguales. <br></br>Por ejemplo, la expresión 5 + 3 es igual a la expresión 6 + 2 (porque ambas son iguales a 8 ), así que podemos escribir la siguiente ecuación:<br></br>
                                5 + 3 = 6 + 2<br></br><br></br>

                                Ecuaciones algebraicas<br></br>
                                En las ecuaciones se introducen conceptos como “x” o “y” que son letras, pero en este caso son usados para expresar un número que no conocemos y buscamos encontrar su valor.<br></br>
                                Por ejemplo, la ecuación (x + 2 = 6) tiene una variable en ella. Cuando tenemos una ecuación como esta con una variable, la llamamos una ecuación algebraica. Entonces vamos a buscar el valor de esta “x”.<br></br>
                                Como una ecuación es una igualdad, podemos hacer operaciones siempre y cuando sean iguales de ambos lados para no alterar esta igualdad y de esta manera buscamos despejar la “x”.<br></br>
                                x + 2 = 6<br></br>
                                Si en ambos lados restamos un 2, se conserva la iguald<br></br>ad.
                                x + 2 – 2 = 6 – 2<br></br>
                                Entonces obtenemos <br></br>
                                x = 4<br></br>
                                Lo mismo pasa en cualquier ecuación, pero con diferentes operaciones. 

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={ecuaciones_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            En este ejemplo observamos que el término x aparece en ambos lados, por lo cual primero juntaremos todos los términos de x en un lado y los números del otro. Después realizamos las operaciones correspondientes.
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