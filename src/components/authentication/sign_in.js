// import React, {useState} from 'react';
// import './sign_in.css'
// export const Sign_in = ()=> {
//     return(
//       <div className="form">
//         <div>
//             Sign Up
//             </div>
//           <div className="form-body">
//               <div className="username">
//                   <label className="form__label" for="firstName">First Name </label>
//                   <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
//               </div>
//               <div className="lastname">
//                   <label className="form__label" for="lastName">Last Name </label>
//                   <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
//               </div>
//               <div className="email">
//                   <label className="form__label" for="email">Email </label>
//                   <input  type="email" id="email" className="form__input" placeholder="Email"/>
//               </div>
//               <div className="password">
//                   <label className="form__label" for="password">Password </label>
//                   <input className="form__input" type="password"  id="password" placeholder="Password"/>
//               </div>
//               <div className="confirm-password">
//                   <label className="form__label" for="confirmPassword">Confirm Password </label>
//                   <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
//               </div>
//           </div>
//           <div class="footer">
//               <button type="submit" class="btn">Register</button>
//           </div>
//       </div>      
//     )       
// }
// export default Sign_in;

import React from "react";
import "./sign_in.css";
const sign_in =({setLoginUser})=>{
    return (
        <div className="homepage">
            <h1>Welcome to Home page</h1>
            <div className="button" onClick={() =>setLoginUser({})}>Logout</div>
        </div>
    )
}

export default sign_in