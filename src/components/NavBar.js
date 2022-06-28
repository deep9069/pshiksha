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
              marginTop:8
            }}  /> 
      <i className="logotext" style={{position: 'relative',top: -10,}}>P.Shiksha 4.0 </i>
         </NavLink>
        
         </div>
         
        {/* <div className="nav-container"> */}
        <div className="innav">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              
                  <div class="dropdown">
              <button class="dropbtn">Services
              <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
              <NavLink
                exact to="/HomeTution"
                onClick={handleClick}
              >
              Home Tution
              </NavLink>
              <NavLink
                exact to="/iit"
                onClick={handleClick}
              >
              IIT
              </NavLink> <NavLink
                exact to="/HomeTution"
                onClick={handleClick}
              >
              NEET
              </NavLink> 
              <NavLink
                exact to="/ielts"
                onClick={handleClick}
              >
              IELTS
              
              </NavLink> 
              <NavLink
                exact to="/overseas"
                onClick={handleClick}
              >
              Overseas
              </NavLink> 
              </div>
             </div> 
            </li>
            
            <li className="nav-item">
            
            <div class="dropdown">
            <button class="dropbtn">Student Programmes
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <NavLink exact to="/internship" 
            onClick={handleClick}
            >
            Internship
            </NavLink>
            <NavLink
                exact to="/vaani"
                onClick={handleClick}
              >
              Internship cum online certificate
              </NavLink> <NavLink
                exact to="/ambassador"
                onClick={handleClick}
              >
              Campus Ambassador
              </NavLink>
            </div>
            </div>
          
          </li>
          <li className="nav-item">
            <NavLink exact to="/setting" 
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
           <div class="dropdown">
            <button class="dropbtn">More
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <NavLink
                exact to="/HomeTution"
                onClick={handleClick}
              >
              Extra Curricular
              </NavLink>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
            </div>
          </NavLink>
          </li>
         <div className="nav-item">
               <NavLink exact to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} >  
               
               <p className="login" style={{marginTop:7}}>Login</p>
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
