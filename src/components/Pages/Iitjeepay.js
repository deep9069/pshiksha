import React from 'react'
import "./Iitjee.css";
import Button from "react-bootstrap/Button";
import { FaBook } from "react-icons/fa";

const Iitjeepay = () => {
  return (
    <>
      <div className="iitp">
        <br />
        <div className="iitphead">
          <h2>
            <u>
              Payments for <span style={{ color: "#29e6a7" }}> IIT JEE</span>{" "}
              Live Coaching
            </u>
          </h2>
        </div>
      </div>
      <div className="iitinside">
        <br />
        <div className="iit2">
          <p>
            {" "}
            <FaBook /> One Time Payment - &#8377;1,17,999 (Inclusive of 18% GST)
          </p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="iit3"
              href="https://pages.razorpay.com/pl_H2e81jva78oZR2/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </Button>
          </div>
        </div>
        <br />
        <div class="verticalLineieltsp"></div>
        <br />
        <div className="iit2">
          <p>
            {" "}
            <FaBook /> Three Time Payment - &#8377;1,21,000 (Inclusive of 18%
            GST)
          </p>
        </div>
        <div className="iitpara">
          <i>Fee breakup: 71,000 + 25,000 + 25,000 = 1,21,000 (total) ​</i>
          <br />
          <br />
          1st Installment of (60,170+18%GST)=71,000 to be paid by: [to be paid
          during enrolment]
          <br />
          <br />
          2nd Installment of (21,187+18%GST)=25,000 to be paid by: [to be paid
          before 15-06-2022]
          <br />
          <br />
          3rd Installment of (21,187+18%GST)=25,000 to be paid by: [to be paid
          before 15-10-2022]
          <br />
          <br />
          Total Fees = &#8377;1,02,544 + 18% = &#8377;1,21,000
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <div>
            <br />
            <br />
            <br />
            <Button
              href="https://pages.razorpay.com/pl_H6FZkuMAH6xCUU/view"
              className="btn-align-1-pay"
              target="_blank"
            >
              Pay Now (1st Time Installment)
            </Button>
            <Button
              href="https://pages.razorpay.com/pl_H6FtIJYr9ofQHF/view"
              className="btn-align-2-pay"
              target="_blank"
            >
              Pay Now (2nd Time Installment)
            </Button>
            <Button
              href="https://pages.razorpay.com/pl_H6FtIZNeFqSxuv/view"
              className="btn-align-3-pay"
              target="_blank"
            >
              Pay Now (3rd Time Installment)
            </Button>
          </div>
        </div>
        <br />
        <div class="verticalLineieltsp"></div>
        <br />
        <div className="iit2">
          <p>
            {" "}
            <FaBook /> IIT JEE 2023 Study Material & Test Series -
            &#8377;19,999/-
          </p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="iit3"
              href="https://pages.razorpay.com/pl_IjF4OiHS3hKam3/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </Button>
          </div>
        </div>
        <br />
        <div class="verticalLineieltsp"></div>
        <br />
        <div className="iit2">
          <p>
            {" "}
            <FaBook /> IIT JEE 2023 Online Test Series - &#8377;4,499/-
          </p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="iit3"
              href="https://pages.razorpay.com/pl_IjFK1wtRjKfkM3/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </Button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Iitjeepay