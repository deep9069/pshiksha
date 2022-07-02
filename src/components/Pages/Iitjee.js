import React from 'react';
import { Button, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Iitjee.css";
import { FaHandPointRight } from "react-icons/fa";
import pdf1 from "../assets/Shiksha_IIT-JEE.pdf";
import pdf2 from "../assets/Online_test_series.pdf";
import pdf3 from "../assets/Study_Material.pdf";
import pdf4 from "../assets/iit-jee_Fee_Package.pdf";

export function Iitjee() {
    return (
      <>
        <div className="iit">
          <Container className="elem0iit">
            <div data-testid="richTextElement">
              <div className="d-flex align-items-center flex-column">
                <h1 style={{ fontSize: "50px" }}>
                  <b>
                    IIT JEE<span style={{ color: "#29e6a7" }}> Coaching</span>
                  </b>
                </h1>
              </div>
            </div>
          </Container>
          <div className="elem_0iit">
            <h2>
              1 Year Crash Course For{" "}
              <span style={{ color: "#29e6a7" }}> Mains + Advanced</span>
            </h2>
          </div>
          <br />
          <br />
          <div data-testid="richTextElement">
            <p>
              Our vision is to provide students with best academic mentorship to
              help them grow both academically and socially. A premiere coaching
              institute for preparation of IIT-JEE (Main+Advance).
            </p>
            <br />
            <div className="elem1iit">
              <h2>
                <FaHandPointRight /> Looking to crack the upcoming JEE Exam in
                the first attempt itself?
              </h2>
            </div>
            <br />
            <h3>What is JEE?</h3>
            <div className="para1">
              <br />
              <ul>
                <li>
                  <p>
                    The IITs are the most prestigious institutes in India for
                    completing your technical education.&nbsp;
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    JEE(joint entrance exam) is the way to get a seat in the top
                    engineering institutes in India like IITs, NITs,
                    IIITs.&nbsp;
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    JEE is conducted in two phases i.e. (mains and advanced).
                    Those students who qualify mains are eligible to take
                    admissions in NIT, IIIT and other top engineering colleges.
                    The JEE main qualified students also need to give the
                    advanced exam and the Advanced qualified students can then
                    get admission into the IITs.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    &nbsp;JEE main has a lower difficulty level as compared to
                    JEE Advanced.&nbsp;
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    JEE is an objective type exam and consists of three sections
                    Physics, Chemistry &amp; Mathematics. Each section consists
                    of 30 questions so overall 90 questions. The duration of the
                    exam is 3 hours.&nbsp;
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    In the marking system, each correct answer will be given +4
                    marks and an incorrect answer will be given -1 marks.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    So, you need to be cautious while attempting the exam.
                    IIT-JEE is one of the difficult entrance exams for getting a
                    seat in the top technical institutes of India.&nbsp;
                  </p>
                </li>
              </ul>
            </div>
            <br />
            <h3>Eligibility:</h3>
            <br />
            <div className="para1">
              <ul>
                <li>
                  <p>
                    Students should have&nbsp;completed class 12th or should be
                    appearing in the current year.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    For admission in NITs, IIITs, IITs students must have a
                    score of 75% in class 12.
                  </p>
                </li>
              </ul>
              <br />
              <p>&nbsp;</p>
              <Button href={pdf1} target="_blank">
                Structure of Course
              </Button>
            </div>
            <br />
            <br />
            <i>
              Enroll for the course right away and experience quick revision and
              unsurpassed last-minute tips and learning with SHIKSHA 4.0.
              Don&rsquo;t let this wonderful opportunity go away. Grab it while
              you still can!
            </i>
            <br />
            <br />
            <p>
              The entire syllabus (topic wise) will be covered for&nbsp;
              <div className="redtext">
                Physics, Chemistry &amp; Mathematics of class 11th and 12th
              </div>
              , which will help students to score good marks in engineering
              entrance examinations and class 12th boards.
            </p>
            <br />
            <br />
            <div className="elem1iit">
              <h2>
                <FaHandPointRight /> Course Details
              </h2>
            </div>
            <br />
            <p>
              <b>860+</b> hrs LIVE CLASSES
            </p>
            <br />
            <p>
              <b>150+</b> WORKSHEETS
            </p>
            <br />
            <p>
              <b>100+</b> PRACTICE TESTS
            </p>
            <br />
            <p>
              <b>80+</b> STUDY BOOKS
            </p>
            <br />
            <p>
              <b>20+</b> FULL TESTS
            </p>
            <br />
            <p>This course is for class 12th and 12th pass-out students.</p>
            <br />
            <br />
            <div className="elem1iit">
              <h2>
                <FaHandPointRight /> Exclusive Features Of The Course
              </h2>
            </div>
            <br />
            <h3>1. This course will prepare students for</h3>
            <div className="para2">
              <p>IIT JEE Mains &amp; IIT JEE Advanced</p>
              <p>BITSAT</p>
              <p>GGSIPU</p>
              <p>VITEEE</p>
              <p>All State Level Engineering Entrance Examinations</p>
              <p>12th Boards.</p>
            </div>
            <br />
            <h3>2. LIVE CLASSES</h3>
            <p className="para2">
              Online live classes of&nbsp;
              <div className="redtext">860+ hours</div>, which provide a two-way
              interaction between students and teachers, are like normal
              coaching classes. The students are free to ask their doubts even
              in the middle of classes which is an advantage over video
              lectures. We prepare students for boards and entrance exams
              simultaneously.
            </p>
            <br />
            <h3>3. FREQUENCY OF CLASSES</h3>
            <p className="para2">
              The classes will be conducted&nbsp;
              <b>6 days/week</b>&nbsp;and&nbsp;<b>3 hours/day</b>.
            </p>
            <br />
            <h3>4. RECORDING OF CLASSES</h3>
            <p className="para2">
              All the live classes will be recorded for future reference.
            </p>
            <br />
            <h3>5. DOUBT REMOVAL CLASSES</h3>
            <p className="para2">
              Discussions and doubt sessions will be conducted from time to time
              during the course.
            </p>
            <br />
            <h3>6. ONE-TO-ONE ATTENTION</h3>
            <p className="para2">
              The teachers will pay complete attention to every student through
              online live classes, because of the smallest batch size.
              Individual guidance will be provided to help students thorough
              with rigorous JEE preparation.
            </p>
            <br />
            <h3>7. GLOBAL ANALYSIS</h3>
            <p className="para2">
              Via online live platforms, we provide competition &amp; analysis
              globally. Students will be from every corner of India and abroad
              (NRI students), and they will be tested on the same platform.
            </p>
            <br />
            <h3>8. TIME-SAVING, ECONOMICAL AND SAFE</h3>
            <p className="para2">
              Online live classes save a lot of travel time for student so that
              he/she can devote more time to studies. At this critical time of
              the COVID-19 pandemic, it is essential that everyone just stay
              home and stay safe.
            </p>
            <br />
            <h3>9. PROPER MONITORING AND FEEDBACK</h3>
            <p className="para2">
              Through the online platform, parents can keep a close eye on their
              child&rsquo;s performance and improvement.
            </p>
            <br />
            <h3>10. TEST SERIES</h3>
            <div className="para3">
              <p>
                Chapter-wise tests will be provided for checking the progress of
                each chapter. Full Mock Tests, completely based on the IIT JEE
                pattern, will be provided to students.
              </p>
              <br />
              <Button href={pdf2} className="btn-iit-2" target="_blank">
                Test Series
              </Button>
            </div>
            <br />
            <br />
            <h3>11. ASSIGNMENTS AND WORKSHEETS</h3>
            <p className="para3">
              Advanced Level Worksheets will be provided to maximize score on
              each topic.
            </p>
            <br />
            <h3>12. STUDY MATERIAL</h3>
            <div className="para3">
              <p>
                It is very crucial that you must use the right study material
                that will enhance preparation. Our material covers all the
                important topics from the syllabus and has content that aligns
                with the format and style of the JEE exam.
              </p>
              <br />
              <Button href={pdf3} className="btn-iit-2" target="_blank">
                Study Material
              </Button>
              <br />
              <br />
            </div>
            <br />
            <h3>13. REVISION</h3>
            <p className="para3">
              Revision is a continuous process in the JEE preparation. It must
              happen daily in some form or other. To crack JEE with a good rank,
              a good revision strategy is required.
            </p>
            <br />
            <h3>14. 40 YEAR PAPER ANALYSIS</h3>
            <br />
            <h3>15. TIPS AND TRICKS</h3>
            <div className="para3">
              <p>
                Students need to be smart and employ clever strategies to
                prepare productively for the exam.
              </p>
              <p>
                Besides, getting the right preparation will help make the entire
                process a much more manageable task.
              </p>
            </div>
            <br />
            <h3>16. MULTIPLE SOLUTION TECHNIQUE APPROACH</h3>
            <p className="para3">
              We teach you to solve a question in multiple ways. This will help
              you in learning alternative methods of approaching a problem.
            </p>
            <br />
            <h3>17. COUNSELING SESSIONS</h3>
            <div className="para3">
              <p>
                Counseling sessions will be conducted from time to time to gain
                confidence, stay motivated, and stay positive. These sessions
                will boost the preparation and confidence of students.
              </p>
              <br />
              <p>
                To know more about the&nbsp;
                <div className="redtext">IIT-JEE 1 Year Crash Course</div>
              </p>
              <p>
                or speak to our counseling expert on&nbsp;<b>+91-9821693299</b>
                &nbsp;or&nbsp;<b>+91-9599139063</b>
                &nbsp;or mail us your details to request a call back on&nbsp;
                <a
                  href="mailto:pshiksha4.0@gmail.com"
                  data-auto-recognition="true"
                >
                  pshiksha4.0@gmail.com
                </a>
              </p>
            </div>
          </div>
          <br />
        </div>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSeBmACT5U_gCTZhGTdN5COkaza56NkF_xPYTVXPPg24dhWniQ/closedform"
          className="btn-align-1"
          target="_blank"
        >
          Register Now
        </Button>
        <Button href={pdf4} className="btn-align-2" target="_blank">
          Fee Structure
        </Button>
        <Link to="/iitjeepay" target="_blank">
          <Button className="btn-align-3">Pay Now</Button>
        </Link>
        <br />
        <br />
        <br />
      </>
    );
}

export default Iitjee;