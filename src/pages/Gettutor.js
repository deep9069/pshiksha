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
import Update from "./updateofdata";



const Gettutor = () => {
    return (
        <>
            <div class="head-container">
                <div class="quote">
                    <h1 style={{ fontFamily: "Open Sans", fontSize: "40px" }}>Your Favourite Tutor is Here!</h1>
                    <hr />
                    <br />
                    <p style={{ fontFamily: "Open Sans", fontSize: "17px", lineHeight: "35px" }}>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</p>
                </div>
                <div class="svg-image">
                    <img src={Hero} alt="svg" />
                </div>
            </div>
            <br />
            <br />
            <br />

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
                <center><p style={{ fontSize: "50px", padding: "100px", paddingBottom: "40px" }}>Terms & Conditions</p></center>
             <h4 class="content2">Parents and students are requested to read the following terms & conditions. If you do not follow our instructions, then we'll not be responsible for any inconvenience.</h4>
             <p className='content2'>
             <ol>
                <li>First month's fees are going to be collected by Premi ji's Shiksha 4.0. Parents are requested to pay first month's fees after fixing the tutor either offline or online.</li>
                <li>We never charge any registration fee or any service charge from our clients/students/parents. It is free of cost.</li>
                <li>All parents are requested not to ask our tutors about getting admission in any college or school against money. We provide only home tutors and we are not responsible for any similar proposals by our tutors.</li>
                <li>If any client calls a tutor after a gap of few days/weeks/months of the trial/demo class, then it is the duty of the tutor as well as the parent to update us about date, otherwise we will not be responsible for any misconduct by the tutor.</li>
             </ol>
             </p>
            </div>
            <div class="diffSection" id="portfolio_section" style={{}}>
                <center><p style={{ fontSize: "50px", padding: "100px", paddingBottom: "40px" }}>Portfolio</p></center>
                <p className='content'>
                    “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”
                </p>
            </div>
            <Update />
        </>
    );
};

export default Gettutor;