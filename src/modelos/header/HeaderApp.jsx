import React from 'react';
import './HeaderApp.css';
import { Link} from "react-router-dom";

export default function HeaderApp() {
  return (
    <header id={"App"}>
       
        <Link to="/"><h6 className={"secondary brand"}>EducaSim</h6></Link>
        
    </header>
  );
}