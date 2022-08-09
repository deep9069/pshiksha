import React from 'react'
import "./OverseasCountries.css";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import uk1 from "../assets/uk1.png";
import uk2 from "../assets/uk2.png";

const Uk = () => {
  return (
      <div className="overmain">
        <div className="overhead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>
              United Kingdom <ReactCountryFlag countryCode="gb" svg />
            </b>
          </h1>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Why Study In United Kingdom
          </h2>
        </div>
        <br />
        <ul className="overpara1">
          <li>
            The UK institutions consistently rank among the best in the world
            and valued and recognised.
          </li>
          <br />
          <li>
            The UK undertakes 5 per cent of the world’s scientific research and
            produces 14 per cent of the world’s most frequently cited papers.
          </li>
          <br />
          <li>
            UK institutions offer flexibility of choice and enable you to choose
            academic and vocational courses of your choice.
          </li>
          <br />
          <li>
            The teaching and study methodology used in the UK give you the
            freedom to be creative.
          </li>
          <br />
          <li>
            As a student you get the opportunity to be taught by the world's
            leading academics and experts; you also benefit from their constant
            academic support.
          </li>
        </ul>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Requirements To Study in United Kingdom
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <h3>For Undergraduates</h3>
          <ul className="overpara0">
            <li>
              Certificate for completing 10+2 education from a recognised Indian
              broad with minimum marks.
            </li>
            <li>
              Original academic transcripts from previous academic institutions.
            </li>
            <li>Statement of Purpose</li>
            <li>Letters of Recommendations</li>
            <li>Scores of English Proficiency Tests</li>
            <li>Passport and other ID proof</li>
            <li>Bank statements to provide proof for Financial Funds</li>
            <li>Offer Letter</li>
            <li>Student visa</li>
          </ul>
          <br />
          <h3>For Postgraduates </h3>
          <ul className="overpara0">
            <li>
              An undergraduate degree from a recognised university in the same
              or related field with minimum acceptable marks.
            </li>
            <li>Official Academic transcripts</li>
            <li>Two letters of Recommendations</li>
            <li>Statement of Purpose</li>
            <li>English Proficiency Tests</li>
            <li>A detailed resume</li>
            <li>Financial Statements</li>
            <li>A valid passport</li>
            <li>Offer Letter</li>
            <li>Student Visa</li>
          </ul>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Cost Of Studying In United Kingdom
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <img src={uk1}></img>
          <br />
          <br />
          <p>
            *Please note that: all figures are indicative and PhD cost might
            differ as fully funded options are also available in the UK.
          </p>
          <br />
          <h4>Cost Of Living</h4>
          <br />
          <img src={uk2}></img>
          <br />
          <a
            href="https://www.coventry.ac.uk/international-students-hub/new-students/coming-to-the-uk/living-costs-in-the-uk/"
            className="overpara3"
            target="_blank"
          >
            Source
          </a>
          <br />
          <br />
          <p>*Please note that all figures are indicative.</p>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Scholarship For Indian Students To Study
            In United Kingdom
          </h2>
        </div>
        <br />
        <p className="overpara1">
          With so many Indian students applying to UK institutions, different
          facilities and exemptions have been made available to help them. These
          scholarships assist Indian and foreign students in decreasing the
          expenditure and cost to study in UK. Scholarships are awarded on the
          basis of merit, academic performance, or potential abilities.
          Interested students must contact our consultants for applying in
          scholarship program.
        </p>
        <br />
        <br />
      </div>
  );
}

export default Uk