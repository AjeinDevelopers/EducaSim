import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import divisionBasic1 from '../../../../assets/common/divisionBasic1.png';
import divisionBasic2 from '../../../../assets/common/divisionBasic2.png';
import divisionBasic3 from '../../../../assets/common/divisionBasic3.png';
import divisionBasic4 from '../../../../assets/common/divisionBasic4.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion9N2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={divisionBasic1} alt='divisionbasica'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 9</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>3°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>División Básica</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                La división es una de las cuatro operaciones matemáticas fundamentales junto con la suma, la resta y la multiplicación. Aunque a menudo es considerada como la operación «menos importante» en comparación con las otras tres, la división es esencial para comprender y resolver problemas matemáticos más avanzados. La división en matemáticas es una operación inversa de la multiplicación.
                                <br></br>
                                <br></br>
                                <b>Pasos para efectuar la División.</b>
                                <br></br>
                                <b>1. Cogemos la primera cifra del dividendo. Si esta cifra es más pequeña que el divisor, entonces tendremos que coger otra cifra más del dividendo.</b>
                                <br></br>
                                En nuestro ejemplo la primera cifra del dividendo es 2, pero como es más pequeña que el divisor, que es 5, tenemos que coger otra cifra más: 24

                                </t5>
                                
                                <img style={{display:"flex", width:"30%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={divisionBasic2} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"40%", height:"200px", alignItems:"center", justifyContent:"center"}}src={divisionBasic3} alt='onnanana'/>
                            <t5>
                            <b>2. Buscamos un número que al multiplicarlo por el divisor nos dé como resultado el dividendo. Si no lo hay, buscamos el resultado menor más próximo. El resultado de la multiplicación se resta al dividendo.</b>
                            <br></br>
                            Nosotros tenemos que dividir 24 entre 5.
                            <br></br>
                            Buscamos un número que multiplicado por 5 me dé 24.
                            <br></br>
                            Como no es exacto buscamos el menor más próximo: 4 x 5 = 20. En este caso, 20 es el número más cercano a 24 siendo menor.
                            <br></br>  
                            Por lo tanto escribimos el 4 en el cociente y el 20 se lo restamos a 24: 24 – 20 = 4
                            <br></br>
                            </t5>
                        </div>
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
            	                <b>3. Bajamos la siguiente cifra del dividendo y realizamos de nuevo el paso 2.</b>
                                <br></br>
                                Bajamos la siguiente cifra que es el 3. Con el 4 que ya teníamos y con el 3 que acabamos de bajar obtenemos el 43.
                                <br></br>
                                Ahora dividimos 43 entre 5. Buscamos un número que multiplicado por 5 nos dé 43.
                                <br></br>
                                Como no es exacto buscamos un número que nos dé el número menor más próximo. En este caso 5 x 8 = 40.
                                <br></br>  
                                Escribimos el 8 en el cociente y el 40 lo escribimos debajo del 43 para restarlo: 43 – 40 = 3.
                                <br></br>
                                Como no hay más cifras en el dividendo, hemos terminado la división.
                                </t5>
                                
                                <img style={{display:"flex", width:"40%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={divisionBasic4} alt='nnanana'/>         
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