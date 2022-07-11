import React from "react"
import { testimonal } from "../../dummydata"
// import Heading from "../../common/heading/Heading"
import "./blog.css"
import logo from "../assets/15410.jpg";
import Sidebar from "./sidebar";
const BlogPost = () => {
  return (
    <>
   <div class="grid-container">
       <div class="grid-item">
          <h5>HEADING OF BLOG HERE</h5>
            <p style={{fontSize:20,marginTop:"px"}}>all the content of the blog and image will be here</p>
       <div>
              <img src={logo}  style={{
                width: "100%",
                height: "70%",
                verticalAlign: "center",
                marginTop: 40,
              }}/>
              </div>
  </div>
  <div class="grid-item"><h5>Top Blogs</h5>
  <div style={{marginRight:"2%"}}><Sidebar/></div>
  </div>
  
</div>
    </>
  )
}

export default BlogPost