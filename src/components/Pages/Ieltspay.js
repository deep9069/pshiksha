import "./Ielts.css";
import React from "react";
import Button from "react-bootstrap/Button";

const Ieltspay = () => {
  return (
    <>
      <div className="ieltsp">
        <br/>
        <div className="ielphead">
          <h2>
            <u>Payments for IELTS Coaching</u>
          </h2>
        </div>
      </div>
      <div className="ieltsinside">
        <br />
        <div className="ielph2">
          <p>IELTS General [Online] - &#8377;21,600/-</p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="ielph3"
              href="https://pages.razorpay.com/pl_IjbrRvJvULIKbg/view"
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
        <div className="ielph2">
          <p>IELTS General [Offline] - &#8377;25,200/-</p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="ielph3"
              href="https://pages.razorpay.com/pl_IjbwieknmytDa3/view"
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
        <div className="ielph2">
          <p>IELTS Academic training [Online] - &#8377;28,800/-</p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="ielph3"
              href="https://pages.razorpay.com/pl_Ijc1FdnzIzV0dE/view"
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
        <div className="ielph2">
          <p>IELTS Academic training [Offline] - &#8377;32,400/-</p>
        </div>
        <div>
          <div>
            <br />
            <Button
              className="ielph3"
              href="https://pages.razorpay.com/pl_IjcCxyBW30Hgaf/view"
              target="_blank"
              rel="noreferrer"
            >
              Pay Now
            </Button>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
};

export default Ieltspay;
