import React from 'react'
import "./OverseasCountries.css";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const Ireland = () => {
  return (
    <div className="ireland">
      <div className="overmain">
        <div className="overhead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>
              Ireland <ReactCountryFlag countryCode="ie" svg />
            </b>
          </h1>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Why Study In Ireland
          </h2>
        </div>
        <br />
        <p className="overpara1">
          <h3>Quality education</h3>
          <p>
            Ireland’s education system is among the best you’ll find.
            Universities in Ireland rank in the top 3% world-wide and graduates
            from Irish universities are attractive to employers the world over.
          </p>
          <br />
          <h3>Research opportunities</h3>
          <p>
            Irish universities are in the top 1% of research institutions in the
            world. Some of the world’s biggest and best companies have key
            strategic research facilities here and international students can
            join research programmes that are driving innovation and changing
            lives worldwide.
          </p>
          <br />
          <h3>Career opportunities</h3>
          <p>
            Many leading global companies are located in Ireland and career
            opportunities are plentiful. It is especially good for careers in
            Software Development and IT, Engineering, Financial Services, Food
            and Agriculture, Medtech and Pharma.
          </p>
          <br />
          <h3>Growing economy</h3>
          <p>
            The Irish economy is one of the fastest growing in the Eurozone and
            the 6th most competitive in the world. It is an entrepreneurial
            country with global connections.
          </p>
          <br />
          <h3>English language</h3>
          <p>
            English is the main language spoken and the global language of
            business and technology. Knowing how to read and write in English
            increases your marketability and gives you a big advantage if you’re
            aiming for a job in a multinational company or an English-speaking
            country.{" "}
          </p>
          <br />
          <h3>History and culture</h3>
          <p>
            Ireland is full of museums, cathedrals, parks and monuments and is
            famous for its contribution to arts, literature, film and music.
          </p>
        </p>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Requirements To Study In Ireland
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <p>
            For each course, a minimum academic score of 60% and above in
            Standard XII is required. Foundations and Diploma programmes are
            available for students who have secured around 50%. The student
            should have completed 18 years of age before joining a degree
            program. It is important to remember that even though entry
            requirement is lower at Irish universities, the education standard
            is not. Hence, you should carefully enhance your ability to cope
            with the high standard of education through the course of next few
            years beforehand.
          </p>
          <br />
          <p>The documents to be submitted are:</p>
          <br />
          <div className="overpara0">
            <ul>
              <li>
                Academic Transcripts: Mark Sheets of Standard X, XII, and the
                bachelor’s degree (if applicable)
              </li>
              <li>Internet-based TOEFL or IELTS scores</li>
              <li>
                If you have work experience then two letters of recommendation
                (LOR) from the employer/manager who knows you well and can
                comment on your professional abilities
              </li>
              <li>Statement of Purpose (SOP)</li>
              <li>Academic Resume</li>
              <li>
                Portfolio (in case of students applying for art and design
                courses or architecture programs)
              </li>
              <li>
                Others (Certificates/achievements at the state and national
                level and extracurricular activities)
              </li>
              <li>Proof of funds</li>
              <li>Health insurance</li>
              <li>A copy of your passport</li>
            </ul>
            <br />
          </div>
          <p>
            Photocopies of these documents should be translated in English and
            certified by the educational institution or by notary.
          </p>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Cost Of Studying In Ireland
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <p>
            The average tuition costs for attending a college in Ireland will
            vary according to the school, the course and the city your school is
            located in. The average rates for tuition vary from about €10,500
            and €30,000 per year. This amount varies and is based on a number of
            factors. There is no tuition fee for EU residents and the complete
            education is free, however, international students are supposed to
            bear their course costs. International students can also look at
            various financial assistance and scholarships available to them.
          </p>
          <br/>
          <h4>Living Expenses</h4>
          <br/>
          <p>
            On average, an international student needs approximately €600 to
            €1000 per month in Ireland. Prices differ a lot in the big cities
            and small towns all across Ireland, with Dublin being the most
            expensive city to live in.
          </p>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Scholarship To Study In Ireland
          </h2>
        </div>
        <br />
        <p className="overpara1">
            With so many Indian students applying to Ireland institutions,
            different facilities and exemptions have been made available to help
            them. These scholarships assist Indian and foreign students in
            decreasing the expenditure and cost to study in Ireland.
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

export default Ireland