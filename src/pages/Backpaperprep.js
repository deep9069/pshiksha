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



const Backpaperprep = () => {
    return (
        <>
            <div class="head-container">
                <div class="quote">
                    <h1 style={{ fontFamily: "Open Sans", fontSize: "40px" }}>Back Paper Preparation</h1>
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
                <h2>What You <span style={{ color: "#29E6A7" }}>Get?</span></h2>
            </div>

            <div class="course" style={{ marginBottom: "20px" }}>
                <center><div class="cbox">
                    <div class="det"><a href="subjects/jee.html"><img src={Book} />JEE Preparation</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />GATE Preparation</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />Sample Papers</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />Daily Quiz</a></div>
                </div>
                </center>
                <div class="cbox">
                    <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />Computer Courses</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />Data Structures</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />Algorithm</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Projects</a></div>
                </div>
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

export default Backpaperprep;