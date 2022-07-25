import React from "react"
// import Heading from "../common/heading/Heading"
import "./overview.css"
import { homeAbout } from "../../dummydata"
import courseimage from "./coursesimg.png";
// import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <div className='aboutHome'>
        <div className='container'>
          <div className='left row' >
            <img className="img1" src={courseimage} alt='' />
          </div>
          <div className='right row' style={{marginRight:"5%",display:"flex"}}>
  
            <div className='items'>
            <p style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Benefits About Online Learning Expertise</p>
              {homeAbout.map((val) => {
                return (
                  <div className='item flex' style={{justifyContent: "space-around"}}>
                    <div className="row">
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                      <h2 style={{ color: "black", marginLeft:"35px",marginTop:"10px"}}>{val.title}</h2>
                    </div>
                      <p style={{ color: "black" ,textAlign:"left",fontSize:18,marginTop:17}}>{val.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard
