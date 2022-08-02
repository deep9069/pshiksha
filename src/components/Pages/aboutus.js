import React from 'react';
import './aboutus.css';
import { GrStatusGood } from "react-icons/gr";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const aboutus = () => {
  return (
    <div className="aboutus">
      <Container className="elem0as">
        <div data-testid="richTextElement">
          <div className="d-flex align-items-center flex-column">
            <h1 style={{ fontSize: "50px" }}>
              <b>
                About<span style={{ color: "#29e6a7" }}> Us</span>
              </b>
            </h1>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <div>
        <p>
          Premi Ji's Shiksha 4.0 is an education consultancy. We provided a
          number of education services at the comfort of your home. As you are
          stuck at home because of the wake of COVID-19, we are bringing classes
          to your home.
        </p>
        <br />
        <p>
          P. Shiksha 4.0 is a global ed, learning, and consultancy platform with
          a substantial and diversified base of consumers that includes
          students, professionals, universities, and corporates. We are building
          a mobility and learning community of people, students and global
          partnerships, to catalyze world citizenship. Our team is
          disintermediating the existing structure of services, and re-igniting
          our business model to help transform individuals and businesses in the
          backdrop of a borderless world.
        </p>
        <br />
        <p>
          To create a comprehensive and collaborative ecosystem, we will deliver
          a transformative experience to all our consumers and ensure that our
          work catalyses the global citizens of tomorrow, today. We are
          harnessing the power of technology and leveraging the expertise of our
          people.
        </p>
        <br />
        <p>
          We believe that education today must equip students to bravely define
          their own future in a constantly changing tomorrow. With this
          consultancy, we will prepare students to navigate a world that may
          vary well be dominated by automation; a world where jobs, businesses
          and industries going obsolete overnight is completely normal. Our vast
          experience in education will be channelled to deliver a transformative
          experience to all students. Through our work, we will prepare the
          thousand-year-old industry for profound change.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h2>
          <GrStatusGood /> Customer Centric
        </h2>
      </div>
      <br />
      <div>
        <p>
          We are obsessed with student-interest, unconditionally. We never drive
          our agenda.We are upfront and transparent, but never harsh. We focus
          on eliminating friction. In conversations, technology and experiences.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h2>
          <GrStatusGood /> Purposeful
        </h2>
      </div>
      <br />
      <div>
        <p>
          We understand our responsibility in shaping confident, impactful
          cosmopolitans of the future. We believe, we play a small but
          significant role and we do so with the highest standards and
          integrity. We don’t boast or gloat.Because we are style, not flash.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h2>
          <GrStatusGood /> Progressive
        </h2>
      </div>
      <br />
      <div>
        <p>
          We are ambitious and confident. We are here to challenge the status
          quo. We are a bunch of enthusiasts who work with agility to pre-empt
          the needs of our customers. We are perpetual learners, hungry to know
          more about our students, universities and industry. And we don't shy
          away from having some fun along the journey.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h2>
          <GrStatusGood /> Together
        </h2>
      </div>
      <br />
      <div>
        <p>
          At P. Shiksha 4.0, we are one. We don’t operate in silos but a
          collective community. We have a vision, and each of us, like a cog in
          the wheel contribute to it at every level. We are global. We are
          inclusive. We, just like our students, are cosmopolitans.
        </p>
      </div>
      <br/>
      <br/>
      <p className="elemaspara">We are "P. SHIKSHA 4.0"</p>
        <br/>
    </div>
  );
}

export default aboutus