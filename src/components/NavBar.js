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
        {/* <div className="comp-logo"> */}
        <NavLink
          exact
          to="/"
          onClick={handleClick}
          className="comp-logo"
          style={{ alignSelf: "center" }}
        >
          <img
            src={logo}
            style={{
              width: 110,
              height: 110,
              verticalAlign: "center",
              // marginTop: 5,
            }}
          />
          <div style={{ marginTop: "75px" }}>
            <i className="logotext">P. SHIKSHA 4.0</i>
          </div>
        </NavLink>
        {/* </div> */}

        {/* <div className="nav-container"> */}
        {/* <div className="innav"> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div class="dropdown1">
              <div class="dropbtn1">
                Engineering
                <i class="fa fa-caret-down"></i>
              </div>
              <div class="dropdown-content1">
                <NavLink exact to="/placementprep" onClick={handleClick}>
                  Placement Preparation
                </NavLink>
                <NavLink exact to="/cvmaking" onClick={handleClick}>
                  Professional CV making
                </NavLink>
                <NavLink exact to="/projects" onClick={handleClick}>
                  Major/Minor project
                </NavLink>
                  <NavLink exact to="/assignment" onClick={handleClick}>
                   Assignments
                  </NavLink>
                  <NavLink exact to="/petalk" onClick={handleClick}>
                   Pep Talk
                  </NavLink>
                  <NavLink exact to="/presentation" onClick={handleClick}>
                   Presentation
                  </NavLink>
                  <NavLink exact to="/backpaper" onClick={handleClick}>
                   Paper prep
                  </NavLink> 
                  <NavLink exact to="/gettutor" onClick={handleClick}>
                  Home Tuition
                  </NavLink> 
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div class="dropdown1">
              <div class="dropbtn1">
                Services
                <i class="fa fa-caret-down"></i>
              </div>
              <div class="dropdown-content1">
                {/* <div class="row"> */}
                {/* <div class="column"> */}
                <NavLink exact to="/iit" onClick={handleClick}>
                  IIT
                </NavLink>
                <NavLink exact to="/neet" onClick={handleClick}>
                  NEET
                </NavLink>
                {/* </div> */}
                {/* <div class="column"> */}
                {/* </div> */}
                {/* <div class="column"> */}
                <NavLink exact to="/internship" onClick={handleClick}>
                  Internship
                </NavLink>
                <NavLink
                  exact
                  to="/training_cum_internship"
                  onClick={handleClick}
                >
                  Online Training Internship
                </NavLink>
                <NavLink exact to="/ambassador" onClick={handleClick}>
                  Campus Ambassador
                </NavLink>
                {/* </div> */}
                {/* </div> */}
                <NavLink exact to="/ielts" onClick={handleClick}>
                  IELTS
                </NavLink>
                <NavLink exact to="/overseas" onClick={handleClick}>
                  Overseas
                </NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div class="dropdown1">
              <div class="dropbtn1">
                More
                <i class="fa fa-caret-down"></i>
              </div>
              <div class="dropdown-content1">
                <NavLink exact to="/about_us" onClick={handleClick}>
                  About Us
                </NavLink>
                <NavLink exact to="/blog" onClick={handleClick}>
                  Blog
                </NavLink>
                <NavLink exact to="/blogpost" onClick={handleClick}>
                  Post
                </NavLink>
                <NavLink exact to="/wallOfFame" onClick={handleClick}>
                  Wall Of Fame
                </NavLink>
                <NavLink exact to="/privacy_policy" onClick={handleClick}>
                  Privacy Policy
                </NavLink>
                <NavLink exact to="/terms_of_service" onClick={handleClick}>
                  Terms Of Service
                </NavLink>
                <NavLink exact to="/user_policy" onClick={handleClick}>
                  User Policy
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown1">
              <button class="dropbtn1">
                <NavLink
                  style={{ textDecoration: "none" }}
                  exact
                  to="/login"
                  onClick={handleClick}
                >
                  <p style={{ color: "white" }}>Login</p>
                </NavLink>
              </button>
            </div>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;
