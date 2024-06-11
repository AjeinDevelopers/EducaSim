import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import sumaresta from '../../../../assets/common/sumaresta.png';
import operaBasic from '../../../../assets/common/operaBasic.png';
import opeBasc from '../../../../assets/common/opeBasc.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion2N2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={sumaresta} alt='sumaresta'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 2</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>1°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Suma y Resta simple</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                <b>Suma:</b>
                                <br></br>
                                Llamamos suma a la acción de añadir, juntar o agregar elementos, cuando realizamos esta acción estamos uniendo cantidades o conjuntos y para ello siempre debe haber un mínimo de dos elementos.
                                <br></br>
                                La humanidad ya hacía sumas antes de aprender a escribir o de tener un lenguaje. Se cree que muchas especies de animales también saben sumar cantidades pequeñas.
                                <br></br>
                                <br></br>
                                <b>Cómo hacer sumas sin llevadas</b>
                                <br></br>
                                    •	Colocar los sumandos uno debajo del otro, de manera que coincidan las unidades en la misma columna.
                                    <br></br>
                                    •	Sumar cada columna por separado empezando por las unidades.
                                    <br></br>
                                    •	El resultado de la suma se escribe debajo de cada columna y de la línea de resultado.
                                    <br></br>
                                    <br></br>
                                Vamos a ver un ejemplo. Sumemos 32 + 64
                                <br></br>
                                Ponemos el 32 y debajo el 64, haciendo que coincidan las unidades, es decir, el 2 y el 4.
                                <br></br>
                                Sumamos 2 + 4 = 6 y lo ponemos debajo de la columna de las unidades.
                                <br></br>
                                Sumamos 3 + 6 = 9 y lo ponemos debajo de la columna de las decenas.
                                <br></br>


                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={operaBasic} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"30%", height:"550px", alignItems:"center", justifyContent:"center"}}src={opeBasc} alt='nnanana'/>
                            <t5>
                            <br></br>
                            <b>Resta:</b>
                            <br></br>
                            La resta o sustracción es una operación matemática que consiste en sacar, quitar, reducir o separar algo de un todo. Restar es una de las operaciones básicas de las matemáticas junto a la suma, que es su proceso inverso.
                            <br></br>
                            De una forma más sencilla podríamos decir que cuando restamos estamos eliminando o quitando una cantidad de un conjunto de objetos.
                            <br></br>
                            <br></br>
                            <b>Elementos de la resta</b>
                            <br></br>
                            Minuendo: Es la cantidad de la que partimos. El número al que en la operación aritmética de la resta se le quita otro (el sustraendo) para obtener el resultado o diferencia.
                            <br></br>
                            Sustraendo: Es la cantidad que se va a restar, a quitar. Elúmero que en la operación aritmética de la resta se ha de quitar a otro (el minuendo) para obtener el resultado o diferencia.
                            <br></br>
                            <br></br>
                            <b>Pasos para realizar una resta sin llevada</b>
                            <br></br>
                            Coloca el sustraendo (lo que va a restar) debajo del minuendo (la cantidad de la que partimos) , de forma que coincidan las unidades en la misma columna.
                            <br></br>
                            Coloca el minuendo representado con material separado por columnas. Deja un hueco debajo para el sustraendo.
                            <br></br>
                            Extrae del material las unidades que indica el sustraendo, represéntalo en la resta.
                            <br></br>
                            Extrae del material las decenas, representándolo también en la operación.


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