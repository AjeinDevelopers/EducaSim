import HeaderAlumno from '../../../../modelos/header/HeaderAlumno.jsx';
import FooterApp from '../../../../modelos/footer/FooterApp.jsx'; 
import figuras2D1 from '../../../../assets/common/figuras2D1.png';
import figuras2D2 from '../../../../assets/common/figuras2D2.png';
import figuras2D3 from '../../../../assets/common/figuras2D3.png';
import figuras2D4 from '../../../../assets/common/figuras2D4.png';
import figuras2D5 from '../../../../assets/common/figuras2D5.png';
import figuras2D6 from '../../../../assets/common/figuras2D6.png';
import figuras2D7 from '../../../../assets/common/figuras2D7.png';
import Boton from '../../../../componentes/boton/boton.jsx';
import { NavLink } from 'react-router-dom';

export default function Leccion8N2(){
        return(
            <>
            <HeaderAlumno/>
            <div style={{display:"flex", padding:"var(--XXS, 24px) var(--L, 64px)", flexDirection:"column", alignItems:"center", gap:"var(--M, 48px)", alignSelf:"stretch"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"var(--XS, 32px)", alignSelf:"stretch"}}>
                <div style={{width:"100%",borderRadius:"var(--US, 12px)", overflow: 'hidden'}}>
                    <img style={{margin: "0", objectFit: "cover",width:"100%", display:"flex",height:"320px", padding:"0", justifyContent:"center", alignItems:"center", alignSelf:"stretch"}} src={figuras2D1} alt='figuras2DHead'/>
                    </div>
                    <h3 className='secondary brand'>Leccion 8</h3>
                    <div style={{display:"flex",padding:"0px var(--L, 64px)", justifyContent:"center", alignItems:"center", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <div style={{display:"flex", alignItems:"center", gap:"var(--XXXS, 16px)"}}>
                            <h5 className='primary brand'>Grado: </h5><t5>2°</t5>
                            <h5 className='primary brand'>  Tema:</h5><t5>Figuras Geométricas en 2D</t5>
                        </div>
                    </div>    
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Vamos a empezar por lo más sencillo, que son las figuras bidimensionales, 2D o en dos dimensiones. Como su propio nombre indica, estas son figuras planas con dos dimensiones: largo y ancho. Es decir, no tienen volumen ni profundidad. Estas figuras geométricas se construyen con la unión de varios puntos. De ahí que sean las más simples. 
                                <br></br>
                                A continuación vamos a describir los elementos más simples de la geometría bidimensional.
                                </t5>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            <b>Punto</b>
                            <br></br>
                            Un punto es una figura geométrica sin dimensión, ni volumen ni longitud y representa una localización en un plano, la cual viene dada por unas coordenadas. Un punto describe una posición en el plano, la cual se describe con sus respectivas coordenadas del eje X y del eje Y.
                            </t5>
                            <img style={{display:"flex", width:"20%", height:"200px", alignItems:"center", justifyContent:"center"}}src={figuras2D2} alt='onnanana'/>
                        </div>
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>
                        <img style={{display:"flex", width:"20%", alignItems:"center", justifyContent:"center", alignSelf:"stretch"}}src={figuras2D3} alt='nnanana'/>
                                <t5>
            	                <b>Línea</b>
                                <br></br>
                                La línea es una figura geométrica mucho más fácil de entender, porque no es más que una sucesión de puntos y, por tanto, esta ya tiene dimensión y se puede visualizar. Una línea recta puede ser de varios tipos, atendiendo a si están acotadas o no. Es decir, si son líneas infinitas en ambas direcciones o si, por el contrario, tienen un punto inicial, un punto final o ambos.
                                <br></br>
                                <br></br>
                                Ahora bien, con estos conceptos podemos distinguir las siguientes figuras geométricas básicas.
                                </t5>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            <b>Triangulo</b>
                            <br></br>
                            La figura formada cuenta con tres lados y tres ángulos, como su propio nombre indica. Los lados se nombran con A, B y C mientras que los ángulos se nombran con sus equivalentes en el alfabeto griego: α, β y γ.
                            <br></br>
                            Área del triángulo = (base * altura) /2  
                            <br></br>
                            Perímetro del triángulo = A + B + C

                            </t5>
                            <img style={{display:"flex", width:"40%", height:"250px", alignItems:"center", justifyContent:"center"}}src={figuras2D4} alt='onnanana'/>
                        </div>
                        <div style={{display:"flex", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch", flex:"1 0 0"}}>

                                <t5>
                                Existen diferentes tipos de triángulos atendiendo a la longitud de sus lados y a sus ángulos: 
                                <br></br>
                                <br></br>
                                --	Atendiendo a sus lados:
                                <br></br>
                                o	Equilátero: todos sus lados son iguales. 
                                <br></br>
                                o	Isósceles: tiene dos lados iguales y uno desigual. 
                                <br></br>
                                o	Escaleno: todos sus lados son de diferente longitud. 
                                <br></br>
                                <br></br>
                                --	Atendiendo a sus ángulos: 
                                <br></br>
                                o	Agudo: todos sus ángulos son menores de 90º.
                                <br></br>
                                o	Recto: tiene un ángulo exactamente de 90º.
                                <br></br>
                                o	Obtuso: cuenta con ángulo de más de 90º.
                                <br></br>
                                </t5>         
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"30%", height:"200px", alignItems:"center", justifyContent:"center"}}src={figuras2D5} alt='onnanana'/>
                            <t5>
                            <b>Cuadriláteros</b>
                            <br></br>
                            El rectángulo es la siguiente figura geométrica importante y es que esta cuenta con 4 lados y, por ello, con cuatro ángulos. El cuadrado no es más que un tipo de rectángulo en el que los 4 lados tienen las mismas medidas. Los ángulos, tanto del cuadrado como del rectángulo, son siempre de 90º.
                            <br></br>
                            Área del rectángulo = base x altura 
                            <br></br>
                            Área del cuadrado = lado x lado
                            <br></br>
                            Perímetro del rectángulo = 2 x base + 2 x altura 
                            <br></br>
                            Perímetro del cuadrado = 4 x lado

                            </t5>
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                            <t5>
                            <b>Polígono</b>
                            <br></br>
                            Las figuras geométricas que tienen más de 4 lados se denominan polígonos. Existen tantos polígonos como puedas imaginar, eso sí, hacer dibujos de estas figuras geométricas no será tan fácil, sobre todo, si quieres hacer uno con muchísimos lados. Los polígonos más conocidos son: 
                            <br></br>
                            Pentágono: polígono de 5 lados. 
                            <br></br>
                            Hexágono: polígono de 6 lados. 
                            <br></br>
                            Octágono: polígono de 8 lados.

                            </t5>
                            <img style={{display:"flex", width:"40%", height:"200px", alignItems:"center", justifyContent:"center"}}src={figuras2D6} alt='onnanana'/>
                        </div>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"flex-start", gap:"var(--S, 36px)", alignSelf:"stretch"}}>
                        <img style={{display:"flex", width:"40%", height:"300px", alignItems:"center", justifyContent:"center"}}src={figuras2D7} alt='onnanana'/>
                            <t5>
                            <b>Circulo</b>
                            <br></br>
                            Este está formado por una sola línea, cuyo inicio y su final se unen en un mismo punto. Presenta un diámetro que es igual a dos veces su radio y, por tanto, se trata de una figura simétrica. 
                            <br></br>
                            Área del círculo = 𝛑 * r2
                            <br></br>
                            Perímetro del círculo = 2 *𝛑 * r
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