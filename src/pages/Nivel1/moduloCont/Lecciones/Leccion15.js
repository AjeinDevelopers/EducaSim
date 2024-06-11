import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import porcentajes from '../../../../assets/common/porcentajes.png';
import porcentajes_ej from '../../../../assets/common/porcentajes_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion15(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={porcentajes} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion3</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>5°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Porcentajes</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Se llama porcentaje a la expresión de una cantidad determinada como una fracción de cien partes iguales. <br></br>
                                Dicho más fácilmente, el porcentaje es la relación de proporcionalidad entre dos unidades o entre una unidad y un conjunto de ellas, expresado en términos de x por cada 100 unidades, es decir, de tanto por ciento (literalmente: tanto por cada ciento o cada centena). <br></br>
                                Convencionalmente, el porcentaje se expresa con el signo %, acompañando a la cifra del porcentaje: 25 % (un cuarto), 50 % (la mitad) o 100 % (todo). <br></br>
                                Por lo tanto, con este tipo de expresiones matemáticas se puede indicar cuánto representa una cifra de otra o del total de un conjunto de elementos.<br></br><br></br>
                                Los porcentajes son sumamente útiles para expresar proporciones y comparar unas fracciones con otras. Por esa razón se utilizan a menudo en diferentes disciplinas, como la estadística, la demografía y la ecología, entre muchas otras. <br></br>
                                De hecho, su origen práctico en Occidente data del siglo XV, como una herramienta para calcular los impuestos que correspondían a la corona, ya que es mucho más simple y práctico establecer porcentajes que operar con cifras fraccionarias.
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={porcentajes_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Por ejemplo:<br></br>
                            1 / 1 equivale a 100 / 100, es decir, al 100 % del total.<br></br>
                            1 / 10 equivale a 10 / 100, es decir, al 10 % del total.<br></br>
                            1 / 100 equivale a 0,1 / 100, es decir, al 1 % del total.<br></br>
                            1/2 equivale al 50 %.<br></br>
                            1/4 equivale al 25 %.<br></br>
                            2/3 equivale al 66,6 %.<br></br><br></br>

                            Una forma, de calcular porcentajes es por medio de la regla 3.
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