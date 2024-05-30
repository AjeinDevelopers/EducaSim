import React, {useEffect} from "react";
import {useState} from 'react';
import "./radbutton.css";

export default function RadButtonGroup(props){

    const [value, setValue] = useState(null);

    useEffect(() => {
        props.onChange(value);
    }, [value]);


    return(
        <>
            {props.items.map(item => {
                return (
                    <div className={"rad-container"}>
                        <input id={item.value} name={item.name} value={item.value} checked={value === item.value}
                               onChange={e => setValue(e.target.value)} type="radio"/>
                        <label htmlFor={item.value} id={"label-radio"}>
                            <t5>{item.label}</t5>
                        </label>
                    </div>
                )
            })}
        </>
    );
}