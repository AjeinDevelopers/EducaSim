import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx';
import numeritos from '../../../../assets/common/numeritos.png';
import numeritos1al100 from '../../../../assets/common/numeritos1al100.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';
export default function Leccion1N2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={numeritos} alt='leccion'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 1</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>1°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Conteo y reconocimiento de números del 0 al 100</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                1 - Uno     2 - Dos	    3 - Tres    4 - Cuatro  5 - Cinco 
                                <br></br>
                                6 - Seis	7 - Siete	8 - Ocho	9 - Nueve   10 - Diez
                                <br></br>
                                11 - Once   12 - Doce   13 - Trece  14 - Catorce    15 - Quince
                                <br></br>
                                16 - Dieciséis  17 - Diecisiete 18 - Dieciocho  19 - Diecinueve 20 - Veinte
                                <br></br>
                                21 - Veintiuno	22 - Veintidós  23 - Veintitrés 24 - Veinticuatro   25 - Veinticinco
                                <br></br>
                                26 - Veintiséis	27 - Veintisiete	28 - Veintiocho	29 - Veintinueve	30 - Treinta
                                <br></br>
                                31 - Treinta y uno	32 - Treinta y dos	33 - Treinta y tres	34 - Treinta y cuatro	35 - Treinta y cinco
                                <br></br>
                                36 - Treinta y seis	37 - Treinta y siete	38 - Treinta y ocho	39 - Treinta y nueve	40 - Cuarenta
                                <br></br>
                                41 - Cuarenta y uno	42 - Cuarenta y dos	43 - Cuarenta y tres	44 - Cuarenta y cuatro	45 - Cuarenta y cinco
                                <br></br>
                                46 - Cuarenta y seis	47 - Cuarenta y siete	48 - Cuarenta y ocho	49 - Cuarenta y nueve	50 - Cincuenta
                                <br></br>
                                51 - Cincuenta y uno	52 - Cincuenta y dos	53 - Cincuenta y tres	54 - Cincuenta y cuatro	55 - Cincuenta y cinco
                                <br></br>
                                56 - Cincuenta y seis	57 - Cincuenta y siete	58 - Cincuenta y ocho	59 - Cincuenta y nueve	60 - Sesenta
                                <br></br>
                                61 - Sesenta y uno	62 - Sesenta y dos	63 - Sesenta y tres	64 - Sesenta y cuatro	65 - Sesenta y cinco
                                <br></br>
                                66 - Sesenta y seis	67 - Sesenta y siete	68 - Sesenta y ocho	69 - Sesenta y nueve    70 - Setenta
                                <br></br>
                                71 - Setenta y uno	72 - Setenta y dos	73 - Setenta y tres	74 - Setenta y cuatro	75 - Setenta y cinco
                                <br></br>
                                76 - Setenta y seis	77 - Setenta y siete	78 - Setenta y ocho	79 - Setenta y nueve	80 - Ochenta
                                <br></br>
                                81 - Ochenta y uno	82 - Ochenta y dos	83 - Ochenta y tres	84 - Ochenta y cuatro	85 - Ochenta y cinco
                                <br></br>
                                86 - Ochenta y seis	87 - Ochenta y siete	88 - Ochenta y ocho	89 - Ochenta y nueve	90 - Noventa
                                <br></br>
                                91 - Noventa y	92 - Noventa y dos	93 - Noventa y tres	94 - Noventa y cuatro	95 - Noventa y cinco
                                <br></br>
                                96 - Noventa y seis	97 - Noventa y siete	98 - Noventa y ocho	99 - Noventa y nueve	100 - Cien
                                <br></br>
                                <br></br>
                                <br></br>
                                </t5>
                                
                                <img style={{display:"flex", width:"50%", alignSelf:"stretch", alignItems:"center", justifyContent:"center"}}src={numeritos1al100} alt='nnanana'/>         
                        </div>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                                <t5>
                                <b>Números del 1 al 30</b>
                                <br></br><br></br>
                                En la primera serie de números, del 1 al 30, las decenas y las unidades se expresan en una sola palabra. Por ejemplo: Dieciocho. Esto es una contracción de las palabras diez + y + ocho.
                                <br></br><br></br>
                                Esta serie de números es la que presenta más irregularidades. Sin embargo, todos los números posteriores se forman de una manera regular y uniforme.
                                <br></br><br></br>
                                <b>¿Por qué los números del 11 al 15 se pronuncian diferente?</b>
                                <br></br><br></br>
                                Los números del 11 al 15 se leen de forma distinta al resto de decenas. Estos números tienen un nombre específico que no responde a la lógica de diez + y + uno.
                                <br></br><br></br>
                                <b>Los números del 30 al 99</b>
                                <br></br><br></br>
                                Como vemos en la tabla, a partir del número 30, los números se forman siempre igual:
                                <br></br><br></br>
                                Decena + y + unidades
                                <br></br>
                                Por ejemplo:
                                <br></br>
                                59 = Cincuenta y nueve = 50 + y + 9
                                <br></br>
                                76 = Setenta y seis = 70 + y + 6
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