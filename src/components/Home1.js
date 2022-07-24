import React from "react"
// import Heading from "../../common/heading/Heading"
import "./Home1.css"
import ImageSlider from "./carosel/imageSlider"
import images from "./carosel/images"
import Overview from "./websiteoverview/overview";
import { NavLink } from "react-router-dom";
import Update from "../pages/updateofdata";
import Footer from "./footer/Footer";
import photo from "./assets/10502.jpg"
import Query from "./query/query"
export const Home1 = () => {
  return (
    <>
     <div className='hero'>
     
          <div className='row'>
            <div className="txtbtn" style={{marginTop:"90%",height:"20%"}}>
            <p style={{ color: "black" ,textAlign:"left",fontSize:21, fontWeight:"bold"}}>WELCOME TO PREMI JI's SHIKSHA 4.0</p>
            <p style={{ color: "black" ,textAlign:"left", fontWeight:"bold"}}>Start a new learning journey with Us.</p>
            {/* <NavLink exact to="/newpost" className="btn-intern" style={{float:"right"}}>
      
      <div style={{display:"inline",marginRight:"5px"}}><FaPlus/></div><h3 style={{display:"inline"}}>Create New</h3>
    </NavLink> */}
               <NavLink exact to="/sitemap">
              <button className='btn-ielts' 
                >
                 
                VIEW COURSES <i className='fa fa-long-arrow-alt-right' >
                </i>
              </button>
              </NavLink>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
</div>
        </div>
        <img
              src={photo}
              className="photo"
              />
      </div>
      <ImageSlider className="slider" images={images}/>
      <Overview/>
      <Update/>
      <Query/>
      <Footer/>
    </>
  )
}

export default Home1
