import './Servicespage.css'
import React from 'react';
import Hero from "../components/assets/courses/svg1.png";
import Book from "../components/assets/courses/book.png"
import D1 from "../components/assets/courses/d1.png"
import Paper from "../components/assets/courses/paper.png"
import Computer from "../components/assets/courses/computer.png"
import Data from "../components/assets/courses/data.png"
import Algo from "../components/assets/courses/algo.png"
import Projects from "../components/assets/courses/projects.png"
import Update from "../pages/updateofdata";
import { NavLink } from 'react-router-dom';


const Backpaperprep = () => {
    return (
        <>
            <div class="head-container">
                <div class="quote">
                    <h1 style={{ fontFamily: "Open Sans", fontSize: "40px" }}>Back Paper Preparation</h1>
                    <hr/>
                    <br/>
                    <p style={{ fontFamily: "Open Sans", fontSize: "17px", lineHeight: "35px" }}>Preparing for exams? Give yourself the best chance with these top ten study tips, and try not to let the stress get to you during this period of exam preparation.</p>
                </div>
                <div class="svg-image">
                    <img src={Hero} alt="svg" />
                </div>

            </div>
            <br/>
<br/>
<br/>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px", fontSize: "40px" }}>
                <h2>What You <span style={{ color: "#29E6A7" }}>Get?</span></h2>
            </div>

            <div class="course" style={{ marginBottom: "20px" }}>
                <center><div class="cbox">
                    {/* <div class="det"><a href="subjects/jee.html"><img src={Book} />JEE Preparation</a></div> */}
                    
                    
                    <div class="dropdown">
              <div class="dropbtn">
              <div class="det"><a><img src={Book} />Btech</a></div>
                {/* <i class="fa fa-caret-down"></i> */}
              </div>
              <div class="dropdown-content">
               <ul>
               Branches
                  <li><a>Computer</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                      subjects
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul>
                  </li>

                  <li><a>Software</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Information & Technology</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Mathematics & computing </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Electronics & Communications</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Electrical </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>

                  <li><a>civil </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>

                  <li><a>Mechanical</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a>
                        <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>

                  <li><a>Mechanical & automotive </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Production & Industrial </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Polymer & Chemical </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Biotechnology</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Engineering Physics</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Environmental</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
              </ul>
                


                </div>
              </div>
              <div class="dropdown">
              <div class="dropbtn">
              <div class="det"><a><img src={Book} />Mtech</a></div>
                {/* <i class="fa fa-caret-down"></i> */}
              </div>
              <div class="dropdown-content">
               <ul>
               Branches
                  <li><a>Computer</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                      subjects
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul>
                  </li>

                  <li><a>Software</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Information & Technology</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Mathematics & computing </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Electronics & Communications</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a>
                    <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Electrical </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>

                  <li><a>civil </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>

                  <li><a>Mechanical</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a>
                        <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>

                  <li><a>Mechanical & automotive </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Production & Industrial </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Polymer & Chemical </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Biotechnology</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Engineering Physics</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
                  <li><a>Environmental</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                        <li><a>Mathematics I</a></li>
                        <li><a>Physics I</a></li>
                        <li><a>Chemistry</a></li>
                        <li><a>Basic Mechanical engg.</a></li>
                        <li><a>Work Shop</a></li>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        <li><a>Mathematics II</a></li>
                        <li><a>Physics II</a></li>
                        <li><a>Basic Electrical engg.</a></li>
                        <li><a>Programming Fundamentals</a></li>
                        <li><a>Engineering Graphics</a></li>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li><a>OS</a></li>
                        <li><a>DBMS</a></li>
                      </ul>
                    </li>
                    <li><a>IV</a></li>
                    <li><a>V</a></li>
                    <li><a>VI</a></li>
                    <li><a>VII</a></li>
                    <li><a>VIII</a></li>
                  </ul></li>
              </ul>
                


                </div>
              </div>
                </div>
                
                </center>
            </div>
            <div class="diffSection" id="portfolio_section" style={{}}>
                <center><p style={{ fontSize: "50px", padding: "100px", paddingBottom: "40px" }}>Portfolio</p></center>
                    <p className='content'>
                        “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”
                    </p>
            </div>
            <Update/>
        </>
    );
};

export default Backpaperprep;