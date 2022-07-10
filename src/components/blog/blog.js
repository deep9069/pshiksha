import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"
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
    </>
  )
}

export default Blog
