import React from "react"
import { blog } from "../../dummydata"
import "./blog.css"
const BlogCard = () => {
  return (
    <>
    <div className="blogcont">
    <div className='testimonal padding'>
      <h2 style={{textAlign:"center",marginBottom:50,fontSize:"30"}}>Blogs</h2>
        <div className='container'>
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
      </div>
    </>
  )
}

export default BlogCard
