import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/15410.jpg";
import "./blog.css";

const Sidebar  = () => {


  return(
<>
    <div class="grid-container" style={{marginLeft:"40px"}} >
    <div class="grid-item">
      <h6>HEADING OF BLOG HERE</h6>
      
      <div>
      <img src={logo}  style={{
                  width: "100%",
                  height: "70%",
                  verticalAlign: "center",
                  marginTop: 40,
                }}/>
                </div>
    </div>
  </div>
  </>
   )

 }

export default Sidebar;