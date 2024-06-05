import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
import multiplicacion from '../../../../assets/common/multiplicacion.png';
import multiplicacion_ej from '../../../../assets/common/multiplicacion_ej.png';


export default function Leccion1(){ 
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={multiplicacion} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion1</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>3°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Multiplicaciones</t5>
                        </div>
                    </div>    

                        <div style={{display:"flex", padding:"var(--XXXS, 16px)", alignItems:"center", gap:"var(--US, 12px)"}}>
                        <Boton size={"small"} Style={"secondary"} text={"Volver a Lecciones"} showIcon1={true}
                           icon1={"fa-solid fa-reply fa-fw"}  link={true} to='/menu/Lec'/>

                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>
                                <t5>Una multiplicación es una operación matemática que consiste en encontrar el resultado de multiplicar una cifra por otra.<br></br>
                                    Términos de la multiplicación: <br></br>
                                    Factores: Los factores son los números que se multiplican. <br></br>
                                    Producto: El producto es el resultado de la multiplicación.<br></br>
                                    Multiplicando: El multiplicando es el factor que se encuentra arriba en la multiplicación. <br></br>
                                    Multiplicador: El multiplicador es el factor que se encuentra debajo del multiplicando.<br></br>
                                    Normalmente el multiplicando es mayor que el multiplicador.<br></br><br></br>
                                    Pasos a seguir:<br></br>
                                    1.	Multiplicar las unidades del multiplicador por el multiplicando y el resultado escribirlo en la fila de abajo. <br></br>Si multiplicamos 781 x 95, lo primero que hay que hacer es multiplicar por 5, que son las unidades de 95, por cada una de las cifras del multiplicando de derecha a izquierda. 5x1=5, escribimos el 5, 5x8=40, escribimos el 0 y llevamos 4, después 5x7=35 y sumamos las 4 decenas sobrantes, lo cual da 39 y poner el resultado, 3905, en la fila de abajo, como muestra la imagen.<br></br>
                                    2.	Multiplicar las decenas del multiplicador por el multiplicando y el resultado escribirlo en la fila de abajo, pero desplazado una posición a la izquierda. <br></br>Seguimos con el ejemplo. Ahora multiplicamos el 9, ya que son las decenas del multiplicador 95, por el multiplicando 781. 9x1= 9, lo escribimos, 9x8=72, escribimos el 2 y llevamos 7, 9x7=63 + 7 = 70. El resultado 7029 habrá que escribirlo debajo de 3905 pero desplazándolo una posición hacia la izquierda.<br></br> 
                                    3.Sumar los productos <br></br>
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={multiplicacion_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>Si el multiplicador es de tres cifras, el resultado de la multiplicación de las centenas se escribirá desplazado dos posiciones hacia la izquierda.</t5>

                        </div>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}