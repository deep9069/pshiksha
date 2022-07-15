import React from "react"
import { blog } from "../../dummydata"
import "./blog.css"
import { Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const BlogCard = () => {
  return (
    <>
    {/* <div className="blogcont"> */}
    <div className='testimonal padding'>
    
      <h2 style={{textAlign:"center",marginBottom:-25,fontSize:"30"}}>Blogs</h2>
      <NavLink exact to="/newpost" className="btn-intern" style={{float:"right"}}>
      
          <div style={{display:"inline",marginRight:"5px"}}><FaPlus/></div><h3 style={{display:"inline"}}>Create New</h3>
        </NavLink>

        <div className='container' style={{marginTop:100}}>
          {/* <Heading subtitle='TESTIMONIAL' title='Our Successful Students' /> */}

          <div className='content-grid2'>
            {blog.map((val) => (
              <div className='items shadow'>
                <div className='box-flex'>
                {/* <i className='fa fa-user'></i> */}
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    {/* <i className='fa fa-quote-left icon'></i> */}
                  </div>
                  <div className='name'>
                    <h2>{val.title}</h2>
                    <span>
                    {val.type}
                    </span>
                   
                  </div>
                </div>
                {/* <p style={{ color: "bluish" ,textAlign:"center",fontSize:18}}>{val.desc}</p> */}
                
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default BlogCard
