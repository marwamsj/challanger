import React from 'react';
import  './Header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="head">
           <div className="allhead"/>
           <div className="header_container">
               <h1 className="logo">Drink-app</h1>
               <nav className="nav">
                   <ul className="nav_list">
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/About">About</Link></li>
                       <li><a href="#PageBottom">Contact</a></li>
                   </ul>
               </nav>
           </div>
           
        </div>
    )
}

export default Header
