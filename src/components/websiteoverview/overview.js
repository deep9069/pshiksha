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
        {/* <div className='container'> */}
          <div className='left row' >
            <img className="img1" src={courseimage} alt='' />
          </div>
          <div className='right row' style={{marginRight:"5%",display:"flex"}}>
  
            <div className='items'>
            <p style={{textAlign:"center",fontSize:20,fontWeight:"bold",marginBottom:"7%"}}>Benefits About Online Learning Expertise</p>
              {homeAbout.map((val) => {
                return (
                  <div className='item'>
                    <div className="row">
                    <div className='img1'>
                      <img src={val.cover} alt='' />
                    </div>
                      <h2 style={{display:"flex",flexDirection:"row", color: "black", marginLeft:"5px",marginTop:"10px"}}>{val.title}</h2>
                    </div>
                      <p style={{ color: "black" ,textAlign:"left",fontSize:16,marginTop:17}}>{val.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        {/* </div> */}
      </div>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard
