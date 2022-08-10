import React from 'react'
import "./OverseasCountries.css";
import ReactCountryFlag from "react-country-flag";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import sin1 from "../assets/sin1.png";

const Singapore = () => {
  return (
      <div className="overmain">
        <div className="overhead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>
              Singapore <ReactCountryFlag countryCode="sg" svg />
            </b>
          </h1>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Why Study In Singapore
          </h2>
        </div>
        <br />
        <p className="overpara1">
          <h3>Cheaper than UK/ USA/ Australia</h3>
          <p>
            The best thing about studying in Singapore is its proximity to India
            which reduces the expenses incurred in this country as compared to
            major destinations like the USA, UK, Canada or Australia.
          </p>
          <br />
          <h3>No language barrier - English spoken widely</h3>
          <p>
            Indian students studying in Singapore will not face any problem
            feeling at home as English is widely spoken here and the majority of
            Singaporeans can understand English. Even though the national
            language of Singapore is Malay, the 4 official languages are Malay,
            Mandarin, Tamil & English.
          </p>
          <br />
          <h3>Clean, green and safe country</h3>
          <p>
            Singapore is the greenest city in Asia, with its green cover
            increasing from 36% in the eighties to 47% in 2016 (Centre for
            Liveable cities).
            <br />
            The crime rates are low, the streets are safe - even late in the
            night.
          </p>
          <br />
          <h3>A Leading Global Business Hub</h3>
          <p>
            Ranked by the World Bank in 2016 as the easiest country to do
            business with, Singapore continues to attract investors and
            companies thanks to its "business-friendly" nature.
          </p>
          <br />
          <h3>A degree from Singapore is valued by employers globally</h3>
          <p>
            The National University of Singapore (NUS) ranks 17th, the Nanyang
            Technological University ranks 117th on the Global Employability
            University Ranking 2015.
          </p>
        </p>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Requirements To Study In Singapore
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <ul>
            <li>Proof of acceptance for admission from the institution.</li>
            <li>A valid passport.</li>
            <li>Completed student application form.</li>
            <li>The receipt of the visa fee.</li>
            <li>Proof of funds.</li>
            <li>At least two passport size photos.</li>
            <li>Statement of Purpose.</li>
            <li>Academic certificates.</li>
            <li>Health insurance (if required).</li>
            <li>Proof of English proficiency.</li>
            <li>Student's bio-data.</li>
            <li>Employment history (if applicable).</li>
          </ul>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Cost Of Studying In Singapore
          </h2>
        </div>
        <br />
        <div className="overpara1">
          <p>
            <b>Popular Courses </b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Tuition Fees/ Per Annum </b>
          </p>
          <p>
            Arts and Social Sciences
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGD
            29,000 (INR 15,65,413)
          </p>
          <p>
            Medicine
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGD
            135,000 (INR 72,87,268)
          </p>
          <p>
            Law
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGD
            37,000 (INR 19,97,360)
          </p>
          <p>
            Media Studies
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGD
            37,000 (INR 19,97,360)
          </p>
          <p>
            Engineering/ Computer Science
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGD 37,000
            (INR 19,97,360)
          </p>
          <p>
            Architecture and Design
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGD
            38,000 (INR 20,50,896)
          </p>
          <br />
          <p>
            The average monthly living costs of studying in Singapore range from
            2,000S$ to 12,000 S$ (SGD) (INR 1,07,806 to INR 6,46,838).
          </p>
          <br />
          <h4>Cost Of Living</h4>
          <div className="overimg7">
            <img src={sin1}></img>
          </div>
        </div>
        <br />
        <br />
        <div className="overhead2">
          <h2>
            <BsFillPatchQuestionFill /> Scholarship To Study In Singapore
          </h2>
        </div>
        <br />
        <p className="overpara1">
          With so many Indian students applying to Singapore A institutions,
          different facilities and exemptions have been made available to help
          them. These scholarships assist Indian and foreign students in
          decreasing the expenditure and cost to study in Singapore.
          Scholarships are awarded on the basis of merit, academic performance,
          or potential abilities. Interested students must contact our
          consultants for applying in the scholarship program.
        </p>
        <br />
        <br />
      </div>
  );
}

export default Singapore