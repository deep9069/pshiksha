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
          <div className='left row'>
            <img src={courseimage} alt='' />
          </div>
          <div className='right row'>
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
            <p>Learn Anything</p>
            <p style={{ color: "bluish" ,textAlign:"center",fontSize:18}}>Benefits About Online Learning Expertise</p>
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flex'>
                    <div className="row">
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                      <h2 style={{ color: "black" }}>{val.title}</h2>
                    </div>
                      <p style={{ color: "black" ,textAlign:"left",fontSize:18}}>{val.desc}</p>
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
