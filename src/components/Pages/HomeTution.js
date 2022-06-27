import React from "react"
import { testimonal } from "../../dummydata"
// import Heading from "../../common/heading/Heading"
import "./HomeTution.css"

const Testimonal = () => {
  return (
    <>
      <div className='testimonal padding'>
        <div className='container'>
          {/* <Heading subtitle='TESTIMONIAL' title='Our Successful Students' /> */}

          <div className='content-grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p style={{ color: "bluish" ,textAlign:"center",fontSize:18}}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonal
