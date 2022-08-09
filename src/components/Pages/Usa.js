import React from 'react'
import "./OverseasCountries.css";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import usa1 from"../assets/usa1.png";
import usa2 from "../assets/usa2.png";

const Usa = () => {
  return (
      <div className="overmain">
        <div className="overhead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>
              United States of America <ReactCountryFlag countryCode="us" svg />
            </b>
          </h1>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Why Study In USA
          </h2>
        </div>
        <br />
        <p className="overpara1">
          <h3>Academic excellence</h3>
          <p>
            As per the QS World Ranking 2019. 33 of the top 100 universities are
            from the US. Similarly, Times Higher Education Ranking has also
            ranked seven of the American universities in its top 10 list of
            universities.
          </p>
          <br />
          <h3>Flexible education system</h3>
          <p>
            American universities and colleges offer various courses and
            programs to choose from. You have the freedom to not only select the
            course content, but also the structure.
          </p>
          <br />
          <h3>Excellent support system for international students</h3>
          <p>
            American universities understand the struggles of international
            students and therefore conduct regular orientation programs,
            workshops and trainings to offer assistance.
          </p>
          <br />
          <h3>Cultural diversity</h3>
          <p>
            The US is a melting pot of different cultures, races and
            ethnicities. Its diverse environment ensures that there is
            acceptance among all communities and there is no room for any sort
            of discrimination.
          </p>
          <br />
          <h3>Lively and vibrant campus life</h3>
          <p>
            It’s a known fact that campus life of the US is matchless.
            Irrespective of the university you study in, you will find yourself
            in the midst of new cultural experiences and the American way of
            life. Embrace it and open yourself up to new ideas and new people.
          </p>
        </p>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Requirements To Study In USA
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <ul>
            <li>
              Attested copies of mark sheets of class X, XII, and the Bachelor's
              degree (if applicable).
            </li>
            <li>
              At least, two academic reference letters from professors who have
              taught you most recently (Number of reference letters depends from
              university to university).
            </li>
            <li>
              If you have work experience then two letters of recommendation
              from the employer/manager who knows you well and can comment on
              your professional abilities.
            </li>
            <li>Statement of Purpose (SOP).</li>
            <li>Resume</li>
            <li>Essays (If demanded by the university).</li>
            <li>Photocopied score reports of GMAT / GRE / IELTS / TOEFL.</li>
            <li>
              Portfolio (in case of students applying for art and design courses
              and architecture programs).
            </li>
            <li>
              Others (certificates/achievements at the state and national level
              and extracurricular activities).
            </li>
            <li>Proof of funds.</li>
          </ul>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Cost Of Studying In USA{" "}
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <p>
            The tuition fee varies according to different universities, courses,
            and the city. The AVERAGE tuition cost in the US might be Rs 22.82
            lakh per year for an undergraduate course. And if you are thinking
            of applying for a post-graduate course, the cost would be Rs 20.37
            lakh per year approximately.
          </p>
          <br />
          <div className="overimg8">
            <img src={usa1}></img>
          </div>
          <br />
          <h4>Cost Of Living</h4>
          <br />
          <p>
            Considering various expenses and living costs, a single student
            budget in the US comes between US$ 10,000 and US$ 25,000 per
            academic year (indicative) depending on the city they choose to
            live. You should also consider these common expenses when creating
            your budget:
          </p>
          <br />
          <img src={usa2}></img>
          <br />
          <br />
          <p>All costs indicative and vary from region to region.</p>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Scholarship To Study In USA
          </h2>
        </div>
        <br />
        <p className="overpara1">
          With so many Indian students applying to USA institutions, different
          facilities and exemptions have been made available to help them. These
          scholarships assist Indian and foreign students in decreasing the
          expenditure and cost to study in USA. Scholarships are awarded on the
          basis of merit, academic performance, or potential abilities.
          Interested students must contact our consultants for applying in
          scholarship program.
        </p>
        <br />
        <br />
      </div>
  );
}

export default Usa