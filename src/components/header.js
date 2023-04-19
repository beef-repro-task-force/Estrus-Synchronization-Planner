import React from "react";
import cow from "../imgs/brtf_full-color.png";
import {Link} from 'react-router-dom';

import "../style/header.css";

function Header(){
    return(
        <div className="logo-header" style={{backgroundColor: "#eeeeee"}}>
            <Link to = "/">
            <img src= {cow} alt="moo"/>
            </Link>
        </div>
    )
}

export default Header;