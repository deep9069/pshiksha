import React from 'react'
import './programme.css'
import { TiTick } from "react-icons/ti";
import { Button } from "react-bootstrap";
import pdf1 from "../assets/Shiksha_IIT-JEE.pdf";

const programme = () => {
  return (
    <>
      <div className="progmain">
        <div className="proghead1">
          <h1 style={{ fontSize: "40px" }}>
            <b>Heading</b>
          </h1>
        </div>
        <br />
        <br />
        <div className="proghead2">
          <h2>
            <TiTick /> Tutorial Classes
          </h2>
        </div>
        <br />
        <p className="progpara1">
          We bring the best teachers to deliver private one on one
          online/offline classes so that student can clear their exams with
          flying colors
        </p>
        <br />
        <br />
        <div className="proghead2">
          <h2>
            <TiTick /> Notes
          </h2>
        </div>
        <br />
        <p className="progpara1">
          Worried, how to cover the whole syllabus in this short period of time.
          We at P. Shiksha 4.0 are here for you to deliver the notes prepared by
          one of the best faculties which can help you to clear the exams with
          flying colors
        </p>
        <br />
        <Button href={pdf1} className="progbtn1" target="_blank">
          Demo Notes
        </Button>
        <br />
        <br />
        <br />
        <br />
        <div className="proghead2">
          <h2>
            <TiTick /> Previous Years Question Papers
          </h2>
        </div>
        <br />
        <p className="progpara1">
          Going through previous year papers will help you and gives a better
          idea of exam pattern. They contain segments from the vital parts of
          chapter. We at P. Shiksha 4.0 are here to help you to provide you the
          solutions of previous year papers which can help you to clear the
          exams with flying colors
        </p>
        <br />
        <br/>
        <div class="progcont">
          <div class="seats">Seats Filled : 80%</div>
        </div>
        <br/>
        <Button href="" className="progbtn2" target="_blank">
          Book Now
        </Button>
        <Button href="" className="progbtn3" target="_blank">
          Contact Us
        </Button>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default programme