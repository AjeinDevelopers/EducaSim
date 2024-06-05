import React from "react";
import "./card.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import Boton from "../../componentes/boton/boton";
import noImg from '../../assets/common/noImg.svg';

export default function Card(props) {

    const [img, setImg] = useState(props.img);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        setImgError(!imgError);
    }, [img]);

    return(
      <div className={"card-container " + props.direction} style={{width: props.width, minWidth: props.direction === "vertical" ? "256px" : "496px" }}>
          <div className={"img-card"} style={{width: props.direction === "vertical" ? '100%' : "45%" }}>
                <img id={"img-card"} src={img} alt={props.alt} onError = {() => setImg(noImg)}/>
          </div>
          <div className={"content"} style={{width: props.direction === "vertical" ? 'calc(100% - (2*var(--US, 12px)))' : "calc(55%-(2*var(--US, 12px)))", height: props.direction === "vertical" ? "" : "100%" }}>
              <h5>{props.header}</h5>
              <t6 id={"card-text"}>{props.text}</t6>
              {props.link && <Link to={props.toLink}><t6 style={{textDecoration: "underline", color: "var(--color-secondary, #00BB9A)"}}>Leer mas</t6></Link>}
              {props.adicional &&
                  <div className={"adicional"}>
                      <div className={"seccion-adicional"}>
                          <t6 style={{color: "var(--color-primary, #4BA8FF)"}}>Puntuacion: </t6>
                          <t6>{props.score}</t6>
                      </div>
                      <div className={"seccion-adicional"}>
                          <t6 style={{color: "var(--color-primary, #4BA8FF)"}}>Fecha:</t6>
                          <t6>{props.date}</t6>
                      </div>
                  </div>
              }
              {props.actions &&
                  <div className={"action-container"}>
                      <Boton size = {"small"} Style={"secondary"} text={props.bt1} showIcon2={true} icon2={props.bt1} handleClick={props.click1}/>
                      <Boton size = {"small"} Style={"secondary"} text={props.bt2} showIcon2={true} icon2={props.bt2} handleClick={props.click2}/>
                  </div>
              }
          </div>
      </div>
    );
}