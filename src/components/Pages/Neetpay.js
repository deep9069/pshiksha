import React from "react";
import "./Neet.css";
import Button from "react-bootstrap/Button";
import { FaBook } from "react-icons/fa";

const Neetpay = () => {
  return (
    <>
      <div className="neetpwhole">
        <div className="neetp">
          <br />
          <div className="neetphead">
            <h2>
              <u>
                Payments for <span style={{ color: "#29e6a7" }}> NEET</span>{" "}
                Live Coaching
              </u>
            </h2>
          </div>
        </div>
        <div className="neetinside">
          <br />
          <div className="neet2">
            <p>
              {" "}
              <h4>
                <FaBook /> One Time Payment - &#8377;1,17,999 (Inclusive of 18%
                GST)
              </h4>
            </p>
          </div>
          <div>
            <div>
              <br />
              <Button
                className="neet3"
                href="https://pages.razorpay.com/pl_Iis0058FjJECvk/view"
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
          <br/>
          <br/>
          <div className="neet2">
            <p>
              {" "}
              <h4>
                <FaBook /> Three Time Payment - &#8377;1,21,000 (Inclusive of
                18% GST)
              </h4>
            </p>
          </div>
          <div className="neetpara">
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
          <div className="neet-3-btns">
            <div>
              <br />
              <br />
              <br />
              <Button
                href="https://pages.razorpay.com/pl_Iis8nL0KRW7Psi/view"
                className="btn-align-1-pay"
                target="_blank"
              >
                Pay Now (1st Time Installment)
              </Button>
              <Button
                href="https://pages.razorpay.com/pl_IisEhB7NRnYwDP/view"
                className="btn-align-2-pay"
                target="_blank"
              >
                Pay Now (2nd Time Installment)
              </Button>
              <Button
                href="https://pages.razorpay.com/pl_IisN6gk0YlaCDj/view"
                className="btn-align-3-pay"
                target="_blank"
              >
                Pay Now (3rd Time Installment)
              </Button>
            </div>
          </div>
          <br />
          <br/>
          <div class="verticalLineieltsp"></div>
          <br />
          <br/>
          <div className="neet2">
            <p>
              {" "}
              <h4>
                <FaBook /> NEET 2023 Study Material & Test Series -
                &#8377;19,999/-
              </h4>
            </p>
          </div>
          <div>
            <div>
              <br />
              <Button
                className="neet3"
                href="https://pages.razorpay.com/pl_IjFAhwHnqLXbBV/view"
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
          <br/>
          <br/>
          <div className="neet2">
            <p>
              {" "}
              <h4>
                <FaBook /> NEET 2023 Online Test Series - &#8377;4,499/-
              </h4>
            </p>
          </div>
          <div>
            <div>
              <br />
              <Button
                className="neet3"
                href="https://pages.razorpay.com/pl_IjFQvXAVuyq3fy/view"
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
      </div>
    </>
  );
};

export default Neetpay;
