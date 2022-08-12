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
            <h1 style={{ fontSize: "45px" }}>
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
      <br/>
      <div className="wrapper">
        <Card
          img={pic1}
          title="TECHNICAL"
          description="Improve your Technical Skills"
          high0="Domains"
          high1="✓ Website Development"
          high2="✓ Data Analyst / Power BI"
          high3="✓ Artificial Intelligence"
          high4="✓ Machine Learning"
          high5="Plans"
          high6="6 - 8 weeks - 3 hours / week - Online"
          high7="Open for 12 months - Online / Offline"
          linkto="https://pages.razorpay.com/pl_JoSgo2NznMb19Q/view"
          high8="Perks"
          high9="1. Internship Certificate"
          high10="2. Training By Professionals"
          high11="3. Letter Of Appreciation"
          high12="4. Letter Of Recommendation"
          high13="Price"
          high14="₹ 7,080/-"
        />

        <Card
          img={pic2}
          title="NON TECHNICAL"
          description="Improve your Non-Technical Skills"
          high0="Domains"
          high1="✓ Professional Communication Skills"
          high2="✓ Digital Marketing"
          high5="Plans"
          high6="6 weeks - 3 hours / week - Online"
          high7="Open for 12 months - Online / Offline"
          linkto="https://pages.razorpay.com/pl_JoSgo2NznMb19Q/view"
          high8="Perks"
          high9="1. Internship Certificate"
          high10="2. Training By Professionals"
          high11="3. Letter Of Appreciation"
          high12="4. Letter Of Recommendation"
          high13="Price"
          high14="₹ 7,080/-"
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
        <img src={props.img}  alt="" class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <div className="highlights">
          <br />
          <b>{props.high0}</b>
          <br />
          <br />
          <i>{props.high1}</i>
          <br />
          <br />
          <i>{props.high2}</i>
          <br />
          <br />
          <i>{props.high3}</i>
          <br />
          <br />
          <i>{props.high4}</i>
          <br />
          <br />
          <b>{props.high5}</b>
          <br />
          <br />
          {props.high6}
          <br />
          <br />
          {props.high7}
          <br />
          <br />
          <b>{props.high8}</b>
          <br />
          <br />
          {props.high9}
          <br />
          <br />
          {props.high10}
          <br />
          <br />
          {props.high11}
          <br />
          <br />
          {props.high12}
          <br />
          <br />
          <b>{props.high13}</b>
          <br />
          <br />
          {props.high14}
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
