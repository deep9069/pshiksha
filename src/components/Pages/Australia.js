import React from 'react';
import "./OverseasCountries.css";
// import aus from "../assets/aus.png";
import aus1 from "../assets/aus1.png";
import aus2 from "../assets/aus2.png";
import aus3 from "../assets/aus3.png";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const Australia = () => {
  return (
    <div className="australia">
      <div className="overmain">
          <div className="overhead1">
            <h1 style={{ fontSize: "40px" }}>
              <b>
                Australia <ReactCountryFlag countryCode="au" svg />
              </b>
            </h1>
          </div>
          <br />
          <br />
          <div className="overhead2">
            <h2>
              <BsFillPatchQuestionFill /> Why Study In Australia
            </h2>
          </div>
          <br />
          <p className="overpara1">
            <h3>Growing Destination</h3>
            <p>
              Australia is currently the third most popular destination for
              international students in the English-speaking world, behind the
              United States and the UK.
            </p>
            <br />
            <h3>Global Recognition</h3>
            <p>
              Graduates from Australian schools are recognized due to the
              impressive international reputation of the Australian education
              system.
            </p>
            <br />
            <h3>Cost of Living</h3>
            <p>
              Living expenses and tuition costs are lower in Australia than they
              are in the United States and United Kingdom. International
              students are able to work part time while they study.
            </p>
            <br />
            <h3>Diversity of Education</h3>
            <p>
              Institutions in Australia offer a wide variety of courses and
              degrees, so international students can easily choose area of their
              interest.
            </p>
            <br />
            <h3>Technology</h3>
            <p>
              One of the most appealing thing of Australia for international
              students is the emphasis on scientific research.{" "}
            </p>
            <br />
            <h3>Work</h3>
            <p>
              International students are allowed to work up to 20 hours per week
              while studying in Australia. This is a great opportunity for those
              who want to earn money for their living expenses.
            </p>
          </p>
          <br />
          <br />
          <div className="overhead2">
            <h2>
              <BsFillPatchQuestionFill /> Requirements To Study In Australia
            </h2>
          </div>
          <br />
          <div className="overpara1">
            <ul>
              <li>
                <p>
                  Secondary and higher secondary report or certificate along
                  with the transcripts (mark sheets or report cards) of the
                  final exams. It is ideal to convert the marks obtained in
                  accordance with Australia's grading system. IELTS and GMAT
                  exam scorecard (in case the student is applying for an MBA
                  course) must be provided. The minimum scores in IELTS and GMAT
                  exam may vary from education provider to provider. Refer to
                  the particular university website to see the eligibility
                  requirements for the course.
                </p>
              </li>
              <br />
              <li>
                <p>
                  If you are applying for an MBA degree or a degree in higher
                  education like doctoral programs; you may be required to
                  provide work experience certificates or letters, mentioning
                  the complete work details: key responsibilities and positions
                  held. A detailed CV is also mandatory.
                </p>
              </li>
              <br />
              <li>
                <p>
                  A statement of purpose or personal essay mentioning career
                  goals, interests, extracurricular activities, and why the
                  student has chosen the particular stream and how he/she will
                  manage financially during the stay in Australia needs to be
                  provided.
                </p>
              </li>
              <br />
              <li>
                <p>
                  Letter of recommendation (two recommended) from the person who
                  has taught the student or knows him/her professionally,
                  highlighting the strengths weaknesses of the student and why
                  he/she would excel in the chosen field, also needs to be
                  provided.
                </p>
              </li>
            </ul>
            <br />
          </div>
          <br />
          <br />
          <div className="overhead2">
            <h2>
              <BsFillPatchQuestionFill /> Cost Of Studying In Australia For
              Indian Students
            </h2>
          </div>
          <br />
          <div className="overpara1">
            <h3>1. Tuition fee is your prime expenditure</h3>
            <div className="overimg1">
              <img src={aus1}></img>
              <br />
              <br />
              <p>
                *Please note all figures are indicative.
                <br /> Most commonly, courses in humanities, arts and education
                are a little cheaper.
              </p>
            </div>
            <br />
            <h3>2. Where will you live? Calculate accommodation costs</h3>
            <div className="overimg1">
              <img src={aus2}></img>
              <br />
              <a
                href="https://www.studyinaustralia.gov.au/english/live-in-australia/living-costs"
                className="overpara3"
                target="_blank"
              >
                Source
              </a>
              <br />
              <br />
              <h4>Living Expenses</h4>
              <br />
              <p>
                Government, general living expenses amount to $21,041 per year.
                An international student spends between $20,000 and $27,000 per
                year (given your living arrangements and personal choices).{" "}
                <br />
                <br />
                You should also consider these common expenses when creating
                your budget:
              </p>
              <br />
              <img src={aus3}></img>
              <br />
              <a
                href="https://www.studyinaustralia.gov.au/english/live-in-australia/living-costs"
                className="overpara3"
                target="_blank"
              >
                Source
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="overhead2">
            <h2>
              <BsFillPatchQuestionFill /> Scholarship To Study In Australia
            </h2>
          </div>
          <br />
          <p className="overpara1">
            With so many Indian students applying to Australian institutions,
            different facilities and exemptions have been made available to help
            them. These scholarships assist Indian and foreign students in
            decreasing the expenditure and cost to study in Australia.
            Scholarships are awarded on the basis of merit, academic
            performance, or potential abilities. Interested students must
            contact our consultants for applying in the scholarship program.
          </p>
          <br />
          <br />
      </div>
    </div>
  );
}

export default Australia
