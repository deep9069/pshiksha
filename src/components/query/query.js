import React from "react";
import "./Query.css";
const query  = () => {


    return(
  <>
  <div className="query" style={{display:"flex",backgroundColor:"#aafff8"}}>
  <div style={{marginLeft:"5%",width:420,marginTop:"11%"}}>
  <h2>For all Enquiries, please fill the form</h2>
  </div>
  <div style={{marginLeft:"25%",width:"100%",marginTop:"10px"}}>
  <input className="post" type="text" name="name" placeholder="Name" style={{width:"80%",height:40,fontSize:15,backgroundColor:"#baede9"}}></input>
  <br/>
  <br/>
  <input className="post" type="text" name="email" placeholder="Email" style={{width:"39%",height:40,fontSize:15,backgroundColor:"#baede9"}}></input>
  <input className="post" type="text" name="phone" placeholder="Phone" style={{width:"39%",height:40,fontSize:15,marginLeft:"12px",backgroundColor:"#baede9"}}></input>
  <br/>
  <br/>
  <input className="post" type="text" name="subject" placeholder="subject" style={{width:"80%",height:40,fontSize:15,backgroundColor:"#baede9"}}></input>
  <br/>
  <br/>
  <textarea class="textAreaMultiline" 
          placeholder="Please type your message here..."
          rows="15" cols="70"
          style={{backgroundColor:"#baede9"}}
          >
          
          </textarea>
  </div>
  </div>
  </>
    )
}

export default query;