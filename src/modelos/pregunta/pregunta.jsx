import React, {useState} from "react";
import "./pregunta.css";
import noImg from "../../assets/common/noimg.svg";
import Input from "../../componentes/input/input";

export default function Pregunta(props) {

    const [img, setImg] = useState(props.img);

    return(
        <div className={"pregunta-container"} style={{width: props.width}}>
            <div className={"label-container"} id={"pregunta"}>
                <h5 style={{color: "#00BB9A"}}>Pregunta {props.num}</h5>
                <t5>{props.pregunta}</t5>
            </div>
            <div className={"img"}>
                <img id={"img-pregunta"} src={props.img} alt={props.alt} onError={() => setImg(noImg)}/>
            </div>
            <Input type={"text"} placeholder={"Respuesta"} showLabel={false} contenido={props.contenido}/>
        </div>
    );
}