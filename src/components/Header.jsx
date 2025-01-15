import React from "react";
import "../styles/Header.css";
import tripod0Life from "../images/Nav-Emblem.gif"
// import { useRouteError } from 'react-router-dom';



const Header = () => {
    return (
    <div className="Header">
        <p className="jovial-jumbotron">Marlie Ford</p>
    <a><img src= {tripod0Life} className='TriPod0Life'></img></a>
    </div>
    );
}

export default Header;