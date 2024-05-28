import React from 'react';
import './multiLinks.css';
import Link from './link.jsx';

export default function MultiLinks(props){
    return(
        <nav className={"container"}>
            {props.show1 && <Link text={props.text1} showIcon1={props.showIcon1} icon1={props.icon1} toLink = {props.to1}/>}
            {props.show2 && <Link text={props.text2} showIcon2={props.showIcon2} icon2={props.icon1} toLink = {props.to2}/>}
            {props.show3 && <Link text={props.text3} showIcon3={props.showIcon3} icon3={props.icon1} toLink = {props.to3}/>}
        </nav>
    )
}