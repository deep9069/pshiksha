
import React, { useState, useEffect } from 'react';
import blogPost from '../data/blog.json';
// import { NavLink } from 'react-router-dom';
import '../../components/AllPosts/index.css';

/**
* @author
* @function AllPosts 
**/

const AllPosts  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div className="grid">

{
  posts.map(post => {

    return(

     


      <div className="col">


           
   
    
<div className ="card">
<p className="lead">
    
    <img className ="img" src={post.Image} style={{width: "200px"},{height: "150px"}} />
      <div className = "itemtext">{post.name} </div>
      <div className = "itemtext">{post.emailId} </div>  
     

    </p>

</div>
       </div>
           
     




    )

  })
}

    </div>
   )

 }

export default AllPosts 