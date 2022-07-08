import React from 'react'
import "./OverseasCountries.css";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const Newzealand = () => {
  return (
    <div className="newzealand">
      <div className="overmain">
        <div className="overhead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>
              New Zealand <ReactCountryFlag countryCode="nz" svg />
            </b>
          </h1>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Why Study In New Zealand
          </h2>
        </div>
        <br />
        <p className="overpara1">
          <h3>A world class education </h3>
          <p>
            Every single university in New Zealand is included in the QS World
            Rankings.
          </p>
          <br />
          <h3>Lower tuition fees & lots of scholarships</h3>
          <p>
            While New Zealand’s education system is based heavily on the British
            one, it comes at a lower cost. Tuition fees for a year tend to cost
            around NZ$20,000, or just under £10,000. That should leave you with
            a little more money to have fun with!
          </p>
          <br />
          <h3>A fantastic culture</h3>
          <p>
            New Zealand has a rich cultural heritage, a meeting point of British
            influenced Western ways and traditional culture of the indigenous
            Māori people.
          </p>
          <br />
          <h3>Work while you study (and after)</h3>
          <p>
            This is a huge advantage! While a lot of countries don’t allow you
            to take up part time work while on student visa New Zealand does.
            Sure, you may not want to (or have to) work while studying, but for
            those of you that do want to earn a little extra spending money,
            you’re free to do so.
          </p>
        </p>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Requirements To Study In New Zealand
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <ul>
            <li>
              Relevant 12th certificate/undergraduate degree/master’s degree
              from a recognized university in the relevant field (minimum marks
              depend upon the university and department opted for).
            </li>
            <li>
              Proficiency in the English Language like valid
              IELTS/TOEFL/PTE/Duolingo scores.
            </li>
            <li>Entrance like GMAT or GRE Scores.</li>
            <li>Resume/CV (course-specific requirement).</li>
            <li>Statement of Purpose.</li>
            <li>Recommendation Letters.</li>
            <li>Valid Passport.</li>
            <li>
              Bank Statements and proof of financial coverage for your entire
              study abroad timeline.
            </li>
          </ul>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Cost Of Studying & Living In New Zealand
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <p>
            The following table shows the average tuition fee for the courses
            available at colleges in New
          </p>
          <br />
          <p>
            <b>Degree Program</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Average Tuition Fee (Annually) in NZ(in $)</b>
          </p>
          <p>
            Diploma and Short Term Courses
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12000-18500/-
          </p>
          <p>
            Bachelor’s Degree
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22000-32000/-
          </p>
          <p>
            Master’s Degree
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26000-37000/-
          </p>
          <p>
            PhD
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6500-9000/-
          </p>
          <br />
          <p>
            An international student studying in New Zealand is likely to spend
            around 13000 to 16000 NZ$ per year to study in the country. This
            cost is likely to remain the same throughout courses. The cost of
            accommodation for a three-four bedroom house is NZ$565 (INR 29390)
            per week in 2020, or NZ$215 (INR 11184) a room per week.
          </p>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Scholarship To Study In New Zealand
          </h2>
        </div>
        <br />
        <p className="overpara1">
          With so many Indian students applying to New Zealand institutions,
          different facilities and exemptions have been made available to help
          them. These scholarships assist Indian and foreign students in
          decreasing the expenditure and cost to study in New Zealand.
          Scholarships are awarded on the basis of merit, academic performance,
          or potential abilities. Interested students must contact our
          consultants for applying in scholarship program.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Newzealand