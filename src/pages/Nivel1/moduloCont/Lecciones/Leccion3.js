import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import division from '../../../../assets/common/division.png';
import division_ej from '../../../../assets/common/division_ej.png';

export default function Leccion3(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={division} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion2</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Divisiones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                División: La división es como repartir cosas en grupos iguales.<br></br><br></br>
                                Pasos a seguir: <br></br>
                                1.	División paso a paso: <br></br>
                                Empezamos dividiendo el primer número del dividendo (9) entre el divisor (23). ¿Cuántas veces el 23 cabe en el 9? No cabe, entonces tomamos un número más del dividendo, ¿Cuántas veces el 23 cabe en el 95? 4, escribimos el 4 en la parte superior, en el cociente, entonces tenemos 4x23=92, 95-92= 3, este 3 es nuestro residuo que será colocado abajo del número 95, entonces bajamos el siguiente número:2, por lo tanto, tenemos 32 y ¿cuántas veces el 23 cabe en el 32? 1, escribimos el 1 en la parte superior, en el cociente, 32 – 23 = 9, este es nuestro residuo, a continuación, bajamos el siguiente 2, ahora tenemos 92, ¿Cuántas veces el 23 cabe en el 92? 4, escribimos el 4 en la parte superior, en el cociente, ahora nuestro residuo es 0 y el resultado 414.

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={division_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}