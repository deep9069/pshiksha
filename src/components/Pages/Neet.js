import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Neet.css";
import { FaHandPointRight } from "react-icons/fa";
import pdf1 from "../assets/Shiksha_NEET.pdf";
import pdf2 from "../assets/Online_test_series_neet.pdf";
import pdf3 from "../assets/Study_Material_Neet.pdf";
import pdf4 from "../assets/NEET_Fee_Package.pdf";
import Update from "../../pages/updateofdata";
export function Neet() {
  return (
    <>
      <div className="neet">
        <Container className="elem0neet">
          <div data-testid="richTextElement">
            <div className="d-flex align-items-center flex-column">
              <h1 style={{ fontSize: "50px" }}>
                <b>
                  NEET<span style={{ color: "#29e6a7" }}> Coaching</span>
                </b>  
              </h1>
            </div>
          </div>
        </Container>
        <div className="elem_0neet">
          <h2>
            1 Year Crash Course For{" "}
            <span style={{ color: "#29e6a7" }}> NEET</span>
          </h2>
        </div>
        <br />
        <br />
        <div data-testid="richTextElement">
          <p>
            A Premiere coaching institute for preparation of NEET and all state
            level medical entrance exams. Our vision is to provide students with
            best academic mentorship to help them grow both academically and
            socially.
          </p>
          <br />
          <br />
          <div className="elem1neet">
            <h2>
              <FaHandPointRight /> What is NEET?
            </h2>
          </div>
          <br />
          <div className="para1">
            <ul>
              <li>
                <p>
                  NEET (national eligibility cum entrance state) is entrance
                  exam for getting admission in MBBS, BDS, Ayush courses.&nbsp;
                </p>
              </li>
              <br />
              <li>
                <p>
                  The exam is conducted by NTA every year. It’s compulsory to
                  clear the exam if you are seeking to get admission in medical
                  field in India.
                </p>
              </li>
              <br />
              <li>
                <p>
                  The exam is in MCQ format. It consists of four sections
                  Physics, Chemistry, Zoology & Botany. Each section consists of
                  45 questions. 180 marks for each section so overall the 720
                  marks with 3 hours duration.
                </p>
              </li>
              <br />
              <li>
                <p>
                  &nbsp;In the marking system, each correct answer will be given
                  +4 marks and an incorrect answer will be given -1 marks.&nbsp;
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
                  Age limit : 17 to 25 year for general category. : 17 to 30
                  year for SC/ST/OBC/PWD.
                </p>
              </li>
              <br />
              <li>
                <p>
                  For admission in MBBS, the student must have passed class 12th
                  with PCB 50% for general category and 40% for reserved
                  category.
                </p>
              </li>
            </ul>
            <br />
            <i>
              As per NTA, for NEET a total of 15,44,275 students appeared for
              the exam out of which 8,70,075 qualified.
            </i>
            <br />
          </div>
          <br />
          <br />
          <div className="elem1neet">
            <h2>
              <FaHandPointRight /> Why Shiksha?
            </h2>
          </div>
          <div className="para1">
            <br />
            <ul>
              <li>
                <p>
                  We focus on constructive growth of students thereby building
                  strong foundation to solve problems conceptually.
                </p>
              </li>
              <br />
              <li>
                <p>
                  We aim to provide students with best academic support to get
                  into their dream college and achieve their career goals.
                </p>
              </li>
              <br />
              <li>
                <p>
                  Shiksha is well equipped with the faculty which is highly
                  dedicated and have cleared NEET with highest benchmark.
                </p>
              </li>
              <br />
              <li>
                <p>Thorough study and assessment of each subject topic-wise.</p>
              </li>
              <br />
              <li>
                <p>
                  Comprehensive study material which helps in depth
                  understanding of concepts and up-to-date with latest exam
                  pattern.
                </p>
              </li>
              <br />
              <li>
                <p>Doubt clearing sessions and one-to-one mentorship.</p>
              </li>
              <br />
              <li>
                <p>
                  Test series for proper understanding of topics and proper
                  analysis of performance of each student.
                </p>
              </li>
              <br />
              <li>
                <p>860+ hours of live teaching sessions.</p>
              </li>
              <br />
            </ul>
            <Button href={pdf1} target="_blank">
              Structure of Course
            </Button>
            <br />
            <br />
            <br />
            <i>
              As per NTA, for NEET a total of 15,44,275 students appeared for
              the exam out of which 8,70,075 qualified.
            </i>
          </div>
          <br />
        </div>
        <br />
        <div className="elem1neet">
          <h2>
            <FaHandPointRight /> NEET Course Details
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
        <div className="elem1neet">
          <h2>
            <FaHandPointRight /> Exclusive Features Of The Course
          </h2>
        </div>
        <br />
        <h3>1. This course will prepare students for</h3>
        <div className="para2">
          NEET All State Level Medical Entrance Examinations 12th Boards.{" "}
        </div>
        <br />
        <h3>2. LIVE CLASSES</h3>
        <p className="para2">
          Online live classes of&nbsp;
          <div className="redtext">860+ hours</div>, which provide a two-way
          interaction between students and teachers, are like normal coaching
          classes. The students are free to ask their doubts even in the middle
          of classes which is an advantage over video lectures. We prepare
          students for boards and entrance exams simultaneously.
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
          online live classes, because of the smallest batch size. Individual
          guidance will be provided to help students thorough with rigorous NEET
          preparation.
        </p>
        <br />
        <h3>7. GLOBAL ANALYSIS</h3>
        <p className="para2">
          Via online live platforms, we provide competition &amp; analysis
          globally. Students will be from every corner of India and abroad (NRI
          students), and they will be tested on the same platform.
        </p>
        <br />
        <h3>8. TIME-SAVING, ECONOMICAL AND SAFE</h3>
        <p className="para2">
          Online live classes save a lot of travel time for student so that
          he/she can devote more time to studies. At this critical time of the
          COVID-19 pandemic, it is essential that everyone just stay home and
          stay safe.
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
            each chapter. Full Mock Tests, completely based on the NEET pattern,
            will be provided to students.
          </p>
          <br />
          <Button href={pdf2} className="btn-neet-2" target="_blank">
            Test Series
          </Button>
        </div>
        <br />
        <br />
        <br/>
        <h3>11. ASSIGNMENTS AND WORKSHEETS</h3>
        <p className="para3">
          Advanced Level Worksheets will be provided to maximize score on each
          topic.
        </p>
        <br />
        <h3>12. STUDY MATERIAL</h3>
        <div className="para3">
          <p>
            It is very crucial that you must use the right study material that
            will enhance preparation. Our material covers all the important
            topics from the syllabus and has content that aligns with the format
            and style of the NEET exam.
          </p>
          <br />
          <Button href={pdf3} className="btn-neet-2" target="_blank">
            Study Material
          </Button>
          <br />
          <br />
        </div>
        <br />
        <h3>13. REVISION</h3>
        <p className="para3">
          Revision is a continuous process in the NEET preparation. It must
          happen daily in some form or other. To crack NEET with a good rank, a
          good revision strategy is required.
        </p>
        <br />
        <h3>14. 40 YEAR PAPER ANALYSIS</h3>
        <br />
        <h3>15. TIPS AND TRICKS</h3>
        <div className="para3">
          <p>
            Students need to be smart and employ clever strategies to prepare
            productively for the exam. Besides, getting the right preparation
            will help make the entire process a much more manageable task.
          </p>
        </div>
        <br />
        <h3>16. MULTIPLE SOLUTION TECHNIQUE APPROACH</h3>
        <p className="para3">
          We teach you to solve a question in multiple ways. This will help you
          in learning alternative methods of approaching a problem.
        </p>
        <br />
        <h3>17. COUNSELING SESSIONS</h3>
        <div className="para3">
          <p>
            Counseling sessions will be conducted from time to time to gain
            confidence, stay motivated, and stay positive. These sessions will
            boost the preparation and confidence of students.
          </p>
          <br />
          <p>
            To know more about the&nbsp;
            <div className="redtext">NEET 1 Year Crash Course</div>
          </p>
          <p>
            or speak to our counseling expert on&nbsp;<b>+91-9821693299</b>
            &nbsp;or&nbsp;<b>+91-9599139063</b>
            &nbsp;or mail us your details to request a call back on&nbsp;
            <a href="mailto:pshiksha4.0@gmail.com" data-auto-recognition="true">
              pshiksha4.0@gmail.com
            </a>
          </p>
        </div>
      </div>
      <br />
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
      <Link to="/neetpay" target="_blank">
        <Button className="btn-align-3">Pay Now</Button>
      </Link>
      <br />
      <br />
      <br />
      <Update/>
    </>
  );
}

export default Neet;
