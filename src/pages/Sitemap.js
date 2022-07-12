import './Servicespage.css'
import React from 'react';
import Hero from "../components/assets/courses/svg1.png"
import Book from "../components/assets/courses/book.png"
import D1 from "../components/assets/courses/d1.png"
import Paper from "../components/assets/courses/paper.png"
import Computer from "../components/assets/courses/computer.png"
import Data from "../components/assets/courses/data.png"
import Algo from "../components/assets/courses/algo.png"
import Projects from "../components/assets/courses/projects.png"



const Hometuition = () => {
    return (
        <>
            <div class="head-container">
                <div class="quote1">
                    <h1 style={{ fontFamily: "Open Sans", fontSize: "40px" }}>Our Services</h1>
                    <hr/>
                    <br/>
                    <p style={{ fontFamily: "Open Sans", fontSize: "17px", lineHeight: "35px" }}>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</p>
                </div>
                <div class="svg-image">
                    <img src={Hero} alt="svg" />
                </div>

            </div>
            <br/>
<br/>
<br/>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px", fontSize: "40px" }}>
                <h2>Courses<span style={{ color: "#29E6A7" }}>&nbsp;Offered?</span></h2>
            </div>

            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Overseas Services</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />IELTS</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />TOEFL</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />GRE</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />GMAT</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />CV making</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />SOP writing</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />Consultation</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Visa</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Engineering Services</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />CV making</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />Placement Prep.</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />Aptitude Prep.</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />Project support</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />Thesis guidance</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />Plag-free reports</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />Presentation making</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />file/reports making</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Job Exam Preparation</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />UPSC Civil Services</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />GATE/NET ECE</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />CAT/XAT</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />SSC CGL/CHSL</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />SSC CPO/JE</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />Bank PO/Cleark</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />Railway</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />CTET</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />NAICL</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />NABARD</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>School Exam Preparation</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />IIT JEE</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />NEET (Medical)</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />CLAT (Law Entrance)</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />NIFT</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />BBA Entrance</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />XI CBSE (PCMB)</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />XII CBSE (PCMB)</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />IX-X courses</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />NTSE Olympiad</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Certified Courses</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />IELTS Trainer</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />English Speaking</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />French</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />German</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />Spanish</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />Japanese</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Russian</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Mandarin</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Extra Curricular</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />Phonics</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />english courses</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />Rubix Cube</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />Chess</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />Art & Drawing</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />Fitness Courses</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />Cooking & Cullinary</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Guitar playing</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Piano playing</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Classical dance</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Dance for kids</a></div>
                </div>
                </center>
            </div>
            <div class="diffSection" id="portfolio_section" style={{}}>
                <center><p style={{ fontSize: "50px", padding: "100px", paddingBottom: "40px" }}>Portfolio</p></center>
                    <p className='content'>
                        “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”
                    </p>
            </div>
           
        </>
    );
};

export default Hometuition;