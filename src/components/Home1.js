import React from "react"
// import Heading from "../../common/heading/Heading"
import "./Home1.css"
import ImageSlider from "./carosel/imageSlider"
import images from "./carosel/images"
import Overview from "./websiteoverview/overview";
import { NavLink } from "react-router-dom";
export const Home1 = () => {
  return (
    <>
     <div className='hero'>
          <div className='row'>
            <div className="txtbtn">
            <p style={{ color: "black" ,textAlign:"left",fontSize:22, fontWeight:"bold"}}>WELCOME TO PREMI JI's SHIKSHA 4.0</p>
            <p style={{ color: "black" ,textAlign:"left", fontWeight:"bold"}}>Start a new learning journey with Us.</p>
            {/* <NavLink exact to="/newpost" className="btn-intern" style={{float:"right"}}>
      
      <div style={{display:"inline",marginRight:"5px"}}><FaPlus/></div><h3 style={{display:"inline"}}>Create New</h3>
    </NavLink> */}
              <button className='btn-ielts' 
                >
                  <NavLink exact to="/sitemap">
                VIEW COURSES <i className='fa fa-long-arrow-alt-right' >
                </i>
                </NavLink>
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
