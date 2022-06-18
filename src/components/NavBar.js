import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./assets/logo.png"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    
      <nav className="navbar">
        <div className="comp-logo">
        <NavLink exact to="/" 
         activeClassName="active"
         className="nav-links"
         onClick={handleClick}>
            <img src={logo} style={{
              width: 110,
              height:110,
              verticalAlign: "center",
            }}  /> 
      <i className="logotext">P.Shiksha 4.0</i>
         </NavLink>
        
         </div>
         
        {/* <div className="nav-container"> */}
        <div className="innav">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <i className="text">Home</i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Details"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <i className="text"> Services</i>
              </NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink exact to="/login" 
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
            <i className="text">Student Programmes</i>
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" 
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
           <i className="text">About Us</i>
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/setting" 
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
           <i className="text">More</i>
          </NavLink>
          </li>
         <div className="nav-item">
               <NavLink exact to="/sign_in"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} >  
               
               <i className="text">Login</i>
              </NavLink>
              </div>
        
         
          </ul>
      
          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;
