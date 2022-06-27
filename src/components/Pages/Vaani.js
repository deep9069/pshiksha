import './Vaani.css'
import React from 'react';
import pic1 from "../assets/learn-web-d.jpg";
import pic2 from "../assets/learn-non-tech.jpg";
import card from "react-bootstrap/Card";

function Vaani() {
  return (
    <div className="sldi98">
      <div className="headv">
        <h2 class="font_5">
          ONLINE INTERNSHIP CUM TRAINING CERTIFIED PROGRAMME
        </h2>
      </div>
      <div className="wrapper">
        <Card
          img={pic1}
          title="TECHNICAL"
          description="Improve your Technical Skills"
          high0="Domains"
          high1="Power BI"
          high2="Web Development"
          high3="Plans"
          high4="6 - 8 weeks"
          high5="Open for 12 months - Online / Offline"
          linkto="www.google.com"
          //   pdflink=''
        />

        <Card
          img={pic2}
          title="NON TECHNICAL"
          description="Improve your Non-Technical Skills"
          high0="Domains"
          high1="Digital Marketing"
          high2="Professional Communication"
          high3="Plans"
          high4="6 weeks - 3 hours / week - Online"
          high5="Open for 12 months - Online / Offline"
        />
      </div>
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
          <i>{props.high4}</i>
          <br />
          <br />
          {props.high5}
          <br />
          <br />
        </div>
      </div>
      <card.Link className="card__btn" href={props.linkto}>
        Start Now
      </card.Link>
    </div>
  );
}

export default Vaani;
