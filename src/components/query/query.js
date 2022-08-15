import React from "react";
import "./Query.css";
const query  = () => {


    return(
  <>
  <div className="query">
  <div className="text1">
  <h2>For all Enquiries, please fill the form</h2>
  </div>
  <div className="rest">
  <div>
  <input className="post" type="text" name="name" placeholder="Name" style={{width:"inherit",height:40,fontSize:15}}></input>
  <input className="post1" type="text" name="email" placeholder="Email" style={{width:"auto",height:40,fontSize:15}}></input>
  </div>
  <input className="post" type="text" name="subject" placeholder="subject" style={{width:"auto",height:40,fontSize:15}}></input>
  <input className="post1" type="text" name="phone" placeholder="Phone" style={{width:"auto",height:40,fontSize:15}}></input>
  <br/>
  <br/>

  <textarea class="textAreaMultiline" 
          placeholder="Please type your message here..."
          rows="10" cols="55"
          >
          
          </textarea>
  </div>
  </div>
  </>
    )
}

export default query;