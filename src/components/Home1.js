import React from "react"
// import Heading from "../../common/heading/Heading"
import "./Home1.css"
import ImageSlider from "./carosel/imageSlider"
import images from "./carosel/images"
import Overview from "./websiteoverview/overview";

export const Home1 = () => {
  return (
    <>
     <div className='hero'>
          <div className='row'>
            <p style={{ color: "black" ,textAlign:"left", }}>WELCOME TO PREMI JI's SHIKSHA 4.0</p>
            <p style={{ color: "black" ,textAlign:"left",fontWeight:20}}>Start a new learning journey with Us.</p>
            <div className='button' style={{
                position: 'relative',
                right:110,
                }}>
              <button className='primary-btn' 
                style={{fontWeight: 22, color: 'black', padding:7,borderRadius:4,backgroundColor:"transparent"}} >
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'  style={{position: 'relative',top: 9,}}>
                </i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
        </div>
      </div>
      <ImageSlider images={images}/>
      <Overview/>
    </>
  )
}

export default Home1
