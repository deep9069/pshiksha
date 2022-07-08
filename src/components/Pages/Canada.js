import React from 'react'
import "./OverseasCountries.css";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import can1 from "../assets/can1.png";
import can2 from "../assets/can2.png";
import can3 from "../assets/can3.png";
import can4 from "../assets/can4.png";
import can5 from "../assets/can5.png";

const Canada = () => {
  return (
    <div className="canada">
      <div className="overmain">
        <div className="overhead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>
              Canada <ReactCountryFlag countryCode="ca" svg />
            </b>
          </h1>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Why Study In Canada
          </h2>
        </div>
        <br />
        <p className="overpara1">
          <ul>
            <li>
              Canada spends more per capita on its education system than any
              other country in the G-8 and is among the top three countries in
              the Organization for Economic Cooperation and Development (OECD).
            </li>
            <br />
            <li>
              A degree from a Canadian university is recognized worldwide and as
              a result, international students who graduate from Canadian
              universities enjoy successful and prosperous careers.
            </li>
            <br />
            <li>
              Canada's universities and colleges are world-renowned for their
              high standards, safe campuses, and educational excellence.
            </li>
            <br />
            <li>
              They are at the forefront of the information technology revolution
              and ensure that their students are equipped for the 21st century.
            </li>
            <br />
            <li>
              A degree from a Canadian university is considered equivalent to an
              American degree.
            </li>
            <br />
            <li>
              The wide choice of schools in Canada includes major research
              institutions as well as small liberal arts schools and a full
              range of undergraduate, graduate and professional degree programs
            </li>
            <br />
            <li>
              Many Canadian Universities offer the opportunity to go beyond an
              ordinary degree by participating in international exchanges and
              co-operative work-experience programs or by participating in
              extra-curricular activities and athletics. Co-op work experience
              programs allow students to combine academic semesters with work
              terms that relate directly to their degree.
            </li>
            <br />
            <li>
              Sports at Canadian universities and colleges are popular and
              competitive.
            </li>
            <br />
            <li>
              Canada is a world leader in software development,
              telecommunications, aerospace engineering, urban transport,
              biotechnology, mining technology and environmental industries.
            </li>
          </ul>
        </p>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Requirements To Study In Canada
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <p>
            Admission requirements vary from one institution to another, but
            common pre-requites are :
          </p>
          <br />
          <ul className="overpara0">
            <li>
              <p>
                Minimum 12th grade for undergraduate study in a university
                Community colleges and Technical Institutes are more flexible).
              </p>
            </li>
            <li>
              <p>
                Minimum of 550 in your TOEFL score (paper based test)/213
                (computer based test) or 6.5 in your IELTS Academic training
                test.
              </p>
            </li>
            <li>
              <p>
                For Masters degree you require 16 years of education (10+2+4).
              </p>
            </li>
            <li>
              Work experience and a GMAT score of 600 range for MBA Programmes.
            </li>
          </ul>
          <br />
          <p>
            There is no Canada-wide entrance test, each university sets its own
            admission standards and assesses the qualifications of each
            applicant individually.
          </p>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Cost Of Studying In Canada For Indian
            Students
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <h4>Cost of Studying in Canada for Indian Students</h4>
          <div className="overimg2">
            <img src={can1}></img>
          </div>
          <h4>Cost of Study in Canada for (Bachelor's Degree)</h4>
          <div className="overimg3">
            <img src={can2}></img>
          </div>
          <h4>Cost of Study in Canada for (Master's Degree)</h4>
          <div className="overimg4">
            <img src={can3}></img>
          </div>
          <br />
          <h4>Canada College Application Fees</h4>
          <br />
          <p>
            A Canadian study permit is required for students who intend to apply
            to any university for academic or professional training. For courses
            lasting more than six months, study permission is necessary.
            Students who are admitted to a programme that lasts less than six
            months are recommended to apply for a study visa in case they wish
            to prolong their stay. The application fee for a Study Permit is
            CAD150 (INR 8,542). The application cost is determined by the
            student's nationality as well as the university to which they are
            applying. Along with the letter of admission and other documents,
            students are required to submit proof of funds and the Minimum Bank
            Balance Required to apply for a Canadian Student visa is INR
            11,00,000 or more for one year.
          </p>
          <br />
          <h4>Cost of living in Canada</h4>
          <div className="overimg5">
            <img src={can4}></img>
          </div>
          <div className="overimg6">
            <img src={can5}></img>
          </div>
          <br />
          <h5>
            * The above data is intended as a general information guide only and
            the information it contains may vary from place to place and time to
            time. Contact SoA consultant for appropriate prices.
          </h5>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Scholarship To Study In Canada
          </h2>
        </div>
        <br />
        <p className="overpara1">
          With so many Indian students applying to Canadian institutions,
          different facilities and exemptions have been made available to help
          them. These scholarships assist Indian and foreign students in
          decreasing the expenditure and cost to study in Canada. Scholarships
          are awarded on the basis of merit, academic performance, or potential
          abilities. Interested students must contact our consultants for
          applying in scholarship program.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Canada