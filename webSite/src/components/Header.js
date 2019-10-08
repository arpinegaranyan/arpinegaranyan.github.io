import React from 'react';
import {NavLink} from 'react-router-dom';







 function Header() {
    return (
     
      <div className="header-container">   
        <h1 className="header">Arpine Garanyan</h1>
        <ul className="menu">
            <li><NavLink exact to="/" 
                   activeStyle={{
                   fontWeight: "bold",
                   color: "#f7455b"
              }} 
              >
                Home
                </NavLink></li>
            <li><NavLink to="/about"  
                    activeStyle={{
                    fontWeight: "bold",
                    color: "#f7455b"
              }}
              >
                About
                </NavLink></li>
            <li><NavLink to="/skills"  
                    activeStyle={{
                    fontWeight: "bold",
                    color: "#f7455b"
              }}
              >
                Skills
                </NavLink></li>
            <li><NavLink to="/contacts"  
                    activeStyle={{
                    fontWeight: "bold",
                    color: "#f7455b"
              }}
              >
                Contact
                </NavLink></li>
       
       
        </ul>
       </div>  
       
    );
}


export default Header;