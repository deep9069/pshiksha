import './Training.css'
import React from 'react';
import pic1 from "../assets/tech.png";
import pic2 from "../assets/nontech.png";
import card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import "./Ielts.css";

function Training() {
  return (
    <div className="sldi98">
      <Container className="elem0train">
        <div data-testid="richTextElement">
          <div className="d-flex align-items-center flex-column">
            <h1 style={{ fontSize: "50px" }}>
              <b>
                Online Training Cum
                <span style={{ color: "#29e6a7" }}>
                  {" "}
                  Internship Certification Programme
                </span>
              </b>
            </h1>
          </div>
        </div>
      </Container>
      <div className="wrapper">
        <Card
          img={pic1}
          title="TECHNICAL"
          description="Improve your Technical Skills"
          high0="Domains"
          high1="Power BI"
          high2="Website Development"
          high3="Plans"
          high4="6 - 8 weeks"
          high5="Open for 12 months - Online / Offline"
          linkto="https://pages.razorpay.com/pl_JoSgo2NznMb19Q/view"
          high6="Perks"
          high7="1. Internship Certificate"
          high8="2. Training By Professionals"
          high9="3. Letter Of Appreciation"
          high10="Price"
          high11="₹ 5,999/-"
        />

        <Card
          img={pic2}
          title="NON TECHNICAL"
          description="Improve your Non-Technical Skills"
          high0="Domains"
          high1="Digital Marketing"
          high2="Professional Communication Skills"
          high3="Plans"
          high4="6 weeks - 3 hours / week - Online"
          high5="Open for 12 months - Online / Offline"
          linkto="https://pages.razorpay.com/pl_JoSgo2NznMb19Q/view"
          high6="Perks"
          high7="1. Internship Certificate"
          high8="2. Training By Professionals"
          high9="3. Letter Of Appreciation"
          high10="Price"
          high11="₹ 5,999/-"
        />
      </div>
      <br />
      <br />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <div className="highlights">
          <br />
          <b>{props.high0}</b>
          <br />
          <br />
          &#10003; <i>{props.high1}</i>
          <br />
          <br />
          &#10003; <i>{props.high2}</i>
          <br />
          <br />
          <b>{props.high3}</b>
          <br />
          <br />
          {props.high4}
          <br />
          <br />
          {props.high5}
          <br />
          <br />
          <b>{props.high6}</b>
          <br />
          <br />
          {props.high7}
          <br />
          <br />
          {props.high8}
          <br />
          <br />
          {props.high9}
          <br />
          <br />
          <b>{props.high10}</b>
          <br />
          <br />
          {props.high11}
          <br />
          <br />{" "}
        </div>
      </div>
      <card.Link className="card__btn" href={props.linkto} target="_blank">
        Start Now
      </card.Link>
    </div>
  );
}

export default Training;
