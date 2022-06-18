// import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import "./Home.css";

// export const Home = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
  
//   return (
//     <>

//       <nav className="nav">
//         <div className="nav-cont">
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="trending"
//                 activeClassName="active"
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 Trending
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/recommended"
//                 activeClassName="active"
//                 className="nav-link"
                
//               >
//                 Recommended
//               </NavLink>
//             </li>
            
//           </ul>
         
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Home;

import React from "react";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
