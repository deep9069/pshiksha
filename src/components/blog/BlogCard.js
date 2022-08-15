import React from "react"
import { blog } from "../../dummydata"
import "./blog.css"
const BlogCard = () => {
  return (
    <>

        {/* <div className="container-blog" style={{ marginTop: 100 }}> */}
          {/* <Heading subtitle='TESTIMONIAL' title='Our Successful Students' /> */}

          <div className="grid2">
            {blog.map((val) => (
              <div className="items shadow">
                <div className="box-flex">
                  {/* <i className='fa fa-user'></i> */}
                  <div className="img">
                    <img src={val.cover} alt="" />
                    {/* <i className='fa fa-quote-left icon'></i> */}
                  </div>
                  <div className="blog-name">
                    <h3>{val.title}</h3>
                    <br />
                    <span>{val.type}</span>
                  </div>
                </div>
                {/* <p style={{ color: "bluish" ,textAlign:"center",fontSize:18}}>{val.desc}</p> */}
              </div>
            ))}
          </div>
        {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default BlogCard
