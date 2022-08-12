import React,{ useState } from "react";
import './Internship.css'
import { Container } from "react-bootstrap";
import "./Ielts.css";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Internship = () => {
	return (
    <div className="internship">
      <div id="comp-kpfaw7sg" data-testid="richTextElement">
        <Container className="elem_0intern">
          <div data-testid="richTextElement">
            <div className="d-flex align-items-center flex-column">
              <h1 style={{ fontSize: "50px" }}>
                <b>
                  Internship
                  <span style={{ color: "#29e6a7" }}> Announcement</span>
                </b>
              </h1>
            </div>
          </div>
        </Container>
      </div>
      <div id="comp-kpflgr5m" class="_2Hij5"  data-testid="richTextElement">
        <p class="font_2">
          We are offering Internships in different departments. This internship
          will help you to understand and enhance your skills while working with
          us. This internship is partially online and partially offline by
          keeping in mind your safety during the pandemic of COVID-19. This
          internship will help you to gain work experience or satisfy
          requirements for a qualification. This internship programme is framed
          by keeping in mind the All India Council of Technical Education
          (AICTE) norms &amp; guidelines.
        </p>
      </div>
      <div id="comp-kvjr99kw" class="_2Hij5" data-testid="richTextElement">
        <div className="element1ntern">
          <h2>
            <FaHandPointRight /> Open Positions
          </h2>
        </div>
      </div>
      <div id="comp-kpfbvy2g" class="_2Hij5" data-testid="richTextElement">
        <p class="font_2">
          Internship is open for the following positions (position code):
          <br />
          <br />
          1. Business Development Analyst Intern&nbsp; (IN01-2021)
          <br />
          2. Business Development Intern in Marketing (IN02-2021)
          <br />
          3. Business Development Intern in Sales (IN03-2021)
          <br />
          4. Business Development Intern in Research &amp; Operations
          (IN04-2021)
          <br />
          5. Business Development Intern in Management (IN05-2021)
          <br />
          6. Creative Website Designer (IN06-2021)
        </p>
      </div>
      <div class="verticalLine"></div>
      <div id="comp-kvjrfq2h" class="_2Hij5" data-testid="richTextElement">
        <div className="element1ntern">
          <h2>
            <FaHandPointRight /> Eligibilty
          </h2>
        </div>
      </div>
      <div id="comp-kvp2a733" class="_2Hij5" data-testid="richTextElement">
        <p class="font_2">Open for all branches, 3rd and 4th year students</p>
      </div>
      <div class="verticalLine"></div>
      <div id="comp-kvjrjlxg" class="_2Hij5" data-testid="richTextElement">
        <div className="element1ntern">
          <h2>
            <FaHandPointRight /> Stipend
          </h2>
        </div>
      </div>
      <div id="comp-kvwdxpzh" class="_2Hij5" data-testid="richTextElement">
        <p class="font_2">
          Upto&nbsp;<span class="color_15">7-12%</span>&nbsp;of the revenue
          generated by the interns
          <br />
          <i>or</i>
          <br />
          Upto&nbsp;<span class="color_15">80,000 INR</span>
        </p>
      </div>
      <div class="verticalLine"></div>
      <div id="comp-kvjrkd1u" class="_2Hij5" data-testid="richTextElement">
        <div className="element1ntern">
          <h2>
            <FaHandPointRight /> Perks
          </h2>
        </div>
      </div>
      <div id="comp-kvwdykul" class="_2Hij5" data-testid="richTextElement">
        <p class="font_2">
          ~ Certificate of completion
          <br />
          ~ Letter of Appreciation
          <br />
          ~ Exposure with the organization
          <br />~ Direct interaction with the clients
        </p>
      </div>
      <div class="verticalLine"></div>
      <div id="comp-kvwe08dk" class="_2Hij5" data-testid="richTextElement">
        <div className="element1ntern">
          <h2>
            <FaHandPointRight /> Mode
          </h2>
        </div>
      </div>
      <div id="comp-kvwe0egz" class="_2Hij5" data-testid="richTextElement">
        <p class="font_2">
          <span class="color_14">Online</span>&nbsp;or&nbsp;
          <span class="color_14">Offline</span>, depends on student's will
        </p>
      </div>
      <div class="verticalLine"></div>
      <div id="comp-kvjrne98" class="_2Hij5" data-testid="richTextElement">
        <div className="element1ntern">
          <h2>
            <FaHandPointRight /> Application Process
          </h2>
        </div>
      </div>
      <div id="comp-kvwe2275" class="_2Hij5" data-testid="richTextElement">
        <p class="font_2">
          Interested applicants are encouraged to submit an expression of
          interest through an e-mail.
          <br />
          Please ensure the below documents should be attached to the e-mail:
          <br />
          <br />~ A concise cover letter that describes your suitability for
          this position (max 1 page)
          <br />~ A copy of your current CV.
        </p>
      </div>
      <div id="comp-kvwe1a8l" class="_2Hij5" data-testid="richTextElement">
        Applications can be applied through e-mail or the link given below
        <br />
        <br />
        <div class="verticalLine1"></div>
        <br />
        Duration Of The Internship: <b>6 - 8 Weeks</b>
        <br />
        <br />
        <div class="verticalLine1"></div>
        <br />
        <br />
        <a
          href="https://dare2compete.com/o/lsKFtfX?lb=0YxdjR5"
          target="_blank"
          rel="noreferrer"
          className="btn-intern1"
        >
          Start Today!
        </a>
        <br />
        <br />
        <br />
        <br />
        Interested in <b>Internship without Interview</b> checkout&nbsp;
        <Link
          to="/intern_without_interview"
          target="_blank"
          className="link-here"
        >
          here
        </Link>
      </div>
    </div>
  );
}

export default Internship;
