import React from 'react';
import { testimonal } from "./walloffamedata.js";
import './walloffame.css';
import { FaLinkedinIn } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const walloffame = () => {
  return (
    <>
      <div className="testimonal padding">
        <h2 className="wallhead1" style={{ fontSize: "50px" }}>
          <b>
            Wall Of<span style={{ color: "#29e6a7" }}> Fame</span>
          </b>
        </h2>
        <br />
        <br />
        <div className="container-wall">
          <div className="content-grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.pic} alt="" />
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <h4 className="name-post">
                      {val.post}
                    </h4>
                  </div>
                  <div className="wall-college">{val.college}</div>
                </div>
                <p
                  style={{
                    color: "bluish",
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {val.date}
                </p>
                <br />
                <a href={val.link} className="test-link-1">
                  <FaLinkedinIn />
                </a>
                <a href={val.cert} className="test-link-2">
                  <GrCertificate />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default walloffame