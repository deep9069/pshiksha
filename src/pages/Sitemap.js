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
import Update from "../pages/updateofdata";
import Footer from "../components/footer/Footer";

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
                {/* <h2>Courses<span style={{ color: "#29E6A7" }}>&nbsp;Offered?</span></h2> */}
            </div>

            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Overseas Services</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} alt=""/>IELTS</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} alt=""/>TOEFL</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} alt=""/>GRE</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} alt=""/>GMAT</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} alt=""/>CV making</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} alt=""/>SOP writing</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} alt=""/>Consultation</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Visa</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Engineering Services</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} alt=""/>CV making</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} alt=""/>Placement Prep.</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} alt=""/>Aptitude Prep.</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} alt=""/>Project support</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} alt=""/>Thesis guidance</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} alt=""/>Plag-free reports</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} alt=""/>Presentation making</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>file/reports making</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Job Exam Preparation</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} alt=""/>UPSC Civil Services</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} alt=""/>GATE/NET ECE</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} alt=""/>CAT/XAT</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} alt=""/>SSC CGL/CHSL</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} alt=""/>SSC CPO/JE</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} alt=""/>Bank PO/Cleark</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} alt=""/>Railway</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>CTET</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>NAICL</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>NABARD</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>School Exam Preparation</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} alt=""/>IIT JEE</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} alt=""/>NEET (Medical)</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} alt=""/>CLAT (Law Entrance)</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} alt=""/>NIFT</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} alt=""/>BBA Entrance</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} alt=""/>XI CBSE (PCMB)</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} alt=""/>XII CBSE (PCMB)</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>IX-X courses</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>NTSE Olympiad</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Certified Courses</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} alt=""/>IELTS Trainer</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} alt=""/>English Speaking</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} alt=""/>French</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} alt=""/>German</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} alt=""/>Spanish</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} alt=""/>Japanese</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Russian</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Mandarin</a></div>
                </div>
                </center>
            </div>
            <div class="course" style={{ marginBottom: "20px" }}>
                <h3 style={{marginLeft:"6%",marginBottom:"2%"}}>Extra Curricular</h3>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} alt=""/>Phonics</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} alt=""/>english courses</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} alt=""/>Rubix Cube</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} alt=""/>Chess</a></div>
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} alt=""/>Art & Drawing</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} alt=""/>Fitness Courses</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} alt=""/>Cooking & Cullinary</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Guitar playing</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Piano playing</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Classical dance</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} alt=""/>Dance for kids</a></div>
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
           <Footer/>
        </>
    );
};

export default Hometuition;