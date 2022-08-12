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
import Newcard from "./arzaman_work/newcard";

export const Home1 = () => {
  return (
    <>
    <div className="maincont" style={{ backgroundColor:"red"}}>
     <div className='hero'>
     
          <div className='row1'>
            <div className="txtbtn">
            <p style={{ color: "black" ,textAlign:"left",fontSize:18, fontWeight:"bold"}}>WELCOME TO PREMI JI's SHIKSHA 4.0</p>
            <p style={{ color: "black" ,textAlign:"left", fontWeight:"bold"}}>Start a new learning journey with Us.</p>
            
              
              <NavLink exact to="/sitemap">
              <button className='btn-ielts' 
                >
                 
                VIEW COURSES <i className='fa fa-long-arrow-alt-right' >
                </i>
              </button>
              </NavLink>
              
</div>
        </div>
        <img
              src={photo}
              className="photo"
              />
      </div>
      <ImageSlider className="slider" images={images}/>
      <Overview/>
      <h2 style={{ textAlign: "center", fontSize: "55px", marginBottom: "5%" }}>
        Our Top Rated <span style={{ color: "#29E6A7" }}>Courses</span>
      </h2>
      <div className="ratingcard-area" style={{ display: "flex", justifyContent: "space-around" }}>
      <Newcard
          name="Frontend Developer"
          instructor="Mayank Sharma"
          details="An all in one course for an aspiring frontent developer "
        />
        <Newcard
          name="Frontend Developer"
          instructor="Mayank Sharma"
          details="An all in one course for an aspiring frontent developer "
        />
        <Newcard
          name="Backend Developer"
          instructor="Arzamaan"
          details="An all in one course for an aspiring frontent developer"
        />
      </div>
      <Update/>
      <Query/>
      <Footer/>
      </div>
    </>
  )
}

export default Home1
