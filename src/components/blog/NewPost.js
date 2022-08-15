import React from 'react';
import "./blog.css";
import Ck from "./ck";
import { RiSendPlane2Line } from "react-icons/ri";
const Post  = () => {


  return (
    <>
      <div className="newpost" style={{ marginTop: 100 }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "4%" }}>
            <h1>Creating New Post</h1>
          </div>
          <a target="_blank" rel="noreferrer" className="btn-post">
            <h4 style={{ display: "inline" }}>Post</h4>
            &nbsp;
            <RiSendPlane2Line />
          </a>
        </div>
        <div style={{ marginTop: "2%", marginLeft: "4%" }}>
          {/* <h3 style={{marginBottom:5,marginLeft:10}}>Heading</h3> */}
          <input
            className="post"
            type="text"
            name="heading"
            placeholder="Heading"
            style={{ width: "96%", height: 40, fontSize: 15 }}
          ></input>
          <div style={{ marginTop: 50, width: "96%" }}>
            <Ck />
          </div>
          <div style={{ marginTop: "10%" }}></div>
        </div>
      </div>
    </>
  );

 }

export default Post;