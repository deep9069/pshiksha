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
              marginTop:5,
              
            }}  /> 
      <i className="logotext" style={{position: 'relative',top: -10}}>P SHIKSHA 4.0 </i>
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
            <div class="row">
              <div class="column">
          <h3>Engineering</h3>
          <NavLink
                exact to="/iit"
                onClick={handleClick}
              >
              Placement Preparation
              </NavLink>
              <NavLink
                exact to="/placement"
                onClick={handleClick}
              >
              professional CV making
              </NavLink>
              <NavLink
                exact to="/iit"
                onClick={handleClick}
              >
              Major/Minor project
              </NavLink>
              <NavLink
                exact to="/projects"
                onClick={handleClick}
              >
              Plag-free reports
              </NavLink>
        
        </div>
            <div class="column">
            <h3>Exams</h3>
            <NavLink
                exact to="/iit"
                onClick={handleClick}
              >
              IIT
              </NavLink>
              <NavLink
                exact to="/HomeTution"
                onClick={handleClick}
              >
              NEET
              </NavLink>
          </div>
          <div class="column">
          <h3>Abroad</h3>
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
        <div class="column">
          <h3>Students</h3>
          <NavLink exact to="/internship" 
            onClick={handleClick}
            >
            Internship
            </NavLink>
            <NavLink
                exact to="/vaani"
                onClick={handleClick}
              >
              Training cum Internship
              </NavLink>
              <NavLink
                exact to="/ambassador"
                onClick={handleClick}
              >
              Campus Ambassador
              </NavLink>
        </div>
      </div>
    </div>
  </div> 
          </li>
          <li className="nav-item">
           
           <div class="dropdown1">
            <button class="dropbtn1">More
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content1">
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
          
          </li>
          <li>
          <div class="dropdown1">
            <button class="dropbtn1">
            <NavLink
            style={{textDecoration: 'none'}}
                exact to="/login"
                onClick={handleClick}
              >
              <p style={{color:"white"}}>Login
              </p>
              </NavLink>
          
            
            </button>
            </div>
              </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          </div>
      </nav>
    </>
  );
}

export default NavBar;
