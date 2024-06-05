import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import fracciones from '../../../../assets/common/fracciones.png';
import fracciones4_ej from '../../../../assets/common/fracciones4_ej.png';

export default function Leccion2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={fracciones} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion7</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>4°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Fracciones</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Decimales y su relación con fracciones:<br></br><br></br>
                                Un número decimal es aquel que tiene una parte entera y otra parte decimal, ambas partes separadas por un punto o una coma. El número decimal es una forma de escribir una fracción.<br></br>
                                Si colocáramos en una recta los números enteros, los números decimales estarían en medio de cada una de las cifras. Entre el número 1 y el número 2 encontraríamos el 1,1, 1,2, 1,3, y así sucesivamente.<br></br><br></br>
                                ¿Cómo convertir fracciones a decimales?<br></br>
                                Para convertir una fracción a su escritura decimal se divide el numerador entre el denominador. 

                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={fracciones4_ej} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        </div>
                </div>
            </div>
            <FooterApp/>
            </>
        )

}