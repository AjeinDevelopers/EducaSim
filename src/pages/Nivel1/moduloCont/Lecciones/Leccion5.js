import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import fracciones from '../../../../assets/common/fracciones.png';
import fracciones1_ej from '../../../../assets/common/fracciones1_ej.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion5(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={fracciones} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion4</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Suma y resta de fracciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Fracciones: Es la expresión de una cantidad dividida entre otra cantidad; es decir que representa un cociente no efectuado de números.<br></br><br></br>
                                Suma y resta de fracciones: <br></br><br></br>
                                Mismo denominador:<br></br> 
                                En las fracciones que vamos a sumar o restar, dejamos el mismo denominador y sumamos o restamos el numerador.<br></br><br></br>
                                Denominadores coprimos (no tienen divisores en común): <br></br>
                                Para calcular la suma o resta de este tipo de fracciones tendremos que multiplicar los denominadores para hallar el denominador de la fracción resultante, y para conseguir el numerador tendríamos que multiplicar el numerador de una de las fracciones por el denominador de la otra y viceversa, y posteriormente, sumar o restar el resultado, dependiendo del tipo de operación que tengamos que realizar.<br></br>
                                Los denominadores son 10 y 3, que son diferentes y no tienen divisores en común, por lo que tendremos que multiplicarlos entre ellos. 10 x 3 = 30, por lo que 30 será el denominador de la fracción resultante.
                                Para calcular el numerador, tendremos que multiplicar 11 x 3 = 33 y 10 x 2 = 20, y sumar los resultados, 33 + 20 = 53, que sería el numerador de la fracción obtenida.

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={fracciones1_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            Denominador que es divisor del otro:<br></br>
                            En estos casos se busca un número que multiplicado por el denominador menor, de como resultado el denominador mayor, entonces solo para esta fracción también multiplicamos el numerador, el de la otra fracción se conserva exactamente igual y se realiza la operación correspondiente.
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