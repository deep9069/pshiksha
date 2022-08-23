import React from 'react'
import './programme.css'
import { TiTick } from "react-icons/ti";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import pdf1 from "../assets/Shiksha_IIT-JEE.pdf";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
        <a href={pdf1} className="progbtn1" target="_blank">
          Demo Notes
        </a>
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
        <br />
        <div class="progcont">
          <div class="seats">Seats Filled : 80%</div>
        </div>
        <br />
        <a href="" className="progbtn2" target="_blank">
          Book Now
        </a>
        <Popup
          trigger={
            <a className="progbtn3">
              Contact Us
            </a>
          }
          position="top center"
        >
          
           <div style={{display:"flex"}}>
            <AiFillPhone /><div style={{marginLeft:"3px"}}>+(91)95991-39063, <br/>+(91)98216-93299</div>
            </div>
            <hr/>
            <div style={{display:"flex"}}>
            <MdEmail /> <div>pshiksha4.0@gmail.com</div>
            </div>
        </Popup>
        <br />
      </div>
    </>
  );
}

export default programme