import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"
import Footer from "../footer/Footer";
export const Blog = () => {
  return (
    <>
      {/* <Back title='Blog Posts' /> */}
      <div className='blog padding'>
        <div className="container">
        <div className='content-grid2'>
          <BlogCard />
        </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Blog
