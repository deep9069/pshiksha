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


const Cvmaking = () => {
    return (
        <>
            <div class="head-container">
                <div class="quote">
                    <h1 style={{ fontFamily: "Open Sans", fontSize: "40px" }}>CV Making</h1>
                    <hr/>
                    <br/>
                    <p style={{ fontFamily: "Open Sans", fontSize: "17px", lineHeight: "35px" }}>A resume/CV is a crucial document which can make you standout from the crowd without your physical presence. Curating an apt resume can make a difference in tour career. We offer professional CV/resume making by help of experienced professionals.</p>
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
                <div class="det"><a href="subjects/jee.html"><img src={Book} />Best CV Practices</a></div>
                    <div class="det"><a href="subjects/gate.html"><img src={D1} />Tech & Non-tech guides</a></div>
                    <div class="det"><a href="subjects/jee.html#sample_papers"><img src={Paper} />Verified Content</a></div>
                    <div class="det"><a href="subjects/quiz.html"><img src={D1} />On-demand Revisions</a></div>
                </div>
                </center>
                <div class="cbox">
                <div class="det"><a href="subjects/computer_courses.html"><img src={Computer} />Professional format</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#data"><img src={Data} />Organized Layout</a></div>
                    <div class="det"><a href="subjects/computer_courses.html#algo"><img src={Algo} />On time delivery</a></div>
                    <div class="det det-last"><a href="subjects/computer_courses.html#projects"><img src={Projects} />Custom Add-ons</a></div>
                </div>
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

export default Cvmaking;