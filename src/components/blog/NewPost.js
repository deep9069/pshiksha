import React from 'react';
import "./blog.css";
import Ck from "./ck";
import { Button, Container } from "react-bootstrap";
import { RiSendPlane2Line } from "react-icons/ri";
const Post  = () => {


  return(
<>
    <div className='newpost' style={{marginTop:100}}>
    <div style={{display:"flex"}}>
    <div style={{marginLeft:"8%"}}>
    <h1 >Creating New Post</h1>
    </div>
    <div style={{marginLeft:"60%"}}>
    <Button
          target="_blank"
          rel="noreferrer"
          class="btn-intern"
        >
         <h4 style={{display:"inline"}}>Post</h4>
          &nbsp;
          <RiSendPlane2Line/>
        </Button>
        
        </div>
        </div>
    <div style={{marginTop:"2%",marginLeft:"4%"}}>
      {/* <h3 style={{marginBottom:5,marginLeft:10}}>Heading</h3> */}
    <input className="post" type="text" name="heading" placeholder="Heading" style={{width:"96%",height:40,marginLeft:49,fontSize:15}}></input>
    <div style={{marginLeft:"4%",marginTop:50}}>
      
      <Ck/>
    </div>
    
    </div>
    
    </div>
</>
   )

 }

export default Post;