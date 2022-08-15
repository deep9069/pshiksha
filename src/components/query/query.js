import React from "react";
import "./Query.css";
import { RiSendPlane2Line } from "react-icons/ri";
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
  <div style={{backgroundColor:"#aafff8",marignTop:"1%"}}>
  <div className="btncntr" style={{ display: "flex"}}>
          <a target="_blank" rel="noreferrer" className="btn-post" style={{marginLeft:"73.5%",marginTop:"2%"}}>
            <h4 style={{ display: "inline" }}>Post</h4>
            &nbsp;
            <RiSendPlane2Line />
          </a>
        </div>
        <br/>
        <br/>
        </div>
        
  </>
    )
}

export default query;