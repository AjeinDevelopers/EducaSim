import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import multiplicacion2 from '../../../../assets/common/multiplicacion2.png';
import multiplicacion_ej2 from '../../../../assets/common/multiplicacion_ej2.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import Link from '../../../../componentes/multiboton/link.jsx';


export default function Leccion2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={multiplicacion2} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 1</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Multiplicaciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>Una multiplicación es una operación matemática que consiste en encontrar el resultado de multiplicar una cifra por otra.<br></br>
                                    Términos de la multiplicación: <br></br><br></br>
                                    Factores: Los factores son los números que se multiplican. <br></br>
                                    Producto: El producto es el resultado de la multiplicación.<br></br>
                                    Multiplicando: El multiplicando es el factor que se encuentra arriba en la multiplicación. <br></br>
                                    Multiplicador: El multiplicador es el factor que se encuentra debajo del multiplicando.<br></br>
                                    Normalmente el multiplicando es mayor que el multiplicador.<br></br><br></br>
                                    Pasos a seguir:<br></br>
                                    1.	Multiplicar las unidades del multiplicador por el multiplicando y el resultado escribirlo en la fila de abajo. <br></br>
                                    2x4=8, escribimos el 8, 2x7=14, escribimos el 4 y llevamos 1, 2x5=10 + 1=11, escribimos 1 y llevamos 1, 2x8=16 + 1=17, escribimos 7 y llevamos 1, 2x2=4 + 1= 5.<br></br><br></br>
                                    2.	Multiplicar las decenas del multiplicador por el multiplicando y el resultado escribirlo en la fila de abajo, pero desplazado una posición a la izquierda. <br></br>
                                    3x4= 12, escribimos 2 y llevamos 1, 3x7=21 + 1=22, escribimos 2 y llevamos 2, 3x5=15 + 2=17, escribimos 7 y llevamos 1, 3x8=24 + 1=25, escribimos 5 y llevamos 2, 3x2=6 + 2 = 8.<br></br><br></br>
                                    3.	Multiplicar las centenas del multiplicador por el multiplicando y el resultado escribirlo en la fila de abajo, pero desplazado dos posiciones a la izquierda. <br></br>
                                    4x4=16, escribimos 6 y llevamos 1, 4x7= 28 + 1= 29, escribimos 9 y llevamos 2, 4x5=20 + 2 = 22, escribimos 2 y llevamos 2, 4x8 = 32 + 2 = 34, escribimos 4 y llevamos 3, 4x2 = 8 + 3 = 11.<br></br><br></br>
                                    4.	Multiplicar las milésimas del multiplicador por el multiplicando y el resultado escribirlo en la fila de abajo, pero desplazado tres posiciones a la izquierda.<br></br>
                                    5x4 = 20, escribimos 0 y llevamos 2, 5x7=35 + 2 = 37, escribimos 7 y llevamos 3,     5x5=25 + 3 = 28, escribimos 8 y llevamos 2, 5x8=40 + 2 = 42, escribimos 2 y llevamos 4, 5x2=10 + 4 = 14.<br></br>

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={multiplicacion_ej2} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>5.	Sumar los productos y finalmente obtenemos el resultado.</t5>
                            
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