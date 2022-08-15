import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"
import Footer from "../footer/Footer";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Blog = () => {
  return (
    <>
      {/* <Back title='Blog Posts' /> */}
      {/* <div className='blog padding'> */}
        <div className="maindiv" style={{margin:"5%"}}>
        
        </div>

        <div className='testimonal'>
        <h1 style={{ textAlign: "center" }}>Blogs</h1>
        <div className="newpostbtn">
        <NavLink
          exact
          to="/newpost"
          className="btn-intern"
          style={{ float: "right", marginRight: "2%" }}
        >
          <div style={{ display: "inline", marginRight: "10px" }}>
            <FaPlus />
          </div>
          <h3 style={{ display: "inline" }}>Create New</h3>
        </NavLink>
        </div>
          <div>
          <BlogCard />
          </div>
        </div>
        {/* </div> */}
      {/* </div> */}
      <Footer/>
    </>
  )
}

export default Blog
