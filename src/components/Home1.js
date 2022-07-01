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
            <p style={{ color: "black" ,textAlign:"left",fontSize:22 }}>WELCOME TO PREMI JI's SHIKSHA 4.0</p>
            <p style={{ color: "black" ,textAlign:"left",fontSize:18}}>Start a new learning journey with Us.</p>
          
              <button className='btn-ielts' 
                >
                VIEW COURSES <i className='fa fa-long-arrow-alt-right' >
                </i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}

        </div>
      </div>
      <ImageSlider images={images}/>
      <Overview/>
    </>
  )
}

export default Home1
