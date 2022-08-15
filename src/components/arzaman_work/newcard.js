import React from 'react'
import './newcard.css'
import Rating from './rating'
const Newcard = (props) => {
  return (
    <>
      <div id="card">
        <div>
          <div id="title" class="text">{props.name}</div>
          {/* <div id="artist" class="text">{props.instructor}</div> */}
          
          <div id="album" class="text" style={{ fontSize: "13px" }}>{props.details}</div>

          <div id="rating">
            <Rating />
          </div>
          <img className='img2'style={{height:"-webkit-fill-available",width:"40%"}} src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg" alt="cover" />
        </div>
      </div>
    </>
  )
}

export default Newcard