import "./Ielts.css";
import React from "react";
// import Button from "react-bootstrap/Button";
import { FaBook } from "react-icons/fa";

const Ieltspay = () => {
  return (
    <>
      <div className="ieltsp">
        <br />
        <div className="ielphead">
          <h2>
            <u>
              Payments for <span style={{ color: "#29e6a7" }}> IELTS</span>{" "}
              Coaching
            </u>
          </h2>
        </div>
      </div>
      <div className="ieltsinside">
        <br />
        <div className="ielph2">
          <h4>
            <FaBook /> IELTS General [Online] - &#8377;21,600/-
          </h4>
        </div>
        <br />
          <a
            className="ielph3-btn"
            href="https://pages.razorpay.com/pl_IjbrRvJvULIKbg/view"
            target="_blank"
            rel="noreferrer"
          >
            Pay Now
          </a>
        <br />
        <br />
        <div class="verticalLineieltsp"></div>
        <br />
        <div className="ielph2">
          <h4>
            <FaBook /> IELTS General [Offline] - &#8377;25,200/-
          </h4>
        </div>
        <br/>
          <a
              className="ielph3-btn"
              href="https://pages.razorpay.com/pl_IjbwieknmytDa3/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </a>
        <br />
        <br />
        <div class="verticalLineieltsp"></div>
        <br />
        <br />
        <div className="ielph2">
          <h4>
            <FaBook /> IELTS Academic Training [Online] - &#8377;28,800/-
          </h4>
        </div>
        <br/>
            <a
              className="ielph3-btn"
              href="https://pages.razorpay.com/pl_Ijc1FdnzIzV0dE/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </a>
        <br />
        <br />
        <div class="verticalLineieltsp"></div>
        <br />
        <br />
        <div className="ielph2">
          <h4>
            <FaBook /> IELTS Academic Training [Offline] - &#8377;32,400/-
          </h4>
        </div>
        <br/>
            <a
              className="ielph3-btn"
              href="https://pages.razorpay.com/pl_IjcCxyBW30Hgaf/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </a>
          <br />
          <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Ieltspay;
