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
      <div className="ratingcard-area">
        <div><Newcard
          name="Machine Learning & AI"
          details="Kickstart Your Career With Machine Learning Course. Learn how to implement the latest machine learning and artificial intelligence technology and level up your existing ML skills with practical experience."
        /></div>
        <div><Newcard
          name="Power BI"
          details="Get started with Microsoft Power BI and learn new skills with Power BI training. Our hands-on guided-learning approach helps you meet your goals quickly, gain confidence, and learn at your own pace."
        /></div>
        <div><Newcard
          name="Digital Marketing"
          details="Get started with the digtal marketing course. Learn in-demand skills like SEO, SEM, email, content marketing, product promotion and more."
        /></div>
        <div><Newcard
          name="Professional Communication"
          details="Step up your professional career with the Professional Communication course. These are designed to provide freshers and or professional with the tools that they need to communicate clearly and effectively in theor career.
          "/></div>
        <div><Newcard
          name="Web Development"
          details="Start your web developemnt journey with the online courses for building websites from scratch using popular tools and languages like HTML, CSS, Python, JavaScript, and more."
        /></div>
      </div>
      <Update/>
      <Query/>
      <Footer/>
    </>
  )
}

export default Home1
