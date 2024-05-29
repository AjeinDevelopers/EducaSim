import React from 'react';
import {useState, useCallback} from 'react';
import "./selector.css";


function selector(props){

    const [activado, ssetActivado] = useState(false);


    return(
        <div style={{flexDirection: "row", padding: "var(--XXXS, 16px)", alignItems: "center", gap: "var(--US, 12px)"}}>
            
            <input id={"radio-input"} type="radio" />
            <span id={"rad-visible"} />
            <t5>{props.text}</t5>
        </div>
    )

}

export default selector;