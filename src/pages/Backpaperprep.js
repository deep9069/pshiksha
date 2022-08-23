import './Servicespage.css'
import React from 'react';
import Hero from "../components/assets/courses/svg1.png";
import Book from "../components/assets/courses/book.png"
import Update from "../pages/updateofdata";
import { NavLink } from 'react-router-dom';


const Backpaperprep = () => {
    return (
        <>
<br/>
<br/>

            <div style={{ display: "flex",justifyContent: "center", marginBottom: "30px", fontSize: "40px" }}>
                <h4>Back Paper <span style={{ color: "#29E6A7" }}>Preparation</span></h4>
            </div>

            <div style={{ display: "flex",justifyContent: "center", marginBottom: "50px", fontSize: "30px" }}><p>explore the courses you want to prepare for.</p></div>
            
            <div class="course" style={{ marginBottom: "20px" }}>
                <center><div class="cbox">
                    {/* <div class="det"><a href="subjects/jee.html"><img src={Book} />JEE Preparation</a></div> */}
                    
                    
                    <div class="dropdown">
              <div class="dropbtn">
              <div class="det"><a><img src={Book} />Btech <i class="fa fa-caret-down"></i></a>  </div>
              </div>
              <div class="dropdown-content">
               <ul>
               Branches
                  <li><a>Computer</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                      Subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        CO201-Data Structures
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO203-Object Oriented Programming
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO205-Discrete Structures
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO207-Modeling and Simulation
                        </NavLink>
                        <NavLink exact to="/prog">
                        EC261-Analog Electronics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>IV</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        CO202-Database Management Systems
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO204-Operating Systems Design
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO206-Computer Organization and Architecture
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO208-Algorithm Design and Analysis
                        </NavLink>
                        <NavLink exact to="/prog">
                        EC262-Digital Electronics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>V</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        CO301-Software Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO303-Theory of Computation
                        </NavLink>
                        <NavLink exact to="/prog">
                        HU301-Engineering Economics
                        </NavLink>
                        <NavLink exact to="/prog">
                        Electives-3 Subjects
                        </NavLink>
                      </ul></li>
                    <li><a>VI</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        CO302-Complier Design
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO304-Artifical Intelligence
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO306-Computer Networks
                        </NavLink>
                        <NavLink exact to="/prog">
                        MG302-Fundamentals of Management
                        </NavLink>
                        <NavLink exact to="/prog">
                        Electives- 2 Subjects
                        </NavLink>
                      </ul></li>
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul>
                  </li>

                  <li><a>Software</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Information & Technology</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Mathematics & computing </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    Subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>III</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                    CS251	DATA STRUCTURE
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC201	DISCRETE MATHEMATICS 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC203	MATHEMATICS-III
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC205	PROBABILITY & STATISTICS 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ENGINEERING ANALYSIS & DESIGN 
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>IV</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                    CS262	ALGORITHM DESIGN & ANALYSIS 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC202	REAL ANALYSIS 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC204	SCIENTIFIC COMPUTING 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC206	COMPUTER ORGANIZATION AND ARCHITECTURE 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC208	LINEAR ALGEBRA  
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                      </li>
                    <li><a>V</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                    MC301	OPERATING SYSTEM 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC303	STOCHASTIC PROCESSES 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MCxxx	DEPARTMENTAL ELECTIVE COURSE-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MCxxx-	DEPARTMENTAL ELECTIVE COURSE-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        UExxx	OPEN ELECTIVE COURSE 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MG301	FUNDAMENTALS OF MANAGEMENT 
                        </NavLink>
                      </ul>
                      </li>
                    <li><a>VI</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                    MC302	DATABASE MANAGEMENT SYSTEM  
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC304	THEORY OF COMPUTATION
                        </NavLink>
                        <NavLink exact to="/prog">
                        MC306	FINANCIAL ENGINEERING 
                        </NavLink>
                        <NavLink exact to="/prog">
                        MCxxx	DEPARTMENTAL ELECTIVE COURSE-3
                        </NavLink>
                        <NavLink exact to="/prog">
                        MCxxx	DEPARTMENTAL ELECTIVE COURSE-4
                        </NavLink>
                        <NavLink exact to="/prog">
                        HU302	ENGINEERING ECONOMICS
                        </NavLink>
                      </ul>
                      </li>
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Electronics & Communications</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Electrical </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>

                  <li><a>civil </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>

                  <li><a>Mechanical</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    Subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                        <li>
                        Subjects
                        <NavLink exact to="/prog">
                        ME201-Mechanics of Solids
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME203-Thermal Engineering I
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME205-Machine Drawing and Solid Modelling
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME207-Engineering Analysis and Design
                        </NavLink>
                        <NavLink exact to="/prog">
                        PE251- ENGINEERING MATERIALS & METALLURGY
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li><a>IV</a>
                    <ul>
                        <li>
                        Subjects
                        <NavLink exact to="/prog">
                        ME202-Thermal Engineering II
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME204-Fluid Mechanics
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME206-Kinematics of Machines
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME208-Manufacturing Technology I  
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li><a>V</a>
                    <ul>
                        <li>
                        Subjects
                        <NavLink exact to="/prog">
                        ME301-Fluid Systems
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME303-Dynamics of Machines
                        </NavLink>
                        <NavLink exact to="/prog">
                        MG301-Fundamentals of Management
                        </NavLink>
                        <NavLink exact to="/prog">
                        Electives-3 Subjects
                        </NavLink>
                        </li>
                      </ul></li>
                    <li><a>VI</a>
                    <ul>
                        <li>
                        Subjects
                        <NavLink exact to="/prog">
                        ME302-Heat and Mass Transfer
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME304-Production and Operations management
                        </NavLink>
                        <NavLink exact to="/prog">
                        Hu302a-Engineering Economics
                        </NavLink>
                        <NavLink exact to="/prog">
                        Electives- 3 Subjects
                        </NavLink>
                        </li>
                      </ul></li>
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>

                  <li><a>Mechanical & automotive </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Production & Industrial </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Polymer & Chemical </a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Biotechnology</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Engineering Physics</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
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
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
                  <li><a>Environmental</a>
                  <ul>
                    Semester
                    <li><a>I</a>
                    <ul>
                    Subjects
                        <NavLink exact to="/prog">
                        AP101-Physics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA101-Mathematics 1
                        </NavLink>
                        <NavLink exact to="/prog">
                        AC101-Chemistry 
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME101-Basic Mechanical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME103-Workshop Practice
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul></li>
                    <li><a>II</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                        AP102-Physics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        MA102-Mathematics 2
                        </NavLink>
                        <NavLink exact to="/prog">
                        EE101-Basic Electrical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        CO101-Programming Fundamentals
                        </NavLink>
                        <NavLink exact to="/prog">
                        ME105-Engineering Graphics
                        </NavLink>
                        <NavLink exact to="/prog">
                        FEC - 1 Subject
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>III</a>
                      <ul>
                      Subjects
                      <NavLink exact to="/prog">
                        EN201-Strength of Materials
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN203-Engineering & Environmental Surveying
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN205-Environmental Chemistry & Microbiology
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN207-Engineering Analysis & Design
                        </NavLink>
                      </ul>
                    </li>
                    <li><a>IV</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                    EN202-Geotechnical Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN204-Water Engineering: Design & Application
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN206-Engineering Geology, GIS & Remote Sensing
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN208-Fluid Mechanics & Hydraulic Machines
                        </NavLink>
                        </ul></li>
                    <li><a>V</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                        EN301-Waste Water Engineering: Design and Applications
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN303-Instrumentation Techniques for Environmental Monitoring
                        </NavLink>
                        <NavLink exact to="/prog">
                        HU301-Engineering Economics
                        </NavLink>
                        <NavLink exact to="/prog">
                        Electives-3 subjects
                        </NavLink>
                        </ul></li>
                    <li><a>VI</a>
                    <ul>
                    Subjects
                    <NavLink exact to="/prog">
                        EN302-Solid Waste Management
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN304-Air Pollution & Control
                        </NavLink>
                        <NavLink exact to="/prog">
                        EN306-Hydrology & Ground Water Engineering
                        </NavLink>
                        <NavLink exact to="/prog">
                        MG302-Fundamentals of Management
                        </NavLink>
                        <NavLink exact to="/prog">
                        Electives-2 subjects
                        </NavLink>
                        </ul></li>
                    <li><a>VII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-1
                        </NavLink>
                        <NavLink exact to="/prog">
                        Industrial Training
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 4 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                    <li><a>VIII</a>
                    <ul>
                        Subjects
                        <NavLink exact to="/prog">
                        B. tech Project-2
                        </NavLink>
                        <NavLink exact to="/prog">
                        All 3 (DEC & GEC)
                        </NavLink>
                      </ul></li>
                  </ul></li>
              </ul>
            
                </div>
              </div>
              <div class="dropdown">
              <div class="dropbtn">
              <div class="det"><a><img src={Book} />Mtech <i class="fa fa-caret-down"></i></a></div>
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